import styled from 'styled-components/macro';

export const Background = styled.div`
width: 100%;
height: 70vh;
position: absolute;
background-color: #ffcc01;
clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
z-index: -1;
top: -265px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-top: 0;
`;

export const ErrorTitle = styled.h1`
  color: #fff;
  font-size: 5em;
  font-family: 'comictypemedium';
  background-color: #fc0303;
  padding: 10px;
  border-radius: 10px;
  margin-top: 0;
  margin-bottom: 1%;
  @media (max-width: 1200px) {
      font-size: 4em;
  }
  @media (max-width: 1025px) {
      font-size: 4em;
  }
  @media (max-width: 769px) {
      font-size: 3em;
  }
  @media (max-width: 481px) {
      font-size: 3em;
  }
  @media (max-width: 320px) {
      font-size: 2em;
  }
`;

export const ErrorMsg = styled.p`
  color: #fc0303;
  font-size: 2em;
  text-align:center;
  margin-top: 0;
  @media (max-width: 769px) {
      margin-top: 2%;
  }
  @media (max-width: 481px) {
      /* font-size: 3em; */
  }
  @media (max-width: 320px) {
      font-size: 1.3em;
  }
`;

export const Lottie = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  bottom: 30px;
  right: 350px;
  @media (max-width: 1200px) {
      width: 300px;
      height: 300px;  
      bottom: 210px;
      right: 130px;
  }
  @media (max-width: 1025px) {
      width: 250px;
      height: 250px;  
      bottom: 240px;
      right: 80px;
  }
  @media (max-width: 769px) {
      width: 150px;
      height: 150px;  
      bottom: 310px;
      right: 120px;
  }
  @media (max-width: 481px) {
      width: 150px;
      height: 150px;  
      bottom: 300px;
      right: -0px;
  }
  @media (max-width: 320px) {
      width: 70px;
      height: 70px;  
      bottom: 290px;
      right: 20px;
  }
`;


export const GoBackBtn = styled.input`
    color:#fff; 
    background-color:#000;
    padding:20px;
    border-radius:10px;
    display:block;
    font-size:2em; 
    text-align:center; 
    text-decoration: none;
    margin-top: 100%;
    cursor:pointer;
    :hover {
        background-color: rgba(0, 0, 0, .6);
        box-shadow: inset 0 0 15px #000;
    }
`;