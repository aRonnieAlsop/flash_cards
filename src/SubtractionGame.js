import React, { useState } from 'react';
import './SubtractionGame.css';  

const SubtractionGame = () => {
    const [firstNum, setFirstNum] = useState(getRandomNumber());
    const [secondNum, setSecondNum] = useState(getRandomNumber());
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

    function getRandomNumber() {
        return Math.floor(Math.random() * 11);
    }

    function getSecondNum(firstNum) {
        return Math.floor(Math.random() * (firstNum + 1)); 
    }

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
    };

    const checkAnswer = () => {
        const correctAnswer = firstNum - secondNum;
        if (parseInt(answer) === correctAnswer) {
            setFeedback('Correct!');
        } else {
            setFeedback('Try again!');
        }

        setTimeout(() => {
            const newFirstNum = getRandomNumber();
            setFirstNum(newFirstNum);
            setSecondNum(getSecondNum(newFirstNum));
            setAnswer('');
            setFeedback('');
        }, 2000);
    };

    return (
        <div className="container">
            <h1 className="header">Subtraction Flash Cards</h1>
            <div className="card">
                <h2 className="problem">
                    {firstNum} - {secondNum} = ?
                </h2>
                <input
                    type="number"
                    value={answer}
                    onChange={handleInputChange}
                    className="input"
                    autoFocus
                />
                <button onClick={checkAnswer} className="button">
                    Submit
                </button>
                <p className="feedback">{feedback}</p>
            </div>
            <div className="keyboard">
                {Array.from({ length: 10 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setAnswer(answer + i)}
                        className="keyButton"
                    >
                        {i}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SubtractionGame;
