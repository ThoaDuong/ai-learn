"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Chrome-compatible TTS hook.
 * 
 * Chrome has a known bug where speechSynthesis.speak() silently fails if:
 * 1. Voices haven't been loaded yet (they load asynchronously)
 * 2. cancel() is called immediately before speak() with no delay
 * 3. The Utterance object is garbage collected before speaking finishes
 * 
 * This hook addresses all these issues.
 */
export function useSpeechSynthesis() {
    const voicesLoadedRef = useRef(false);
    // Keep a reference to the utterance to prevent garbage collection
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastSpeakRef = useRef<{ word: string, time: number } | null>(null);

    // Preload voices on mount — Chrome loads them asynchronously
    useEffect(() => {
        if (!('speechSynthesis' in window)) return;

        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                voicesLoadedRef.current = true;
            }
        };

        loadVoices();
        window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

        return () => {
            window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
            // Cancel any ongoing speech on unmount
            window.speechSynthesis.cancel();
        };
    }, []);

    const speak = useCallback((word: string, options?: { onStart?: () => void, onEnd?: () => void }) => {
        if (!('speechSynthesis' in window)) {
            console.warn("Speech synthesis not supported");
            return;
        }

        const now = Date.now();
        // Prevent duplicate calls (React Strict Mode or rapid clicks)
        // If same word requested within 500ms, ignore it
        if (lastSpeakRef.current &&
            lastSpeakRef.current.word === word &&
            (now - lastSpeakRef.current.time) < 500) {
            console.log(`TTS: Ignoring duplicate call for "${word}"`);
            return;
        }
        lastSpeakRef.current = { word, time: now };

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // Clear any pending start timeout from previous calls
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        // Chrome needs a small delay after cancel() before speak() works reliably
        // We track this timeout to prevent overlapping calls
        timeoutRef.current = setTimeout(() => {
            // Ensure the engine is not paused (common Chrome bug)
            if (window.speechSynthesis.paused) {
                window.speechSynthesis.resume();
            }

            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;

            // Try to pick a good English voice
            const voices = window.speechSynthesis.getVoices();
            console.log(`TTS: Found ${voices.length} voices to speak "${word}"`);

            // Preference: Local US English -> Google US English -> Any US English -> Any English
            // Local voices (localService=true) are faster and more reliable on Mac/Chrome
            const englishVoice = voices.find(v => v.lang === 'en-US' && v.localService)
                || voices.find(v => v.name.includes("Google US English"))
                || voices.find(v => v.lang === 'en-US')
                || voices.find(v => v.lang.startsWith('en'));

            if (englishVoice) {
                console.log(`TTS: Using voice ${englishVoice.name} (local: ${englishVoice.localService})`);
                utterance.voice = englishVoice;
            } else {
                console.warn("TTS: No English voice found, using default");
            }

            if (options?.onStart) utterance.onstart = options.onStart;

            utterance.onend = () => {
                console.log("TTS: Finished speaking");
                options?.onEnd?.();
                utteranceRef.current = null; // Release ref
            };

            utterance.onerror = (e) => {
                // Ignore "canceled" error if it happens due to new speech starting
                if (e.error === 'canceled') {
                    // console.log("TTS: Previous speech canceled");
                } else {
                    console.error("TTS Error:", e);
                    options?.onEnd?.();
                }
                utteranceRef.current = null;
            };

            // Store ref to prevent GC
            utteranceRef.current = utterance;

            console.log(`TTS: Speaking "${word}"...`);
            window.speechSynthesis.speak(utterance);
        }, 10); // Very short delay
    }, []);

    return { speak };
}
