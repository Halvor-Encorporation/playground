import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomQuestions } from '../classes/QuestionGame';
/**
 * Pages file for the 100-question game
 */

const Questions = () => {
    const [randomQuestions, setRandomQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const newQuestions = getRandomQuestions();
        setRandomQuestions(newQuestions);
    }, []);

    const handleNewQuestions = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Velkommen! Skål alle sammen!</h1>
            {randomQuestions.map((question, index) => (
                <div key={index}>
                    {index % 10 === 0 && index !== 0 && <h2>{index} SPØRSMÅL! SKÅL!</h2>}
                    <p>{question}</p>
                </div>
            ))}
            <h2>Game over. Chug drinken din!</h2>
            <button onClick={handleNewQuestions}>Gå tilbake</button> {}
        </div>
    );
};

export default Questions;