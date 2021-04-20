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

export const HomeContent = styled.div`
    width: 85%;
    margin: auto;
    padding: 20px 50px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    margin-bottom: 3%;
    z-index: 100;
    @media (max-width: 1025px) {
        width: 80%;
    }
    @media (max-width: 481px) {
        width: 60%;
    }
    @media (max-width: 320px) {
        width: 60%;
    }
`;

export const TitleHome = styled.h1`
    font-family: 'comictypemedium';
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3%;
    color: #fff;
    @media (max-width: 1025px) {
        font-size: 2.8em;
    }
    @media (max-width: 769px) {
        font-size: 2.5em;
        margin-bottom: 10%;
    }
    @media (max-width: 481px) {
        font-size: 1.5em;
    }
    @media (max-width: 320px) {
        font-size: 2em;
        text-align: center;
    }
`;

export const HierarchyPoints = styled.p`
    font-family: 'comictypemedium';
    color: #fff;
    font-size: 2em;
    text-align: center;
    @media (max-width: 769px) {
        display: none;
    }

`;


export const TeamBox = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1025px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    @media (max-width: 769px) {
        justify-items: center;
    }
    @media (max-width: 481px) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`;

export const TeamContainer = styled.div`
    margin-right: 2%;
    width: 400px;
    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 769px) {
        margin: 0;
        width: 200px;
    }
    @media (max-width: 481px) {
        width: 100px;
        justify-content: center;
    }
    
`;

export const Hero = styled.div`
    width: 100%;
    background: ${(props) => props.background};
    margin-bottom: 10%;
    border: 1em solid #000;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    :hover {
        transform: translateY(-2em);
        perspective: 800px;
        perspective-origin: 150% 100%;
        box-shadow: 0 0 25px #000;
    }
    @media (max-width: 1025px) {
        width: 300px;
    }
    @media (max-width: 769px) {
        width: 200px;
        margin: 0;
    }
    @media (max-width: 320px) {
        width: 150px;
    }
`;

export const HeroData = styled.div`
    margin: 5% 5% 0 5%;
`;

export const HeroImg = styled.img`
    width: 100%;
    max-height: 300px;
    border-radius: 10px;
    cursor: pointer;
`;

export const HeroName = styled.h3`
    text-align: center;
    font-size: 2em;
    color: #fff;
    @media (max-width: 1025px) {
        font-size: 1.5em;
        margin-top: 3%;
    }
    @media (max-width: 320px) {
        font-size: 1em;
    }
`;

export const HeroPowerStats = styled.p`
    font-weight: 300;
    margin: 0.7em 0;
    font-size: 1.5em;
    color: #fff;
    margin-left: 25%;
    @media (max-width: 769px) {
        margin-left: 15%;
        font-size: 1.2em;
    }
    @media (max-width: 481px) {
        margin-left: 10%;
    }
    @media (max-width: 320px) {
        font-size: 1em;
        margin-left: 5%;
    }
`;

export const DataHeroPowerstats = styled.span`
    color: ${(props) => props.heroPowerstatsColor};
    font-weight: 700;
`;

export const DeleteBox = styled.div`
    margin: 3% 0 5% 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const DeleteBtn = styled.input`
    padding: 20px;
    font-size: 1em;
    font-weight: bolder;
    margin-top: 3%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
    :hover {
        background-color: #000;
        color: #fff;
    }
`;

export const AddHeroBtnBox = styled.p`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 769px) {
        margin-top: 10%;
        width: 85%;
    }
    @media (max-width: 320px) {
        width: 90%;
    }
`;

export const AddHeroBtn = styled.span`
    width: 100%;
    font-size: 150px;
    display: inline-block;
    padding: 10px 25px;
    margin: 0 auto 10% auto;
    text-align: center;
    color: #fff;
    border: 2px solid #fff;
    transition: all 0.30s ease-in-out;
    border-radius: 10px;
    box-shadow: inset 0 0 50px #000;
    &:hover {
        background-color: #000;
        border: 2px solid #fff;
        color: #fff;
    }
    @media (max-width: 320px) {
        width: 70%;
        padding: 15px 30px;
        font-size: 5em;
    }
`;

export const TeamPowerstatsBox = styled.div`
    width: 25%;
    margin:auto;
    @media (max-width: 1025px) {
        font-size: 1em;
        width: 60%;
    }
    @media (max-width: 769px) {
        width: 50%;
    }
    @media (max-width: 320px) {
        width: 80%;
    }
`;

export const TeamPowerstats = styled.p`
    color: #fff;
    font-size: 2em;
    @media (max-width: 1025px) {
        font-size: 1.5em;
    }
    @media (max-width: 320px) {
        font-size: 1em;
    }
`;

export const DataTeamPowerstats = styled.span`
    font-size: 1.5em;
    color: ${(props) => props.teamPowerstatsColor};
    @media (max-width: 1025px) {
        font-size: 1em;
    }
    @media (max-width: 481px) {
        font-size: 0.9em;
    }
    @media (max-width: 320px) {
        font-size: 1em;
    }
`;

export const ModalBox = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const HeroImgModal = styled.img`
    width: 100%;
    max-height: 800px;
`;

export const HeroNameModal = styled.p`
    font-size: 2em;
    display: block;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
    color: #fff;
    @media (max-width: 769px) {
        font-size: 1.5em;
        margin-top: 10%;
    }
`;

export const HeroDescriptionModal = styled.p`
    font-size: 2em;
    display: inline-block;
    margin: 0.5em 0 0.5em 0;
    color: #fff;
    text-align: center;
    @media (max-width: 769px) {
        font-size: 1.5em;
    }
`;

export const HeroDataModal = styled.span`
    font-size: 2em;
    color: red;
    text-align: center;
    display: block;
    margin: 0.5em 0 0.5em 0;
    @media (max-width: 769px) {
        font-size: 1.5em;
    }
`;

export const CloseModal = styled.button`
    font-size: 2em;
    width: 20%;
    padding: 20px;
    margin: auto;
    margin: 5% auto;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    :hover {
        background-color: #000;
        border: 2px solid #fff;
        color:#fff;
    }
    @media (max-width: 1025px) {
        width: 50%;
    }
`;

export const SpanColorPowerstats = styled.span`
    @media (max-width: 1025px) {
        font-size: 0.57em;
    }
`;

export const LottieContainer = styled.div`
    width: 150px;
    height: 150px;    
    top: -240px;
    left: 540px;
    position: absolute;
    transition: all 0.30s ease-in-out;
    animation: fly ease-in-out 3s infinite;
    @keyframes fly {
        0% { opacity: 0;}
        10% { opacity: 0;}
        20% {
            opacity: 1;
            top: -240px;
            left: 540px;
        }
        40% {
            opacity: 1;
            top: -240px;
            left: 540px;
        }
        45% {    opacity: 0;}
        50% {    opacity: 0;}
        60% {
            opacity: 1;
            top: -240px;
            left: 100px;
        }
        70% {
            opacity: 1;
            top: -240px;
            left: 100px;
        }
        75% {    opacity: 0;}
        85% {    opacity: 0;}
        90% {
            opacity: 1;
            top: -240px;
            left: 540px;
        }
        95% {
            opacity: 1;
            top: -240px;
            left: 540px;
        }
        100% {    opacity: 0;}
    }
    @media (max-width: 1200px) {
        @keyframes fly {
        0% {    opacity: 0;}
        10% {    opacity: 0;}
        20% {
            opacity: 1;
            top: -210px;
            left: 0;
        }
        40% {
            opacity: 1;
            top: -210px;
            left: 0;
        }
        45% {    opacity: 0;}
        50% {    opacity: 0;}
        60% {
            opacity: 1;
            top: -210px;
            left: 400px;
        }
        70% {
            opacity: 1;
            top: -210px;
            left: 400px;
        }
        75% {    opacity: 0;}
        85% {    opacity: 0;}
        90% {
            opacity: 1;
            top: -210px;
            left: 0;
        }
        95% {
            opacity: 1;
            top: -210px;
            left: 0;
        }
        100% {    opacity: 0;}
        }
    }
    @media (max-width: 1025px) {
        @keyframes fly {
        0% {    opacity: 0;}
        10% {    opacity: 0;}
        20% {
            opacity: 1;
            top: -200px;
            left: 20px;
        }
        40% {
            opacity: 1;
            top: -200px;
            left: 20px;
        }
        45% {    opacity: 0;}
        50% {    opacity: 0;}
        60% {
            opacity: 1;
            top: -200px;
            left: 370px;
        }
        70% {
            opacity: 1;
            top: -200px;
            left: 370px;
        }
        75% {    opacity: 0;}
        85% {    opacity: 0;}
        90% {
            opacity: 1;
            top: -200px;
            left: 20px;
        }
        95% {
            opacity: 1;
            top: -200px;
            left: 20px;
        }
        100% {    opacity: 0;}
        }
    }
    @media (max-width: 769px) {

        @keyframes fly {
        0% {    opacity: 0;}
        10% {    opacity: 0;}
        20% {
            opacity: 1;
            top: -170px;
            left: 20px;
        }
        40% {
            opacity: 1;
            top: -170px;
            left: 20px;
        }
        45% {    opacity: 0;}
        50% {    opacity: 0;}
        60% {
            opacity: 1;
            top: -170px;
            left: 370px;
        }
        70% {
            opacity: 1;
            top: -170px;
            left: 370px;
        }
        75% {    opacity: 0;}
        85% {    opacity: 0;}
        90% {
            opacity: 1;
            top: -170px;
            left: 20px;
        }
        95% {
            opacity: 1;
            top: -170px;
            left: 20px;
        }
        100% {    opacity: 0;}
        }
    }
    @media (max-width: 481px) {
        display: none;
    }
`;

export const LottieTwo = styled.div`
    width: 100%;
    height: 100%;
`;
