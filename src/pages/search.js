import {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components/macro';
import Modal from 'react-modal';
import  userDefaultIcon  from '../assets/img/userDefault.svg';
import  searchIcon  from '../assets/img/search-icon.svg';

const SearchContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: #fff;
    margin-bottom: 3%;
    border-radius: 20px;
`;

const Search = styled.form`
    text-align: center;
    width: 100%;
    margin-bottom: 3%;
`;

const SearchInput = styled.input`
    width: 20%;
`;

const SearchImg = styled.img`
    background-color: #000;
    width: 23px;
    vertical-align: top;
    border: 1px solid #000;
`;

const AllHeroes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 3%;
`;

const HeroCard = styled.div`
    width: 15%;
    border: 0.4em solid #000;
    border-radius: 10px;
    margin-bottom: 3%;
    margin-right: 3%;
    cursor: pointer;
`;

const HeroImg = styled.img`
    width: 100%;
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
    padding: 0 25px;
    font-size: 3.4em;
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

const BackHomeBtn = styled.p`
    width: 30%;
    margin: auto;
    color: #000;
    padding: 10px;
    font-size: 2em;
    font-weight: 300;
    text-align: center;
    border: 0.1em solid #000;    
    border-radius: 10px;
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

const HeroDataModal = styled.p`
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

export const SearchHeroes = ({token}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const url = `https://superheroapi.com/api/${token}`

    const isLogged = window.localStorage.getItem('isAuthorized');

    // function Heroes() {
    //     fetch(`url/ACA EL QUE TRAE TODOS LOS HEROES`)
    //     .then(data => data.json())
    //     .then(data => {
    //         return console.log(data);
    //     })
    // }

    // useEffect(() => {

    //     Heroes();
        
    // }, [])

    if(isLogged === 'false'){
        return <Redirect to='/login' />
    }

    return (
        <>
                <SearchContent>

                    <Search method='GET' action=''>
                        <SearchInput type='text' placeholder='Hero name...' />
                        <SearchImg src={searchIcon} alt='Magnifying Glass Icon' />
                    </Search>

                    <AllHeroes>
                        <HeroCard onClick={() => setModalIsOpen(true)}>
                            <HeroImg src={userDefaultIcon} alt='Hero Icon' />
                            
                            <HeroName>Hero Name</HeroName>
                            <AddHeroForm method='POST' action=''>
                                <AddHeroBtn type='submit' value='+' />
                            </AddHeroForm>
                        </HeroCard>
                        <Modal
                            isOpen={modalIsOpen} 
                            shouldCloseOnEsc={() => setModalIsOpen(false)} 
                            shouldCloseOnOverlayClick={() => setModalIsOpen(false)} 
                            onRequestClose={() => setModalIsOpen(false)}>
                                <ModalBox>
                                    <HeroImgModal src={userDefaultIcon} alt='Hero Image' />
                                    <HeroNameModal>Hero Name: <HeroDataModal> </HeroDataModal></HeroNameModal>
                                    <HeroDescriptionModal>Nick Name: <HeroDataModal> </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Height: <HeroDataModal> </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Weight: <HeroDataModal> </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Eyes Color: <HeroDataModal> </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Hair Color: <HeroDataModal> </HeroDataModal></HeroDescriptionModal>
                                    <HeroDescriptionModal>Job: <HeroDataModal> </HeroDataModal></HeroDescriptionModal>
                                    <CloseModal onClick={() => setModalIsOpen(false)}>Close</CloseModal>
                                </ModalBox>
                            </Modal>
                    </AllHeroes>

                    <Link to='/' style={{ textDecoration: 'none'}}><BackHomeBtn> Go back with your team </BackHomeBtn></Link>

                </SearchContent>
        </>
    )
}