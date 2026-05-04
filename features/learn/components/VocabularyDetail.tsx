"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, ChevronDown, ChevronLeft, ChevronRight, BookOpen, Bookmark, RotateCcw } from "lucide-react";
import { useSession, signIn } from "next-auth/react";
import useEmblaCarousel from "embla-carousel-react";
import { useSpeechSynthesis } from "@/features/learn/hooks/useSpeechSynthesis";
import SuccessAlert from "@/common/components/SuccessAlert";
import { useStreak } from "@/common/contexts/StreakContext";

interface VocabularyWord {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _id?: any;
    word: string;
    meaning: string;
    partOfSpeech?: string;
    level?: string;
    phonetic?: string;
    example?: string;
    exampleTranslation?: string;
}

interface VocabularyDetailProps {
    vocabularies: VocabularyWord[];
    title?: string;
}

interface SaveSuccessInfo {
    groupName: string;
    word: string;
}

const levelColors: Record<string, string> = {
    A1: "bg-emerald-500",
    A2: "bg-lime-500",
    B1: "bg-yellow-500",
    B2: "bg-orange-500",
    C1: "bg-red-500",
    C2: "bg-red-700",
};

const TWEEN_FACTOR_BASE = 0.36;

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max);

export default function VocabularyDetail({ vocabularies, title = "Learn This Vocabulary" }: VocabularyDetailProps) {
    const { data: session } = useSession();
    const { checkStreak } = useStreak();
    const [expanded, setExpanded] = useState(false);
    const [speakingWord, setSpeakingWord] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
    const { speak } = useSpeechSynthesis();

    // Save word states — per-word tracking
    const [savingWords, setSavingWords] = useState<Record<string, boolean>>({});
    const [savedWords, setSavedWords] = useState<Record<string, boolean>>({});
    const [saveErrors, setSaveErrors] = useState<Record<string, string>>({});
    const [successInfo, setSuccessInfo] = useState<SaveSuccessInfo | null>(null);

    // Embla Carousel
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "center",
        containScroll: false,
    });

    // Scale tween refs
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const setTweenNodes = useCallback((api: ReturnType<typeof useEmblaCarousel>[1]) => {
        if (!api) return;
        tweenNodes.current = api.slideNodes().map((slideNode) => {
            return slideNode.querySelector(".embla__slide__inner") as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((api: ReturnType<typeof useEmblaCarousel>[1]) => {
        if (!api) return;
        tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback((api: ReturnType<typeof useEmblaCarousel>[1]) => {
        if (!api) return;
        const engine = api.internalEngine();
        const scrollProgress = api.scrollProgress();
        const slidesInView = api.slidesInView();
        const isScrolling = engine.dragHandler.pointerDown();

        api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex: number) => {
                if (isScrolling || slidesInView.indexOf(slideIndex) !== -1) {
                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();
                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);
                                if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
                                if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        });
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
                    const scale = numberWithinRange(tweenValue, 0.7, 1).toString();
                    const tweenNode = tweenNodes.current[slideIndex];
                    if (tweenNode) {
                        tweenNode.style.transform = `scale(${scale})`;
                    }
                }
            });
        });
    }, []);

    // Carousel event handlers
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelectedIndex(index);

        // Auto-pronounce the active word
        const activeWord = vocabularies[index]?.word;
        if (activeWord) {
            speak(activeWord, {
                onStart: () => setSpeakingWord(activeWord),
                onEnd: () => setSpeakingWord(null),
            });
        }
    }, [emblaApi, vocabularies, speak]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const canScrollPrev = emblaApi?.canScrollPrev() ?? false;
    const canScrollNext = emblaApi?.canScrollNext() ?? false;

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        setScrollSnaps(emblaApi.scrollSnapList());
        tweenScale(emblaApi);

        emblaApi.on("reInit", setTweenNodes);
        emblaApi.on("reInit", setTweenFactor);
        emblaApi.on("reInit", () => tweenScale(emblaApi));
        emblaApi.on("scroll", () => tweenScale(emblaApi));
        emblaApi.on("slideFocus", () => tweenScale(emblaApi));
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect, setTweenNodes, setTweenFactor, tweenScale]);

    // Handlers
    const handleSpeak = (word: string, e: React.MouseEvent) => {
        e.stopPropagation();
        speak(word, {
            onStart: () => setSpeakingWord(word),
            onEnd: () => setSpeakingWord(null),
        });
    };

    const handleSaveWord = async (vocab: VocabularyWord) => {
        if (!session) {
            signIn("google");
            return;
        }

        const wordKey = vocab.word;
        setSavingWords((prev) => ({ ...prev, [wordKey]: true }));
        setSaveErrors((prev) => {
            const next = { ...prev };
            delete next[wordKey];
            return next;
        });

        try {
            const response = await fetch("/api/vocabulary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    word: vocab.word,
                    meaning: vocab.meaning,
                    partOfSpeech: vocab.partOfSpeech,
                    level: vocab.level,
                    phonetic: vocab.phonetic,
                    example: vocab.example,
                    exampleTranslation: vocab.exampleTranslation,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSavedWords((prev) => ({ ...prev, [wordKey]: true }));
                setSuccessInfo({
                    groupName: result.groupName || "Ungrouped",
                    word: vocab.word,
                });
                await checkStreak("word_save");
            } else {
                setSaveErrors((prev) => ({ ...prev, [wordKey]: result.error || "Save failed" }));
            }
        } catch {
            setSaveErrors((prev) => ({ ...prev, [wordKey]: "An error occurred" }));
        } finally {
            setSavingWords((prev) => ({ ...prev, [wordKey]: false }));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Success Alert */}
            <SuccessAlert
                isOpen={successInfo !== null}
                title="Word Saved!"
                message={
                    successInfo
                        ? `<strong>"${successInfo.word}"</strong> has been saved to <strong>${successInfo.groupName}</strong>`
                        : ""
                }
                linkText="View in My Vocabulary"
                linkHref="/profile?tab=vocabulary"
                duration={4}
                onClose={() => setSuccessInfo(null)}
            />

            {/* Section Header */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200 transition-all cursor-pointer group mb-4"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <BookOpen size={20} className="text-blue-600" />
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
                        <p className="text-sm text-gray-500">{vocabularies.length} words</p>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={20} className="text-gray-400" />
                </motion.div>
            </button>

            {/* Carousel */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden p-4"
                    >
                        {/* Embla Carousel */}
                        <div className="relative">
                            <div className="embla overflow-hidden" ref={emblaRef}>
                                <div className="embla__container flex">
                                    {vocabularies.map((vocab, index) => {
                                        const wordKey = vocab.word;
                                        const isSaving = savingWords[wordKey] || false;
                                        const isSaved = savedWords[wordKey] || false;
                                        const saveError = saveErrors[wordKey] || null;

                                        const isFlipped = flippedCards[index] || false;

                                        return (
                                            <div
                                                key={vocab._id || `${vocab.word}-${index}`}
                                                className="embla__slide flex-[0_0_85%] min-w-0 pl-3"
                                            >
                                                <div
                                                    className="embla__slide__inner transition-transform duration-150 will-change-transform"
                                                >
                                                    {/* Flip Card Container */}
                                                    <div
                                                        className="cursor-pointer h-[320px]"
                                                        style={{ perspective: "1000px" }}
                                                        onClick={() =>
                                                            setFlippedCards((prev) => ({
                                                                ...prev,
                                                                [index]: !prev[index],
                                                            }))
                                                        }
                                                    >
                                                        <motion.div
                                                            className="relative w-full h-full"
                                                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                                            style={{ transformStyle: "preserve-3d" }}
                                                        >
                                                            {/* ===== FRONT SIDE ===== */}
                                                            <div
                                                                className="absolute inset-0"
                                                                style={{ backfaceVisibility: "hidden" }}
                                                            >
                                                                <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-md flex flex-col">
                                                                    {/* Badges */}
                                                                    <div className="px-5 pt-5 pb-2 flex items-center justify-between">
                                                                        <div className="flex items-center gap-2 flex-wrap">
                                                                            {vocab.level && (
                                                                                <span
                                                                                    className={`px-2.5 py-1 text-xs font-bold text-white rounded-full ${levelColors[vocab.level] || "bg-gray-400"
                                                                                        }`}
                                                                                >
                                                                                    {vocab.level}
                                                                                </span>
                                                                            )}
                                                                            {vocab.partOfSpeech && (
                                                                                <span className="text-xs text-blue-600 italic font-medium bg-blue-50 px-2.5 py-1 rounded-full">
                                                                                    {vocab.partOfSpeech}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        <button
                                                                            onClick={(e) => handleSpeak(vocab.word, e)}
                                                                            className={`p-2 rounded-full transition-all cursor-pointer ${speakingWord === vocab.word
                                                                                    ? "bg-blue-100 text-blue-600"
                                                                                    : "hover:bg-gray-100 text-gray-400 hover:text-blue-600"
                                                                                }`}
                                                                            title="Pronounce word"
                                                                        >
                                                                            <Volume2
                                                                                size={20}
                                                                                className={speakingWord === vocab.word ? "animate-pulse" : ""}
                                                                            />
                                                                        </button>
                                                                    </div>

                                                                    {/* Word & Phonetic — centered */}
                                                                    <div className="flex-1 flex flex-col items-center justify-center px-5">
                                                                        <h4 className="text-3xl font-bold text-gray-900 capitalize mb-2">
                                                                            {vocab.word}
                                                                        </h4>
                                                                        {vocab.phonetic && (
                                                                            <span className="text-base text-gray-500 font-mono">
                                                                                {vocab.phonetic}
                                                                            </span>
                                                                        )}
                                                                    </div>

                                                                    {/* Flip Hint */}
                                                                    <div className="px-5 pb-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
                                                                        <RotateCcw size={12} />
                                                                        <span>Click to flip</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* ===== BACK SIDE ===== */}
                                                            <div
                                                                className="absolute inset-0"
                                                                style={{
                                                                    backfaceVisibility: "hidden",
                                                                    transform: "rotateY(180deg)",
                                                                }}
                                                            >
                                                                <div className="h-full bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-2xl border border-gray-200 shadow-md flex flex-col">
                                                                    {/* Back Content */}
                                                                    <div className="flex-1 px-5 py-5 overflow-y-auto space-y-4">
                                                                        {/* Meaning */}
                                                                        <div>
                                                                            <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                                                                Meaning
                                                                            </h5>
                                                                            <p className="text-base text-gray-800 leading-relaxed">
                                                                                {vocab.meaning}
                                                                            </p>
                                                                        </div>

                                                                        {/* Example */}
                                                                        {vocab.example && (
                                                                            <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm border border-gray-100">
                                                                                <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                                                                    Example
                                                                                </h5>
                                                                                <p className="text-sm text-gray-700 italic leading-relaxed">
                                                                                    &quot;{vocab.example}&quot;
                                                                                </p>
                                                                                {vocab.exampleTranslation && (
                                                                                    <p className="text-xs text-gray-500 mt-2">
                                                                                        {vocab.exampleTranslation}
                                                                                    </p>
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    {/* Save Button + Flip Hint */}
                                                                    <div className="px-5 py-3 border-t border-gray-200/50 flex items-center justify-between">
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                handleSaveWord(vocab);
                                                                            }}
                                                                            disabled={isSaving || isSaved}
                                                                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all cursor-pointer disabled:cursor-not-allowed shadow-sm ${isSaved
                                                                                    ? "bg-green-600 text-white"
                                                                                    : "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300"
                                                                                }`}
                                                                        >
                                                                            <Bookmark size={14} />
                                                                            {isSaving
                                                                                ? "Saving..."
                                                                                : isSaved
                                                                                    ? "✓ Saved"
                                                                                    : "Save Word"}
                                                                        </button>
                                                                        {saveError && (
                                                                            <span className="text-xs text-red-600">{saveError}</span>
                                                                        )}
                                                                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                                            <RotateCcw size={12} />
                                                                            <span>Click to flip</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={scrollPrev}
                                disabled={!canScrollPrev}
                                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all cursor-pointer ${canScrollPrev
                                        ? "hover:bg-gray-50 hover:shadow-xl text-gray-700"
                                        : "opacity-30 cursor-not-allowed text-gray-300"
                                    }`}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={scrollNext}
                                disabled={!canScrollNext}
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all cursor-pointer ${canScrollNext
                                        ? "hover:bg-gray-50 hover:shadow-xl text-gray-700"
                                        : "opacity-30 cursor-not-allowed text-gray-300"
                                    }`}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Counter */}
                        <div className="flex items-center justify-center mt-4 gap-2">
                            <span className="text-sm font-semibold text-gray-700">
                                {selectedIndex + 1}
                            </span>
                            <span className="text-sm text-gray-400">/</span>
                            <span className="text-sm text-gray-500">
                                {vocabularies.length}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
