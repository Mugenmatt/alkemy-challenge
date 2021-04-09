import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components/macro';
import Modal from 'react-modal';
import  userDefaultIcon  from '../assets/img/userDefault.svg';

const HomeContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: #fff;
    border-radius: 20px;
    margin-bottom: 3%;
`;

const TitleHome = styled.h1`
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3%;
`;

const TeamBox = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px;
`;

const Hero = styled.div`
    width: 20%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    border: 0.8em solid #000;
    border-radius: 10px;
`;

const HeroImg = styled.img`
    width: 100%;
    max-height: 200px;
    margin: auto;
`;

const HeroName = styled.h3`
    text-align: center;
    font-size: 2em;
`;

const HeroPowerStats = styled.p`
    font-weight: 300;
    margin: 0.7em 0;
    margin-left: 15%;
`;

const DataHeroPowerstats = styled.span`
    color: red;
    font-weight: 700;
`;

const DeleteBox = styled.form`
    margin: 3% auto 5% auto;
`;

const DeleteBtn = styled.input`
    padding: 20px;
    font-size: 1em;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
    :hover {
        background-color: #000;
        color: #fff;
    }
`;

const AddHeroBtn = styled.p`
    width: 10%;
    font-size: 150px;
    padding: 10px;
    margin: 0 auto 5% auto;
    text-align: center;
    color: #000;
    border: 2px solid #000;
    border-radius: 10px;
    :hover {
        background-color: #000;
        color: #fff;
    }
`;

const TeamPowerstatsBox = styled.div`
    width:60%;
    margin:auto;
`;

const TeamPowerstats = styled.p`
    font-size: 2em;
`;

const DataTeamPowerstats = styled.span`
    font-size: 1.5em;
    color: red;
`;

const ModalBox = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const HeroImgModal = styled.img`
    width: 100%;
`;

const HeroNameModal = styled.p`
    font-size: 2em;
    display: inline-block;
    margin: 0.2em 0 0.2em 0;

`;

const HeroDescriptionModal = styled.p`
    font-size: 2em;
    display: inline-block;
    margin: 0.5em 0 0.5em 0;
`;

const HeroDataModal = styled.span`
    font-size: 2em;
    color: red;
    display: inline-block;
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
    border: #000;
    border-radius: 10px;
    :hover {
        background-color: #000;
        color:#fff;
    }
`;

export const Home = ({newHero}) => {

    const isLogged = window.localStorage.getItem('isAuthorized');

    const [modalIsOpen, setModalIsOpen] = useState(false)

    if(isLogged === 'false' || !isLogged){
        return <Redirect to='/login' />
    }
    return (
        <>
                <HomeContent>

                <TitleHome>Your Team!</TitleHome>

                    <TeamBox>

                            <Hero>
                                <HeroImg src={userDefaultIcon} alt="Image of the Hero" onClick={() => setModalIsOpen(true)} />
                                <HeroName onClick={() => setModalIsOpen(true)}> NAME </HeroName>
                                <HeroPowerStats> Intelligence:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                                <HeroPowerStats> Strength:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                                <HeroPowerStats> Speed:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                                <HeroPowerStats> Durability:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                                <HeroPowerStats> Power:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                                <HeroPowerStats> Combat:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                                <DeleteBox method="POST" action="">
                                    <DeleteBtn type="submit" value="Delete" />
                                </DeleteBox>
                                <Modal
                                        isOpen={modalIsOpen} 
                                        onRequestClose={() => setModalIsOpen(false)}
                                        >
                                            <ModalBox>
                                                <HeroImgModal src={userDefaultIcon} alt='Hero Image' />
                                                <HeroNameModal>Hero Name: <HeroDataModal> {}</HeroDataModal></HeroNameModal>
                                                <HeroDescriptionModal>Nick Name: <HeroDataModal>{} </HeroDataModal></HeroDescriptionModal>
                                                <HeroDescriptionModal>Height: <HeroDataModal> {}  </HeroDataModal></HeroDescriptionModal>
                                                <HeroDescriptionModal>Weight: <HeroDataModal> {} </HeroDataModal></HeroDescriptionModal>
                                                <HeroDescriptionModal>Eyes Color: <HeroDataModal> {} </HeroDataModal></HeroDescriptionModal>
                                                <HeroDescriptionModal>Hair Color: <HeroDataModal> {} </HeroDataModal></HeroDescriptionModal>
                                                <HeroDescriptionModal>Job: <HeroDataModal> {} </HeroDataModal></HeroDescriptionModal>
                                                <HeroDescriptionModal>Alignment: <HeroDataModal> {} </HeroDataModal></HeroDescriptionModal>
                                                <CloseModal onClick={() => setModalIsOpen(false)}>Close</CloseModal>
                                            </ModalBox>
                                        </Modal>
                            </Hero>
                    </TeamBox>

                    <Link to='/search-heroes' style={{ textDecoration: 'none'}}><AddHeroBtn> + </AddHeroBtn></Link>

                    <TitleHome>Team Powerstats</TitleHome>

                    <TeamPowerstatsBox>
                        <TeamPowerstats> Intelligence: <DataTeamPowerstats>  </DataTeamPowerstats> </TeamPowerstats>
                        <TeamPowerstats> Strength: <DataTeamPowerstats>  </DataTeamPowerstats> </TeamPowerstats>
                        <TeamPowerstats> Speed: <DataTeamPowerstats>  </DataTeamPowerstats> </TeamPowerstats>
                        <TeamPowerstats> Durability: <DataTeamPowerstats>  </DataTeamPowerstats> </TeamPowerstats>
                        <TeamPowerstats> Power: <DataTeamPowerstats>  </DataTeamPowerstats> </TeamPowerstats>
                        <TeamPowerstats> Combat: <DataTeamPowerstats>  </DataTeamPowerstats> </TeamPowerstats>
                    </TeamPowerstatsBox>
                </HomeContent>
        </>
    )
}