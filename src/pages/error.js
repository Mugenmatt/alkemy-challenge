import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

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
`;

const ErrorTitle = styled.h1`
    color: #fff;
    font-size: 4em;
    display: inline-block;
    background-color: rgba(255, 0, 0, 0.4);
    padding: 10px;
    border-radius: 10px;
`;

const ErrorMsg = styled.p`
    color: red;
    font-size: 2em;
    text-align:center;
`;

export const Error = ({setFetchDone, fetchDone}) => {
    return (
        <ErrorContainer>
            <Background></Background>
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
    )    
}