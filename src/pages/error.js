import { useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import lottie from 'lottie-web';

const Background = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  background-color: #ffcc01;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
  z-index: -1;
  top: -265px;
`;

const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    margin-top: 0;
`;

const ErrorTitle = styled.h1`
    color: #fff;
    font-size: 5em;
    font-family: 'comictypemedium';
    background-color: #fc0303;
    padding: 10px;
    border-radius: 10px;
    margin-top: 0;
`;

const ErrorMsg = styled.p`
    color: #fc0303;
    font-size: 2em;
    text-align:center;
`;

const Lottie = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
    bottom: -50px;
    right: 150px;
`;

export const Error = () => {
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/loaders/batmanLoader'),
            name: "Batman",
            settings: {
                style: {
                    width: '50px',
                    height: '50px'
                }
            }
        })
    }, [])

    return (<>
        <Background></Background>
        <ErrorContainer>
            <Lottie ref={container} />
            <ErrorTitle>Error 404</ErrorTitle>
            <ErrorMsg>Sorry, this page doesn't exist</ErrorMsg>
            <NavLink style={
                {color:'#fff', 
                backgroundColor:'#000',
                padding:'20px',
                borderRadius:'10px',
                display:'block',
                fontSize:'2em', 
                textAlign:'center', 
                textDecoration:'none',
                marginTop:'2em',
                cursor:'pointer',
                }
            } to="/">Go Back</NavLink>
        </ErrorContainer>
        </>
    )    
}