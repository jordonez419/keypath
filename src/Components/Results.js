import react, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Results() {
    const navigate = useNavigate()
    const navToPrevious = () => {
        navigate('/')
    }
    return (
        <div>
            <Container>
                <h1 className="title">Results</h1>
                <div className='question'>
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
                </div>
                <button onClick={() => navToPrevious()}>Return</button>
            </Container>
        </div>
    )
}

export default Results;
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
