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

    /* Resets the quiz back to default */
    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };
    const navigate = useNavigate()

    const navToPrevious = () => {
        navigate('/widget')
    }

    return (
        <div>
            <Container className='responsiveness-container-4'>
                <h1 className="title"> Quiz</h1>
                {showResults ? (
                    //Final Results displayed
                    <div className="final-results">
                        <h1>Final Results</h1>
                        <h2>
                            {score} out of {questions.length} correct - (
                            {(score / questions.length) * 100}%)
                        </h2>
                        <button id='quiz-btn' onClick={() => restartQuiz()}>Restart</button>
                    </div>
                ) : (
                    //Question Card
                    <div className="question-card">
                        {/* Current Question  */}
                        <h2>
                            Question: {currentQuestion + 1} out of {questions.length}
                        </h2>
                        <h3 className="question-text text">{questions[currentQuestion].text}</h3>

                        {/* List of possible answers  */}
                        <ul>
                            {questions[currentQuestion].options.map((option) => {
                                return (
                                    <li className='text'
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
                <button onClick={() => navToPrevious()}>Exit</button>
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
`
