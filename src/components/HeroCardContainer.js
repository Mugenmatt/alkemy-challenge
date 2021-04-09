import React, {useState} from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
// import  userDefaultIcon  from '../assets/img/userDefault.svg';
import styled from 'styled-components';


const HeroCard = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    border: 0.4em solid #000;
    border-radius: 10px;
    overflow: hidden;
`;

const HeroImg = styled.img`
    width: 100%;
    max-height: 200px;
`;

const HeroName = styled.h3`
    font-size: 1.5em;
    text-align: center;
    margin: 0.3em 0 0.5em 0;
`;

const AddHeroForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const AddHeroBtn = styled.input`
    padding: 10px;
    font-size: 1em;
    margin-bottom: 3%;
    background-color: #fff;
    color: #000;
    border: 0.06em solid #000;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        background-color: #000;
        color: #fff;
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

export const HeroCardContainer = ({ heroesList, handleSelectedHeroe, goodHeroes, badHeroes }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chosenHeroModal, setChosenHeroModal] = useState([]);
    const heroesListCopy = [...heroesList];
    return (<>
        {   
            heroesList.map(hero => {

                let heroSelection = JSON.parse(window.localStorage.getItem('myTeam', hero))

                let myTeamID = heroSelection.map(hero => {
                    return hero.id;
                })

                return <div style={{display:'inline', width: '15%', margin:'0 3% 3% 0'}} key={hero.id}>
                    {
                        !myTeamID.includes(hero.id) &&
                        <HeroCard >

                            <HeroImg src={hero.image.url} alt='Hero Icon' onClick={() => {
                                setModalIsOpen(true) 
                                setChosenHeroModal(hero)
                                }
                            } />

                            <HeroName onClick={() => {
                                setModalIsOpen(true) 
                                setChosenHeroModal(hero)
                                }
                            } >{hero.name}</HeroName>

                                {
                                    hero.biography.alignment === 'neutral' &&
                                    <AddHeroForm >
                                        <AddHeroBtn type='button' value='Neutral' />
                                    </AddHeroForm>
                                }

                            <>
                                {
                                    goodHeroes.length === 3 && 
                                    hero.biography.alignment === 'good' &&
                                    <AddHeroForm >
                                        <AddHeroBtn type='button' value='No more superheroes!' />
                                    </AddHeroForm>
                                }

                                {
                                    badHeroes.length === 3 && 
                                    hero.biography.alignment === 'bad' &&
                                    <AddHeroForm >
                                        <AddHeroBtn type='button' value='No more supervillains!' />
                                    </AddHeroForm>
                                }
                            </>

                                { 
                                    heroSelection !== 'null' &&
                                    heroSelection.length <= 5 && 
                                    hero.biography.alignment !== 'neutral' &&
                                    <AddHeroForm >
                                        <AddHeroBtn type='button' style={{
                                            display: badHeroes.length === 3 || goodHeroes.length === 3 ? 'none' : 'inline'
                                        }} 
                                        value={'Add to My Team!'} 
                                        onClick={() => handleSelectedHeroe(hero)} />
                                    </AddHeroForm>
                                }
                        </HeroCard>
                    }

                    </div>

            })
        }

     

        </>
        
    )
}