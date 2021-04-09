import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components/macro';
import {HeroCardContainer} from '../components/HeroCardContainer'
import  searchIcon  from '../assets/img/search-icon.svg';

const SearchContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: #fff;
    margin-bottom: 3%;
    border-radius: 20px;
`;

const TitleSearch = styled.h1`
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3%;
`;

const AlignmentHeroes = styled.p`
    color: #000;
    display:inline-block;
    width: 40%;
    font-size: 2em;
    margin: 2% 0 5% 5%;
    text-align: center;
    
`;

const AlignmentHeroesData = styled.span`
    color: red;
    display: inline-block;
    font-size: 2em;
`;

const Search = styled.form`
    text-align: center;
    width: 100%;
    margin-top: 4%;
`;

const SearchInput = styled.input`
    width: 20%;
`;

const SearchBtn = styled.input`
    vertical-align: top;
    width: 3%;
    background-image: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000;
    border: none;
    padding: 0.2%;
    cursor: pointer;
`;

const AllHeroes = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 3%;
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

export const SearchHeroes = ({ urlToken, handleSelectedHeroe }) => {

    const isLogged = window.localStorage.getItem('isAuthorized');
    const [heroesList, setHeroesList] = useState([]);
    const [writtenHero, setWrittenHero] = useState(null);

    if(isLogged === 'false' || !isLogged){
        return <Redirect to='/login' />
    }

    let heroes = JSON.parse(window.localStorage.getItem('myTeam'));

    const handleWrittenHero = hero => {
        setWrittenHero(hero.target.value)
    }

    const searchHero = async e => {
        try {
            const fetchHeroes = await fetch(`${urlToken}/search/${writtenHero}`)
            let selectedHero = await fetchHeroes.json();
            selectedHero = selectedHero.results;
            selectedHero.map(hero => {
                return hero.isChosen = 'false'
            })
            console.log(selectedHero);
            setHeroesList(selectedHero);
        } catch(error) {
            console.log('Error ' + error);
        }
     }

    let goodHeroes = heroes.filter(hero => {
        return hero.biography.alignment === 'good'
    })

    let badHeroes = heroes.filter(hero => {
        return hero.biography.alignment === 'bad'
    })

    return (
        <>
                <SearchContent>

                    <TitleSearch>Choose your heroes!</TitleSearch>

                    <Search >
                        <SearchInput type='text' placeholder='Hero name...' onChange={handleWrittenHero} />
                        <SearchBtn type='button' value='' onClick={searchHero} />
                    </Search>

                    <AlignmentHeroes>The good one's: <AlignmentHeroesData>{goodHeroes.length}</AlignmentHeroesData></AlignmentHeroes>
                    <AlignmentHeroes>The bad one's: <AlignmentHeroesData>{badHeroes.length}</AlignmentHeroesData></AlignmentHeroes>

                    <AllHeroes>
                        <>
                        <HeroCardContainer 
                            heroesList={heroesList} 
                            handleSelectedHeroe={handleSelectedHeroe} 
                            goodHeroes={goodHeroes} 
                            badHeroes={badHeroes} 
                        />
                        </>
                    </AllHeroes>

                    <Link to='/' style={{ textDecoration: 'none'}}><BackHomeBtn> Go back with your team! </BackHomeBtn></Link>

                </SearchContent>
        </>
    )
}