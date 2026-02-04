"use client";

import { useCallback, useRef, useEffect } from "react";

export const useGameSounds = () => {
    const correctAudioRef = useRef<HTMLAudioElement | null>(null);
    const wrongAudioRef = useRef<HTMLAudioElement | null>(null);
    const gameOverSadRef = useRef<HTMLAudioElement | null>(null);
    const gameOverHappyRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Pre-load audio files
        correctAudioRef.current = new Audio('/sounds/correct.mp3');
        wrongAudioRef.current = new Audio('/sounds/wrong.mp3');
        gameOverSadRef.current = new Audio('/sounds/game-over-sad.mp3');
        gameOverHappyRef.current = new Audio('/sounds/game-over-happy.mp3');

        // Set volume
        [correctAudioRef, wrongAudioRef, gameOverSadRef, gameOverHappyRef].forEach(ref => {
            if (ref.current) {
                ref.current.volume = 0.5;
            }
        });
    }, []);

    const playCorrect = useCallback(() => {
        if (correctAudioRef.current) {
            correctAudioRef.current.currentTime = 0;
            correctAudioRef.current.play().catch(() => { });
        }
    }, []);

    const playWrong = useCallback(() => {
        if (wrongAudioRef.current) {
            wrongAudioRef.current.currentTime = 0;
            wrongAudioRef.current.play().catch(() => { });
        }
    }, []);

    const playGameOverSad = useCallback(() => {
        if (gameOverSadRef.current) {
            gameOverSadRef.current.currentTime = 0;
            gameOverSadRef.current.play().catch(() => { });
        }
    }, []);

    const playGameOverHappy = useCallback(() => {
        if (gameOverHappyRef.current) {
            gameOverHappyRef.current.currentTime = 0;
            gameOverHappyRef.current.play().catch(() => { });
        }
    }, []);

    return { playCorrect, playWrong, playGameOverSad, playGameOverHappy };
};
