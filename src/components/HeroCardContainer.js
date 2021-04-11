import React, {useState} from 'react';
import Modal from 'react-modal';
import userDefaultIcon  from '../assets/img/userDefault.svg';
import styled from 'styled-components/macro';


const HeroCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    background: ${(props) => props.background};
    border: 0.7em solid #000;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    :hover {
        transform: translateY(-2em) scale(1.4) rotateY(360deg) rotateZ(2deg);
        perspective: 800px;
        perspective-origin: 150% 100%;
        box-shadow: 0 0 25px #000;
    }
    @media (max-width: 1025px) {
        padding: 5% 5% 0% 5%;
        width: 130px;
        max-height: 330px;
    }
`;

const HeroData = styled.div`
    margin: 10% 5% 0 5%;
`;

const HeroImg = styled.img`
    width: 100%;
    max-height: 200px;
    margin-bottom: 10%;
    border-radius: 10px;
    cursor: pointer;
`;

const HeroName = styled.h3`
    font-size: 1.5em;
    text-align: center;
    margin: 0 0 0.5em 0;
    color: #fff;
`;

const AddHeroForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const AddHeroBtn = styled.input`
    padding: 10px;
    font-size: 1.5em;
    background-color: #fff;
    color: #000;
    border: 0.06em solid #000;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
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
    background-color:${(props) => props.background};
`;

const HeroImgModalBox = styled.div`
    display: flex;
    justify-content: center;
`;

const HeroImgModal = styled.img`
    width: 50%;
`;

const HeroNameDescriptionModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroNameModal = styled.p`
    width: 50%;
    color: #fff;
    font-size: 2em;
    display: block;
    text-align: center;
    margin: 1em 0 0.2em 0;
`;

const TitleTypeData = styled.p`
    color: #fff;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 3em;
    border-bottom: 2px solid #fff;
`;

const HeroDescriptionModal = styled.p`
    color: #fff;
    font-size: 2em;
    display: block;
    width: 100%;
    text-align: center;
    margin: 1em 0 0.3em 0;
`;

const HeroDataModal = styled.span`
    font-size: 1.5em;
    color: red;
    display: block;
    text-align: center;
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

export const HeroCardContainer = ({ heroesList, handleSelectedHeroe, handleNeutralHeroSelection, goodHeroes, badHeroes }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chosenHeroModal, setChosenHeroModal] = useState({});

    return (<>
        {   
            heroesList.map(hero => {

                let heroSelection = JSON.parse(window.localStorage.getItem('myTeam', hero))

                let myTeamID = heroSelection.map(hero => {
                    return hero.id;
                })

                const heroColor = () => {
                    if(hero.biography.alignment === 'neutral') {
                        return '#a1a1a1'
                    } else if(hero.biography.alignment === 'good') {
                        return '#03198a'
                    } else {
                        return '#8a0303'
                    }
                }

                return <div style={{display:'inline', width: '15%', margin:'0 3% 3% 0'}} key={hero.id}>
                    {
                        !myTeamID.includes(hero.id) &&
                        <HeroCard background={() => heroColor()}>
                            <HeroData>
                                
                            <HeroName onClick={() => {
                                setModalIsOpen(true) 
                                setChosenHeroModal(hero)
                                }
                            } >{hero.name}
                            </HeroName>

                            {
                                !hero.image.url.error ?
                                <HeroImg src={hero.image.url} alt={`Hero Icon`} onClick={() => {
                                    setModalIsOpen(true) 
                                    setChosenHeroModal(hero)
                                    }
                                } />
                                :
                                <HeroImg src={userDefaultIcon} alt={`Hero Icon`} onClick={() => {
                                    setModalIsOpen(true) 
                                    setChosenHeroModal(hero)
                                    }
                                } />
                            }
                            
                            {
                                hero.biography.alignment === 'neutral' &&
                                <AddHeroForm >
                                    <AddHeroBtn type='button' value='Neutral' onClick={handleNeutralHeroSelection} />
                                </AddHeroForm>
                            }

                            {
                                hero.biography.alignment === 'good' &&
                                <AddHeroForm >
                                    {
                                        goodHeroes.length === 3 ?
                                        <AddHeroBtn type='button' value='No more!'/>
                                        : <AddHeroBtn type='button' value='Hero' onClick={() => handleSelectedHeroe(hero)} />
                                    }
                                </AddHeroForm>
                            }

                            {
                                hero.biography.alignment === 'bad' &&
                                <AddHeroForm >
                                    {
                                        badHeroes.length === 3 ?
                                        <AddHeroBtn type='button' value='No more!' />
                                        : <AddHeroBtn type='button' value='Villain' onClick={() => handleSelectedHeroe(hero)} />
                                    }
                                </AddHeroForm>
                            }
                            </HeroData>
                        </HeroCard>
                    }

                    </div>

            })
        }
                {
                modalIsOpen &&
                    <Modal
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
                    isOpen={true} 
                    onRequestClose={() => setModalIsOpen(false)}
                    >
                        <ModalBox>
                            <HeroImgModalBox>
                                {chosenHeroModal.image.url ? 
                                <HeroImgModal 
                                    src={chosenHeroModal.image.url} alt='Hero Image' /> 
                                    : <HeroImgModal 
                                        src={userDefaultIcon} 
                                        alt='Hero Image' />
                                }
                            </HeroImgModalBox>
                            
                            <HeroNameDescriptionModal>
                                <HeroNameModal>Name: <HeroDataModal> {chosenHeroModal.name}</HeroDataModal></HeroNameModal>
                                <HeroDescriptionModal>Nick Name: <HeroDataModal>{chosenHeroModal.biography.aliases[0] === '-' ? 'No aliases' : chosenHeroModal.biography.aliases} </HeroDataModal></HeroDescriptionModal>

                                <TitleTypeData> Appearance </TitleTypeData>
                                <HeroDescriptionModal>Height: <HeroDataModal> {chosenHeroModal.appearance.height[0] === '-' ? "Unknown" : chosenHeroModal.appearance.height[0] } </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Weight: <HeroDataModal> {chosenHeroModal.appearance.weight[1] === '0 kg' ? "Unknown" : chosenHeroModal.appearance.weight[1]} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Eyes Color: <HeroDataModal> {chosenHeroModal.appearance['eye-color'] === '-' ? "Unknown" : chosenHeroModal.appearance['eye-color']} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Hair Color: <HeroDataModal> {chosenHeroModal.appearance['hair-color'] === '-' ? 'Unknown' : chosenHeroModal.appearance['hair-color']} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Race: <HeroDataModal> {chosenHeroModal.appearance.race === 'null' ? 'Unknown' : chosenHeroModal.appearance.race} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Gender: <HeroDataModal> {chosenHeroModal.appearance.gender === '-' ? 'Unknown' : chosenHeroModal.appearance.gender} </HeroDataModal></HeroDescriptionModal>

                                <TitleTypeData> Work </TitleTypeData>
                                <HeroDescriptionModal>Job: <HeroDataModal> {chosenHeroModal.work.occupation === '-' ? 'No job' : chosenHeroModal.work.occupation} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Base of operation: <HeroDataModal> {chosenHeroModal.work.base === '-' ? 'No base' : chosenHeroModal.work.base} </HeroDataModal></HeroDescriptionModal>

                                <TitleTypeData> Connections </TitleTypeData>
                                <HeroDescriptionModal>Group Affiliation : <HeroDataModal> {chosenHeroModal.connections["group-affiliation"] === '-' ? 'No group affiliation' : chosenHeroModal.connections["group-affiliation"]} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Relatives: <HeroDataModal> {chosenHeroModal.connections.relatives === '-' ? 'No relatives' : chosenHeroModal.connections.relatives} </HeroDataModal></HeroDescriptionModal>

                                <TitleTypeData> Biography </TitleTypeData>
                                <HeroDescriptionModal>Alter egos: <HeroDataModal> {chosenHeroModal.biography["alter-egos"] === '-' ? 'No alter egos' : chosenHeroModal.biography["alter-egos"]} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Place of Birth: <HeroDataModal> {chosenHeroModal.biography["place-of-birth"] === '-' ? 'Unknown' : chosenHeroModal.biography["place-of-birth"]} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>First appearance: <HeroDataModal> {chosenHeroModal.biography["first-appearance"] === '-' ? 'Unknown' : chosenHeroModal.biography["first-appearance"]} </HeroDataModal></HeroDescriptionModal>
                                <HeroDescriptionModal>Publisher: <HeroDataModal> {chosenHeroModal.biography.publisher === 'null' ? 'Unknown' : chosenHeroModal.biography.publisher} </HeroDataModal></HeroDescriptionModal>


                                <HeroDescriptionModal>Alignment: <HeroDataModal> {chosenHeroModal.biography.alignment} </HeroDataModal></HeroDescriptionModal>
                            </HeroNameDescriptionModal>


                            <CloseModal onClick={() => setModalIsOpen(false)}>Close</CloseModal>
                        </ModalBox>
                    </Modal>
                    }
        </>
        
    )
}