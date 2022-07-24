import React from "react";
import { useNavigate } from 'react-router-dom'

function Quiz() {
    const navigate = useNavigate()
    const navToHome = () => {
        navigate('/')
    }
    return (
        <div>
            quiz component
            <button onClick={() => navToHome()}>Return</button>
        </div>
    )
}

export default Quiz;