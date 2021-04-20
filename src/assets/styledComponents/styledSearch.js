
import styled from 'styled-components/macro';
import  searchIcon  from '../img/search-icon.svg';

export const SearchContent = styled.div`
width: 80%;
margin: auto;
padding: 20px 100px;
background-color: rgba(0, 0, 0, 0.5);
margin-bottom: 3%;
border-radius: 20px;
z-index: 100;
@media (max-width: 1025px) {
    width: 60%;
}
@media (max-width: 481px) {
    width: 30%;
}
`;

export const Background = styled.div`
width: 100%;
height: ${(props) => props.height};
position: absolute;
background-color: #ffcc01;
clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
z-index: -1;
top: -265px;
transition: all 0.30s ease-in-out;
@media (max-width: 481px) {
    top: -300px;
}
`;

export const TitleSearch = styled.h1`
font-family: 'comictypemedium';
font-size: 4em;
font-weight: 700;
text-align: center;
color: #fff;
@media (max-width: 481px) {
    font-size: 1.9em;
    width: 100%;
}
`;

export const TitleRules = styled.p`
font-size: 2em;
color: rgba(255, 255, 255, .8);
font-weight: 700;
margin-top: 3%;
text-align: center;
@media (max-width: 1025px) {
    font-size: 1.5em;
}
@media (max-width: 769px) {
    font-size: 1em;
    margin-bottom: 10%;
}
@media (max-width: 481px) {
    display: none;
}
`;

export const RulesClarification = styled.p`
display: ${({display}) => display};
font-size: 2em;
color: red;
font-weight: 700;
text-align: center;
margin-bottom: 3%;
@media (max-width: 1025px) {
font-size: 1.8em;
}
@media (max-width: 769px) {
font-size: 1.5em;
}
@media (max-width: 481px) {
font-size: 1em;
}
@media (max-width: 320px) {
font-size: 0.7em;
}
`;

export const AlignmentHeroes = styled.p`
color: #fff;
font-weight: 700;
display:inline-block;
width: 40%;
font-size: 2em;
margin: 2% 0 5% 5%;
text-align: center;
@media (max-width: 1025px) {
    font-size: 1.7em;
    margin-top: 10%;
}
@media (max-width: 769px) {
    width: 43%;
}
@media (max-width: 481px) {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1em;
}
`;

export const AlignmentHeroesData = styled.span`
color: ${({colorNumber}) => colorNumber};
display: inline-block;
font-size: 2em;
vertical-align: middle;
transition: all 1s ease-in-out;
@media (max-width: 481px) {
    font-size: 1em;
    margin-left: 6%;
}
`;

export const Search = styled.div`
text-align: center;
width: 100%;
margin-top: 4%;
`;

export const SearchInput = styled.input`
width: 40%;
font-family: 'comictypemedium';
color:#8a0303;
font-size: 2em;
padding: 3px 0px 3px 3px;
transition: all 0.30s ease-in-out;
outline: none;
border: 1px solid #DDDDDD;
:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    border: 1px solid rgba(81, 203, 238, 1);
}
@media (max-width: 1200px) {
    width: 60%;
}
@media (max-width: 769px) {
    width: 85%;
}
@media (max-width: 481px) {
    width: 50%;
    font-size: 1em;
    padding: 10%;
    margin-bottom: 10%;
    :hover {
        padding: 10%;
    }
}
`;

export const SearchBtn = styled.input`
vertical-align: top;
width: 3%;
background-image: url(${searchIcon});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: rgba(81, 203, 238, .7);
border: 1px solid rgba(81, 203, 238, 0);
outline: none;
padding: 0.77%;
transition: all 0.30s ease-in-out;
cursor: pointer;
:hover {
    background-color: rgba(81, 203, 238, 1);
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
}
@media (max-width: 1200px) {
    padding: 1.25%;
    width: 5%;
}
@media (max-width: 1025px) {
    padding: 1.96%;
    width: 7%;
}
@media (max-width: 769px) {
    padding: 2.7%;
    width: 9%;
}
@media (max-width: 481px) {
    padding: 10%;
    width: 14%;
}
`;

export const AllHeroes = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-bottom: 3%;
@media (max-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
@media (max-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
}
`;

export const BackHomeBtn = styled.p`
width: 30%;
margin: 0 auto 3% auto;
color: #fff;
padding: 10px;
font-size: 2em;
font-weight: 300;
transition: all 0.3s ease-in-out;
text-align: center;
border: 0.1em solid #000;    
border-radius: 10px;
box-shadow: inset 0px 0px 10px #000;
:hover {
    background-color: #000;
    color: #fff;
}
@media (max-width: 769px) {
    width: 50%;
    margin-top: 15%;
}
@media (max-width: 481px) {
    width: 100%;
    font-size: 1.5em;
}
`;

export const LoadingBox = styled.div`
width: 1000px;
height: 1000px;    
top: 365px;
right: 360px;
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 0.30s ease-in-out;
@media (max-width: 1200px) {
    width: 900px;
    height: 900px;  
    top: 345px;
    right: 100px;
}
@media (max-width: 1025px) {
    width: 800px;
    height: 800px;  
    top: 400px;
    right: 70px;
}
@media (max-width: 769px) {
    width: 700px;
    height: 700px;  
    top: 540px;
    right: 0;
}
@media (max-width: 481px) {
    width: 600px;
    height: 600px;  
    top: 240px;
    right: -100px;
}
@media (max-width: 320px) {
    width: 500px;
    height: 500px;  
    top: 300px;
    right: -100px;
}
`;

export const LoadingMsg = styled.p`
color: #000;
font-size: 5em;
display: inline-block;
font-family: 'comictypemedium';
`;

export const LottieOne = styled.div`
width: 100%;
height: 100%;
`;