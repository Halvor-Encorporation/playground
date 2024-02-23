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

    const goBackHome = () => {
        navigate('/');
        window.scrollTo(0, 0);
    };

    return (
        <div style={{ maxWidth: '60%', margin: '0 auto' }}>
        <h1>Velkommen! Skål alle sammen!</h1>
        {randomQuestions.map((question, index) => (
            <>
                {index !== 0 && (index + 1) % 10 === 0 && (
                    <div key={`toast-${index}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', padding: '10px 0', borderRadius: '10px', marginBottom: '1px', textAlign: 'center' }}>
                        <h2 style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{index + 1} SPØRSMÅL! SKÅL!😎🍻</h2>
                    </div>
                )}
                <div key={index} style={{ backgroundColor: index % 2 === 0 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.06)', padding: '1px 0', borderRadius: '10px', marginBottom: '1px' }}>
                    <p>{question}</p>
                </div>
            </>
        ))}
        <h2>Game over. Chug drinken din!</h2>
        <p>Dette gjelder spilleren som holder kasteobjektet</p>
        <button onClick={goBackHome}>Gå tilbake</button>
    </div>
    

    );
};

export default Questions;