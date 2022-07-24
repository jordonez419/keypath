import React from "react";
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


function Learn2() {
    const navigate = useNavigate()
    const navToNext = () => {
        navigate('/learn/2')
    }
    const navToPrevious = () => {
        navigate('/')
    }

    return (
        <div className="react-transition swipe-right">
            <Container>
                <h1 className="title">Calculating Equilibrium Price:</h1>
                <div className="eq-example">
                    <div className="eq-item">
                        <h2 className="title">Variables</h2>
                        <p>Qs stands for quantity supplied</p>
                        <p>Qd stands for quantity demanded</p>
                        <p>P stands for price</p>

                    </div>
                    <h2 className="title">Equations</h2>
                    <div className="eq-item">
                        <p>Qs = 128 + 8P  </p>
                        <p>Qd = 478 - 6P  </p>
                    </div>
                    <h2 className="title">Solution</h2>
                    <p>We need to make the quantity supplied equal to the quantity demanded in order to determine the equilibrium price.
                        Using Basic Algebra, we can work our way down the equation.
                    </p>
                    <div className="eq-item">
                        <p>Qs = Qd</p>
                        <p>128 + 8P= 478 - 6P</p>
                        <p>128 + 8P +6P= 478</p>
                        <p>8P +6P= 478 -128</p>
                        <p>14P = 478 -128</p>
                        <p>14P = 478 -128</p>
                        <p>14P=350</p>
                        <p>P=$25</p>
                    </div>
                    <p>At the price of $25, the supply and demand curves will intersect. Therefore the equilibrium price is $25!</p>
                </div>

                {/* <img src={`${process.env.PUBLIC_URL}/assets/images/equilibrium-price.jpg`} alt='graph' /> */}
                <button onClick={() => navToPrevious()}>Previous</button>
                <button onClick={() => navToNext()}>Next</button>
            </Container>
        </div>
    )
}

export default Learn2;
const Container = styled.div`
margin-top: 1rem;
margin-bottom:1rem;
background-color:grey;
border: 1px solid black;
border-radius:5px;
padding:5rem;
width:50rem;
`
