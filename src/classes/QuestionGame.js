/**
 * spillogikk for 100 spørsmål spill
 */

import React from 'react';
import questions from '../data/questions.json';

export const getRandomQuestions = () => {
    const allQuestions = Object.values(questions);

    const currentDate = new Date();
    const seed = currentDate.getFullYear() * 10000 + (currentDate.getMonth() + 1) * 100 + currentDate.getDate();

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