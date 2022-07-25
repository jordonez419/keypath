import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Quiz() {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const questions = [
        {
            text: "1.What is the Equilibrium Price of the given supply and demand?",
            options: [
                { id: 0, text: "A: 2.50", isCorrect: false },
                { id: 1, text: "B: 5.00", isCorrect: false },
                { id: 2, text: "C: 2.00", isCorrect: true },
                { id: 3, text: "D: 3.50", isCorrect: false },
            ],
        },
        {
            text: "2.What is the Equilibrium Price of the given supply and demand?",
            options: [
                { id: 0, text: "A: $20.00", isCorrect: true },
                { id: 1, text: "B: $15.00", isCorrect: false },
                { id: 2, text: "C: $30.00", isCorrect: false },
                { id: 3, text: "D: $25.00", isCorrect: false },
            ],
        },
        {
            text: "3.Equilibrium Price is the max amount of money that can be made in a sale?",
            options: [
                { id: 0, text: "A: True", isCorrect: false },
                { id: 1, text: "B: False", isCorrect: true }
            ],
        },
        {
            text: "4.Equilibrium Price is useful for companies to?",
            options: [
                { id: 0, text: "A: Makes as much profit as possible", isCorrect: false },
                { id: 1, text: "B: Maintain a balanced market", isCorrect: true },
                { id: 2, text: "C: Pay employees as much as possible", isCorrect: false },
                { id: 3, text: "D: None of the Above", isCorrect: false },
            ],
        }
    ];
    // Helper Functions

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };
    const navigate = useNavigate()
    const navToResults = () => {
        navigate('/results')
    }
    const navToPrevious = () => {
        navigate('/widget')
    }
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <Container>
                <h1 className="title"> Quiz</h1>
                {/* <div className='question'>
                    <p>1.What is the Equilibrium Price of the given supply and demand?</p>
                    <p>Qs = -100 + 150P  </p>
                    <p>Qd = 300 - 50P  </p>
                    <div className='multiple-choice'>
                        <label name='choice'>
                            <input type='radio' value='A' name='choice' /> A: 2.50
                        </label>
                        <label name='choice'>
                            <input type='radio' value='B' name='choice' /> B: 5.00
                        </label>
                        <label name='choice'>
                            <input type='radio' value='C' name='choice' /> C: 2.00
                        </label>
                        <label name='choice'>
                            <input type='radio' value='D' name='choice' /> D: 3.50
                        </label>
                    </div>
                </div>
                <div className='question'>
                    <p>2.What is the Equilibrium Price of the given supply and demand?</p>
                    <p>Qs = -4 + 8P  </p>
                    <p>Qd = 26 - 2P  </p>
                    <div className='multiple-choice'>
                        <label name='choice2'>
                            <input type='radio' value='A' name='choice2' /> A: $20.00
                        </label>
                        <label name='choice2'>
                            <input type='radio' value='B' name='choice2' /> B: $15.00
                        </label>
                        <label name='choice2'>
                            <input type='radio' value='C' name='choice2' /> C: $30.00
                        </label>
                        <label name='choice2'>
                            <input type='radio' value='D' name='choice2' /> D: $25.00
                        </label>
                    </div>
                </div>
                <div className='question'>
                    <p>3.Equilibrium Price is the max amount of money that can be made in a sale?</p>
                    <div className='multiple-choice'>
                        <label name='choice3'>
                            <input type='radio' value='A' name='choice3' /> A: True
                        </label>
                        <label name='choice3'>
                            <input type='radio' value='B' name='choice3' /> B: False
                        </label>
                    </div>
                </div>
                <div className='question'>
                    <p>4.Equilibrium Price is useful for companies to?</p>
                    <div className='multiple-choice'>
                        <label name='choice4'>
                            <input type='radio' value='A' name='choice4' /> A: Makes as much profit as possible
                        </label>
                        <label name='choice4'>
                            <input type='radio' value='B' name='choice4' /> B: Maintain a balanced market
                        </label>
                        <label name='choice4'>
                            <input type='radio' value='B' name='choice4' /> C: Pay employees as much as possible
                        </label>
                        <label name='choice4'>
                            <input type='radio' value='B' name='choice4' /> D: None of the Above
                        </label>
                    </div>
                </div> */}
                {/* <button onClick={() => navToResults()}>Submit</button>  */}
                {/* 2. Current Score  */}
                {/* <h2>Score: {score}</h2> */}

                {/* 3. Show results or show the question game  */}
                {showResults ? (
                    /* 4. Final Results */
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <h2>
                            {score} out of {questions.length} correct - (
                            {(score / questions.length) * 100}%)
                        </h2>
                        <button id='quiz-btn' onClick={() => navToPrevious()}>Back</button>
                        <button id='quiz-btn' onClick={() => restartGame()}>Restart</button>
                    </div>
                ) : (
                    /* 5. Question Card  */
                    <div className="question-card">
                        {/* Current Question  */}
                        <h2>
                            Question: {currentQuestion + 1} out of {questions.length}
                        </h2>
                        <h3 className="question-text">{questions[currentQuestion].text}</h3>

                        {/* List of possible answers  */}
                        <ul>
                            {questions[currentQuestion].options.map((option) => {
                                return (
                                    <li
                                        key={option.id}
                                        onClick={() => optionClicked(option.isCorrect)}
                                    >
                                        {option.text}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Quiz;
const Container = styled.div`
margin-top: 1rem;
margin-bottom:1rem;
background-color:#eceff1;
border: 5px solid black;
border-radius:10px;
padding:4rem;
width:50rem;
height:42rem;
`
