/**
 * spillogikk for 100 spørsmål spill
 */

import React from 'react';
import questions from '../data/questions.json';

export const getRandomQuestions = () => {
    const allQuestions = Object.values(questions);

    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
    const diff = currentDate - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const seed = currentDate.getFullYear() * 1000 + dayOfYear;

    const shuffledQuestions = shuffle(allQuestions, seed);

    const selected = shuffledQuestions.slice(0, 100);

    return selected;
};

const seededRandom = (seed) => {
    return () => {
        const a = 1664525;
        const c = 1013904223;
        const m = 2 ** 32;
        seed = (a * seed + c) % m;
        return seed / m;
    };
};

const shuffle = (array, seed) => {
    const random = seededRandom(seed);
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};