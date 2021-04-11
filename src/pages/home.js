import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components/macro';
import propTypes from 'prop-types';
import Modal from 'react-modal';

const Background = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  background-color: #ffcc01;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
  z-index: -1;
  top: -265px;
`;

const HomeContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    margin-bottom: 3%;
    z-index: 100;
    @media (max-width: 1025px) {
        width: 60%;
    }
`;

const TitleHome = styled.h1`
    font-family: 'comictypemedium';
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3%;
    color: #fff;
    @media (max-width: 1025px) {
        font-size: 2.8em;
    }
`;

const HierarchyPoints = styled.p`
    font-family: 'comictypemedium';
    color: #fff;
    font-size: 2em;
    text-align: center;
`;


const TeamBox = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1025px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`;

const TeamContainer = styled.div`
    margin-right: 2%;
    width: 400px;
    @media (max-width: 1025px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Hero = styled.div`
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
`;

const HeroData = styled.div`
    margin: 5% 5% 0 5%;
`;

const HeroImg = styled.img`
    width: 100%;
    max-height: 300px;
    border-radius: 10px;
    cursor: pointer;
`;

const HeroName = styled.h3`
    text-align: center;
    font-size: 2em;
    color: #fff;
    @media (max-width: 1025px) {
        font-size: 1.5em;
        margin-top: 3%;
    }
`;

const HeroPowerStats = styled.p`
    font-weight: 300;
    margin: 0.7em 0;
    font-size: 1.5em;
    color: #fff;
    margin-left: 25%;
    
`;

const DataHeroPowerstats = styled.span`
    color: ${(props) => props.heroPowerstatsColor};
    font-weight: 700;
`;

const DeleteBox = styled.div`
    margin: 3% 0 5% 0;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const DeleteBtn = styled.input`
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

const AddHeroBtnBox = styled.p`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const AddHeroBtn = styled.span`
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
`;

const TeamPowerstatsBox = styled.div`
    width: 25%;
    margin:auto;
    @media (max-width: 1025px) {
        font-size: 1em;
        width: 60%;
    }
`;

const TeamPowerstats = styled.p`
    color: #fff;
    font-size: 2em;
    @media (max-width: 1025px) {
        font-size: 1.5em;
    }
`;

const DataTeamPowerstats = styled.span`
    font-size: 1.5em;
    color: ${(props) => props.teamPowerstatsColor};
    @media (max-width: 1025px) {
        font-size: 1em;
    }
`;

const ModalBox = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const HeroImgModal = styled.img`
    width: 100%;
    max-height: 800px;
`;

const HeroNameModal = styled.p`
    font-size: 2em;
    display: block;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
    color: #fff;
`;

const HeroDescriptionModal = styled.p`
    font-size: 2em;
    display: inline-block;
    margin: 0.5em 0 0.5em 0;
    color: #fff;
    text-align: center;
`;

const HeroDataModal = styled.span`
    font-size: 2em;
    color: red;
    text-align: center;
    display: block;
    margin: 0.5em 0 0.5em 0;
`;

const CloseModal = styled.button`
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
`;

const SpanColorPowerstats = styled.span`
    @media (max-width: 1025px) {
        font-size: 0.57em;
    }
`;

export const Home = ({ handleDeleteHero }) => {

    const isLogged = window.localStorage.getItem('isAuthorized');
    const username = JSON.parse(window.localStorage.getItem('username'));

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [chosenHeroModal, setChosenHeroModal] = useState(null);

    if(isLogged === 'false' || !isLogged){
        return <Redirect to='/login' />
    }

    const team = JSON.parse(window.localStorage.getItem('myTeam'));
    const teamPowerstats = [...team];

    let TeamIntelligence = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.intelligence === 'null') {
            powerstats = curHero.powerstats.intelligence = 0
        }
        powerstats = Number(curHero.powerstats.intelligence)
        return prev + powerstats;
      }, 0);

      let TeamStrength = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.strength === 'null') {
            powerstats = curHero.powerstats.strength = 0
        }
        powerstats = Number(curHero.powerstats.strength)
        return prev + powerstats;
      }, 0);

      let TeamSpeed = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.speed === 'null') {
            powerstats = curHero.powerstats.speed = 0
        }
        powerstats = Number(curHero.powerstats.speed)
        return prev + powerstats;
      }, 0);

      let TeamDurability = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.durability === 'null') {
            powerstats = curHero.powerstats.durability = 0
        }
        powerstats = Number(curHero.powerstats.durability)
        return prev + powerstats;
      }, 0);

      let TeamPower = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.power === 'null') {
            powerstats = curHero.powerstats.power = 0
        }
        powerstats = Number(curHero.powerstats.power)
        return prev + powerstats;
      }, 0);

      let TeamCombat = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.combat === 'null') {
            powerstats = curHero.powerstats.combat = 0
        }
        powerstats = Number(curHero.powerstats.combat)
        return prev + powerstats;
      }, 0);

    const heroPowerstatsColor = (powerstat) => {
        if(powerstat <= 49) {
            return '#fff';
          } else if(powerstat >= 50 && powerstat <= 79) {
            return 'orange';
          } else {
            return 'red';
        }
    }

    const teamPowerstatsColor = (powerstat) => {
        if(powerstat <= 100){
            return '#fff';
        } else if(powerstat >= 101 && powerstat <= 200) {
            return '#fcc203';
        } else if(powerstat >= 201 && powerstat <= 300) {
          return '#fc8c03';
        } else {
          return '#fc0303';
        }
    }

    return (
        <>
            <Background></Background>
            <HomeContent>

            <TitleHome>
                {team.length === 0 ?
                `Welcome ${!username ?
                'unknown creature' :
                username}, make your Team!`:
                `${!username ?
                'Unknown creature' :
                username} this is your Team!`}
            </TitleHome>

                <TeamBox>
                    {
                        team.map(hero => {
                            return(<TeamContainer key={hero.id}>
                                {
                                    hero.isChosen === 'true' &&
                                    <>
                                    <Hero background={hero.biography.alignment === 'good' || hero.biography.alignment === 'neutral' ? '#03198a' : '#8a0303'} >
                                        <HeroData>
                                            <HeroImg src={hero.image.url} alt="Image of the Hero" onClick={() => {
                                                setModalIsOpen(true)
                                                setChosenHeroModal(hero)
                                                }
                                            } />
                                            <HeroName onClick={() => {
                                                setModalIsOpen(true)
                                                setChosenHeroModal(hero)
                                                }
                                            }> {hero.name} </HeroName>
                                            <HeroPowerStats> Intelligence:<DataHeroPowerstats heroPowerstatsColor={() => heroPowerstatsColor(hero.powerstats.intelligence)} > {hero.powerstats.intelligence === 'null' ? 0 : hero.powerstats.intelligence} </DataHeroPowerstats> </HeroPowerStats>
                                            <HeroPowerStats> Strength:<DataHeroPowerstats heroPowerstatsColor={() => heroPowerstatsColor(hero.powerstats.strength)} > {hero.powerstats.strength === 'null' ? 0 : hero.powerstats.strength} </DataHeroPowerstats> </HeroPowerStats>
                                            <HeroPowerStats> Speed:<DataHeroPowerstats heroPowerstatsColor={() => heroPowerstatsColor(hero.powerstats.speed)} > {hero.powerstats.speed === 'null' ? 0 : hero.powerstats.speed} </DataHeroPowerstats> </HeroPowerStats>
                                            <HeroPowerStats> Durability:<DataHeroPowerstats heroPowerstatsColor={() => heroPowerstatsColor(hero.powerstats.durability)} > {hero.powerstats.durability === 'null' ? 0 : hero.powerstats.durability} </DataHeroPowerstats> </HeroPowerStats>
                                            <HeroPowerStats> Power:<DataHeroPowerstats heroPowerstatsColor={() => heroPowerstatsColor(hero.powerstats.power)} > {hero.powerstats.power === 'null' ? 0 : hero.powerstats.power} </DataHeroPowerstats> </HeroPowerStats>
                                            <HeroPowerStats> Combat:<DataHeroPowerstats heroPowerstatsColor={() => heroPowerstatsColor(hero.powerstats.combat)} > {hero.powerstats.combat === 'null' ? 0 : hero.powerstats.combat} </DataHeroPowerstats> </HeroPowerStats>
                                            <DeleteBox>
                                                <DeleteBtn type="button" value="Delete" onClick={() => handleDeleteHero(hero)} />
                                            </DeleteBox>
                                        </HeroData>
                                    </Hero>
                                </>}
                            </TeamContainer>)
                        })
                    }
                        {
                            modalIsOpen &&
                            <Modal
                            isOpen={modalIsOpen} 
                            onRequestClose={() => setModalIsOpen(false)}
                            style={
                                {
                                    overlay:{
                                        width:'80%',
                                        margin: 'auto',
                                        backgroundColor: '#000',
                                    },
                                    content:{
                                        backgroundColor: '#000',
                                    }
                                }
                            }
                            >
                                <ModalBox>
                                    <HeroImgModal src={chosenHeroModal.image.url} alt='Hero Image' />
                                    <HeroNameModal>Hero Name: <HeroDataModal> {chosenHeroModal.name}</HeroDataModal></HeroNameModal>
                                    <HeroDescriptionModal>Nick Name: <HeroDataModal>{chosenHeroModal.biography.aliases} </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Height: <HeroDataModal> {chosenHeroModal.appearance.height[1]}  </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Weight: <HeroDataModal> {chosenHeroModal.appearance.weight[1]} </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Eyes Color: <HeroDataModal> {chosenHeroModal.appearance['eye-color']} </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Hair Color: <HeroDataModal> {chosenHeroModal.appearance['hair-color']} </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Job: <HeroDataModal> {chosenHeroModal.work.occupation === '-' ? 'No job' : chosenHeroModal.work.occupation} </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Alignment: <HeroDataModal> {chosenHeroModal.biography.alignment} </HeroDataModal></HeroDescriptionModal>
                                    <CloseModal onClick={() => setModalIsOpen(false)}>Close</CloseModal>
                                </ModalBox>
                            </Modal>
                        }
                </TeamBox>

                {   JSON.parse(window.localStorage.getItem('myTeam')).length < 6 &&
                    <>
                        <AddHeroBtnBox>
                            <Link to='/search-heroes' style={{ textDecoration: 'none'}}><AddHeroBtn> + </AddHeroBtn></Link>
                        </AddHeroBtnBox>
                    </>
                }
                
                {   JSON.parse(window.localStorage.getItem('myTeam')).length > 0 &&
                    <>
                    <TitleHome>Team Powerstats</TitleHome>
                    <HierarchyPoints> 
                        <SpanColorPowerstats> Low: -100 ➡ </SpanColorPowerstats> 
                        <SpanColorPowerstats style={{color:'#fcc203'}}> Medium: -200 ➡ </SpanColorPowerstats>
                        <SpanColorPowerstats style={{color:'#fc8c03'}}> High: -300 ➡ </SpanColorPowerstats>
                        <SpanColorPowerstats style={{color:'#fc0303'}}> God: +400 </SpanColorPowerstats>
                    </HierarchyPoints>

                        <TeamPowerstatsBox>
                            <TeamPowerstats> Intelligence: <DataTeamPowerstats teamPowerstatsColor={() => teamPowerstatsColor(TeamIntelligence)} > {TeamIntelligence} pts </DataTeamPowerstats> </TeamPowerstats>
                            <TeamPowerstats> Strength: <DataTeamPowerstats teamPowerstatsColor={() => teamPowerstatsColor(TeamStrength)} > {TeamStrength} pts </DataTeamPowerstats> </TeamPowerstats>
                            <TeamPowerstats> Speed: <DataTeamPowerstats teamPowerstatsColor={() => teamPowerstatsColor(TeamSpeed)} > {TeamSpeed} pts </DataTeamPowerstats> </TeamPowerstats>
                            <TeamPowerstats> Durability: <DataTeamPowerstats teamPowerstatsColor={() => teamPowerstatsColor(TeamDurability)} > {TeamDurability} pts </DataTeamPowerstats> </TeamPowerstats>
                            <TeamPowerstats> Power: <DataTeamPowerstats teamPowerstatsColor={() => teamPowerstatsColor(TeamPower)} > {TeamPower} pts </DataTeamPowerstats> </TeamPowerstats>
                            <TeamPowerstats> Combat: <DataTeamPowerstats teamPowerstatsColor={() => teamPowerstatsColor(TeamCombat)} > {TeamCombat} pts </DataTeamPowerstats> </TeamPowerstats>
                        </TeamPowerstatsBox>

                    </>
                }

            </HomeContent>
        </>
    )
}

Home.propTypes = {
  
}