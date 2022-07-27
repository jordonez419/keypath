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
        <div>
            <Container className='responsiveness-container-2'>
                <h1 className="title">Calculating Equilibrium Price</h1>
                <article className="eq-example">
                    <section className="eq-item">

                        <p className="text">Qs stands for quantity supplied</p>
                        <p className="text">Qd stands for quantity demanded</p>
                        <p className="text">P stands for price</p>

                    </section>

                    <section className="eq-item">
                        <p className="text">Qs = 128 + 8P  </p>
                        <p className="text">Qd = 478 - 6P  </p>
                    </section>
                    <h2 className="title">Solution</h2>
                    <p className="text">We need to make the quantity supplied equal to the quantity demanded in order to determine the equilibrium price.
                        Using Basic Algebra, we can work our way down the equation.
                    </p>
                    <section className="eq-item">
                        <p className="text">Qs = Qd</p>
                        <p className="text">128 + 8P= 478 - 6P</p>
                        <p className="text">128 + 8P +6P= 478</p>
                        <p className="text">8P +6P= 478 -128</p>
                        <p className="text">14P = 478 -128</p>
                        <p className="text">14P = 478 -128</p>
                        <p className="text">14P=350</p>
                        <p className="text">P=$25</p>
                    </section>
                    <p className="text">At the price of $25, the supply and demand curves will intersect. Therefore, the equilibrium price is $25!</p>
                </article>

                <button className='margin-bottom' onClick={() => navToPrevious()}>Back</button>
                <button className='margin-bottom' onClick={() => navToNext()}>Next</button>

            </Container>
        </div>
    )
}

export default Learn2;
const Container = styled.div`
margin-top: 1rem;
margin-bottom:1rem;
background-color:#eceff1;
border: 5px solid black;
border-radius:10px;
padding:4rem;
max-width:50rem;
`
