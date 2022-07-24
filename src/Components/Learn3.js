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
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div className="react-transition swipe-right">

            <Container>
                <h1 className="title">Check out this video!</h1>
                <YouTube videoId="67DQlzX32oA" opts={opts} />
                {/* <img src={`${process.env.PUBLIC_URL}/assets/images/graph.png`} alt='graph' /> */}
                <button onClick={() => navToPrevious()}>Previous</button>
                <button onClick={() => navToNext()}>Next</button>
            </Container>
        </div>
    )
}

export default Learn3;
const Container = styled.div`
margin-top: 1rem;
margin-bottom:1rem;
background-color:grey;
border: 1px solid black;
border-radius:5px;
padding:5rem;
width:50rem;
`