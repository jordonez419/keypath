import React from "react";
import { useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube';
import styled from 'styled-components'


function Learn3() {
    const navigate = useNavigate()
    const navToNext = () => {
        navigate('/widget')
    }
    const navToPrevious = () => {
        navigate('/learn/1')
    }
    const opts = {
        height: '410',
        width: '660',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        // <div className="react-transition swipe-right">
        <div>

            <Container>
                <h1 className="title">Learn More!</h1>
                <YouTube videoId="67DQlzX32oA" opts={opts} />
                {/* <img src={`${process.env.PUBLIC_URL}/assets/images/graph.png`} alt='graph' /> */}
                <button onClick={() => navToPrevious()}>Back</button>
                <button onClick={() => navToNext()}>Next</button>
            </Container>
        </div>
    )
}

export default Learn3;
const Container = styled.div`
margin-top: 1rem;
margin-bottom:1rem;
background-color:#eceff1;
color:#3b3a30;
border: 5px solid black;
border-radius:10px;
padding:4rem;
width:50rem;
`
