import React, { useState } from 'react';
import './SubtractionGame.css';

const SubtractionGame = () => {
    
    const equationPool = [
        { firstNum: 10, secondNum: 0 }, { firstNum: 10, secondNum: 1 }, { firstNum: 10, secondNum: 2 },
        { firstNum: 10, secondNum: 3 }, { firstNum: 10, secondNum: 4 }, { firstNum: 10, secondNum: 5 },
        { firstNum: 10, secondNum: 6 }, { firstNum: 10, secondNum: 7 }, { firstNum: 10, secondNum: 8 },
        { firstNum: 10, secondNum: 9 }, { firstNum: 10, secondNum: 10 },
        { firstNum: 9, secondNum: 0 }, { firstNum: 9, secondNum: 1 }, { firstNum: 9, secondNum: 2 },
        { firstNum: 9, secondNum: 3 }, { firstNum: 9, secondNum: 4 }, { firstNum: 9, secondNum: 5 },
        { firstNum: 9, secondNum: 6 }, { firstNum: 9, secondNum: 7 }, { firstNum: 9, secondNum: 8 },
        { firstNum: 9, secondNum: 9 },
        { firstNum: 8, secondNum: 0 }, { firstNum: 8, secondNum: 1 }, { firstNum: 8, secondNum: 2 },
        { firstNum: 8, secondNum: 3 }, { firstNum: 8, secondNum: 4 }, { firstNum: 8, secondNum: 5 },
        { firstNum: 8, secondNum: 6 }, { firstNum: 8, secondNum: 7 }, { firstNum: 8, secondNum: 8 },
        { firstNum: 7, secondNum: 0 }, { firstNum: 7, secondNum: 1 }, { firstNum: 7, secondNum: 2 },
        { firstNum: 7, secondNum: 3 }, { firstNum: 7, secondNum: 4 }, { firstNum: 7, secondNum: 5 },
        { firstNum: 7, secondNum: 6 }, { firstNum: 7, secondNum: 7 },
        { firstNum: 6, secondNum: 0 }, { firstNum: 6, secondNum: 1 }, { firstNum: 6, secondNum: 2 },
        { firstNum: 6, secondNum: 3 }, { firstNum: 6, secondNum: 4 }, { firstNum: 6, secondNum: 5 },
        { firstNum: 6, secondNum: 6 },
        { firstNum: 5, secondNum: 0 }, { firstNum: 5, secondNum: 1 }, { firstNum: 5, secondNum: 2 },
        { firstNum: 5, secondNum: 3 }, { firstNum: 5, secondNum: 4 }, { firstNum: 5, secondNum: 5 },
        { firstNum: 4, secondNum: 0 }, { firstNum: 4, secondNum: 1 }, { firstNum: 4, secondNum: 2 },
        { firstNum: 4, secondNum: 3 }, { firstNum: 4, secondNum: 4 },
        { firstNum: 3, secondNum: 0 }, { firstNum: 3, secondNum: 1 }, { firstNum: 3, secondNum: 2 },
        { firstNum: 3, secondNum: 3 },
        { firstNum: 2, secondNum: 0 }, { firstNum: 2, secondNum: 1 }, { firstNum: 2, secondNum: 2 },
        { firstNum: 1, secondNum: 0 }, { firstNum: 1, secondNum: 1 }
    ];


    const getRandomEquation = () => {
        const randomIndex = Math.floor(Math.random() * equationPool.length);
        return equationPool[randomIndex];
    };

 
    const [firstNum, setFirstNum] = useState(getRandomEquation().firstNum);
    const [secondNum, setSecondNum] = useState(getRandomEquation().secondNum);
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');

  
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
            const newEquation = getRandomEquation();
            setFirstNum(newEquation.firstNum);
            setSecondNum(newEquation.secondNum);
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
