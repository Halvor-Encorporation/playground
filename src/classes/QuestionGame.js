/**
 * spillogikk for 100 spørsmål spill
 */

import React from 'react';
import questions from '../data/questions.json';

export const getRandomQuestions = () => {
    const allQuestions = Object.values(questions);

    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());

    const selected = shuffledQuestions.slice(0, 100);

    return selected;

};