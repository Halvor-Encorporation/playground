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
            {randomQuestions.map((question, index) => {
                // Check to display the SKÅL message after every 10 questions, starting with the 10th question
                const isSkalPoint = (index + 1) % 10 === 0 && index !== 99; // Exclude the 100th question

                return (
                    <React.Fragment key={index}>
                        <div style={{ backgroundColor: index % 2 === 0 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.06)', padding: '1px 0', borderRadius: '10px', marginBottom: '1px' }}>
                            {/* Display question text properly */}
                            <p>{`${question}`}</p>
                        </div>
                        {isSkalPoint && (
                            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', padding: '10px 0', borderRadius: '10px', marginBottom: '1px', textAlign: 'center' }}>
                                <h2 style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{index + 1} SPØRSMÅL! SKÅL!😎🍻</h2>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
            {randomQuestions.length === 100 && (
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', padding: '10px 0', borderRadius: '10px', marginBottom: '1px', textAlign: 'center' }}>
                    <h2 style={{ color: 'rgba(0, 0, 0, 0.7)' }}>100 SPØRSMÅL! SKÅL!😎🍻</h2>
                </div>
            )}
            <h2>Game over. Chug drinken din!</h2>
            <p>Dette gjelder spilleren som holder kasteobjektet</p>
            <button onClick={goBackHome}>Gå tilbake</button>
        </div>
    

    );
};

export default Questions;