import styled from 'styled-components/macro';

export const Background = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  background-color: #ffcc01;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
  z-index: -1;
  top: -265px;
    @media (max-width: 481px) {
        height: 50vh;
        top: -300px;
    }
`;

export const FormBox = styled.div`
    width: 40%;
    margin: 0 auto 8.17% auto;
    padding: 2% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    z-index: 200;
    @media (max-width: 1200px) {
        width: 70%;
    }
`;

export const FormTitle = styled.h1`
    color: #fff;
    font-family: 'comictypemedium';
    font-size: 3em;
    @media (max-width: 1200px) {
        margin-bottom: 0;
    }
`;

export const FormData = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const LabelInput = styled.label`
    font-size: 1.5em;
    width: 70%;
    text-align: left;
    margin-top: 5%;
    color: #fff;
    @media (max-width: 320px) {
        font-size: 1em;
    }
`;

export const Input = styled.input`
    width: 70%;
    border-radius: 20px;
    border: 1px solid #000;
    padding: 2%;
    margin: 2% 0;
    cursor: pointer;
    transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;
    :focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        border: 1px solid rgba(81, 203, 238, 1);
    }
`;

export const SendBtn = styled.input`
    width: 40%;
    font-size: 1.5em;
    font-weight: 700;
    border-radius: 20px;
    border: 1px solid #000;
    background-color: #fff;
    padding: 2%;
    margin: 3% 0;
    cursor: pointer;
    :hover {
        background-color: #000;
        color: #fff;
        border: 1px solid #fff;
    }
    @media (max-width: 1025px) {
        padding: 4%;
        font-size: 1em;
        text-align: center;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
`;