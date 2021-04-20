import {useState, useRef, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Background,
         LottieContainer,
         LottieTwo,
         HomeContent,
         TitleHome,
         TeamBox,
         TeamContainer,
         Hero,
         HeroData,
         HeroImg,
         HeroName,
         HeroPowerStats,
         DataHeroPowerstats,
         DeleteBox,
         DeleteBtn,
         ModalBox,
         HeroImgModal,
         HeroNameModal,
         HeroDataModal,
         HeroDescriptionModal,
         CloseModal,
         SpanColorPowerstats,
         TeamPowerstatsBox,
         TeamPowerstats,
         DataTeamPowerstats,
         AddHeroBtn,
         AddHeroBtnBox,
         HierarchyPoints,
} from '../assets/styledComponents/styledHome'
import lottie from 'lottie-web';
import Modal from 'react-modal';

export const Home = ({ handleDeleteHero }) => {

    const isLogged = window.localStorage.getItem('isAuthorized');
    const username = JSON.parse(window.localStorage.getItem('username'));

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [chosenHeroModal, setChosenHeroModal] = useState(null);
    const containerTwo = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: containerTwo.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/loaders/superHeroLoader.json'),
            name: "HeroFlying",
        })
    }, [])

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
            <LottieContainer>
                <LottieTwo ref={containerTwo} /> 
            </LottieContainer>
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