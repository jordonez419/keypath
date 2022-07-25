import React from "react";
import { useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube';
import styled from 'styled-components'


function Learn() {
    const navigate = useNavigate()
    const navToNext = () => {
        navigate('/learn/1')
    }
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div>
            {/* <div> */}

            <Container className='responsiveness-container-1'>

                <h1 className="title">What is Equilibrium Price?</h1>
                <p className="margin-top text">
                    Also called a market-clearing price, the equilibrium price is the price at which the producer can sell a
                    ll the units he wants to produce, and the buyer can buy all the units he wants.
                    With an upward-sloping supply curve and a downward-sloping demand curve, it is easy to visualize that the two will intersect at some point.
                    The graphic below illustrates the supply and demand curves reaching equilibrium.
                </p>
                <img className='graph' src={`${process.env.PUBLIC_URL}/assets/images/graph.png`} alt='graph' />
                <p className="margin-top text">
                    At this point, the market price is sufficient to induce suppliers to bring to market the same
                    quantity of goods that consumers will be willing to pay for at that price. Supply and demand are balanced or in equilibrium. The exact price and amount where this occurs depend on the shape and position of the respective supply
                    and demand curves, each of which can be influenced by several factors.

                </p>
                <button onClick={() => navToNext()}>Next</button>
            </Container>
        </div>
    )
}

export default Learn;
const Container = styled.div`
margin-top: 1rem;
margin-bottom:1rem;
background-color:#eceff1;
border: 5px solid black;
border-radius:10px;
padding:4rem;
// width:50rem;
// height:42rem;
`
