import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components/macro';
import {HeroCardContainer} from '../components/HeroCardContainer'
import  searchIcon  from '../assets/img/search-icon.svg';
import bg from '../assets/img/bg1.jpg';

const SearchContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: rgba(0, 0, 0, 0.5);
    margin-bottom: 3%;
    border-radius: 20px;
    z-index: 100;
`;

const Background = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  position: absolute;
  background-color: #ffcc01;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
  z-index: -1;
  top: -265px;
`;

const TitleSearch = styled.h1`
    font-family: 'comictypemedium';
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    color: #fff;
    margin-bottom: 3%;
`;

const TitleRules = styled.p`
    font-size: 2em;
    color: rgba(255, 255, 255, .8);
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
`;

const RulesClarification = styled.p`
    display: ${({display}) => display};
    font-size: 2em;
    color: red;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3%;
`;

const AlignmentHeroes = styled.p`
    color: #fff;
    font-weight: 700;
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
    vertical-align: middle;
`;

const Search = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 4%;
`;

const SearchInput = styled.input`
    width: 20%;
    font-family: 'comictypemedium';
    padding: 3px 0px 3px 3px;
    transition: all 0.30s ease-in-out;
    outline: none;
    border: 1px solid #DDDDDD;
    :focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        padding: 3px 0px 3px 3px;
        border: 1px solid rgba(81, 203, 238, 1);
    }
`;

const SearchBtn = styled.input`
    vertical-align: top;
    width: 3%;
    background-image: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(81, 203, 238, .7);
    border: 1px solid rgba(81, 203, 238, 0);
    outline: none;
    padding: 0.2%;
    transition: all 0.30s ease-in-out;
    cursor: pointer;
    :hover {
        background-color: rgba(81, 203, 238, 1);
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        padding: 3px 0px 3px 3px;
        border: 1px solid rgba(81, 203, 238, 1);
    }
`;

const AllHeroes = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 3%;
`;

const BackHomeBtn = styled.p`
    width: 30%;
    margin: 0 auto 3% auto;
    color: #fff;
    padding: 10px;
    font-size: 2em;
    font-weight: 300;
    text-align: center;
    border: 0.1em solid #000;    
    border-radius: 10px;
    box-shadow: inset 0px 0px 10px #000;
    :hover {
        background-color: #000;
        color: #fff;
        
    }
`;

export const SearchHeroes = ({ urlToken, proxy, handleSelectedHeroe, setHeroesList, heroesList }) => {
    const isLogged = window.localStorage.getItem('isAuthorized');
    const [writtenHero, setWrittenHero] = useState(null);
    const [errorFetch, setErrorFetch] = useState('')
    const [errorNoData, setErrorNoData] = useState(false);
    const [neutralChoice, setNeutralChoice] = useState(false);
    const [fetchDone, setFetchDone] = useState(false)

    if(isLogged === 'false' || !isLogged){
        return <Redirect to='/login' />
    }

    let heroes = JSON.parse(window.localStorage.getItem('myTeam'));

    const handleWrittenHero = hero => {
        setWrittenHero(hero.target.value)
    }
    
    const handleNeutralHeroSelection = () => {
        setNeutralChoice(true)
        setTimeout(() => { setNeutralChoice(false) }, 4000);
    }

    const handleErrorNoData = () => {
        setErrorNoData(true)
        setTimeout(() => { setErrorNoData(false) }, 4000);
    }

    const searchHero = async e => {
        
        try {
            let fetchHeroes = await fetch(`${proxy}/${urlToken}/search/${writtenHero}`)
            let selectedHero = await fetchHeroes.json();
            if(selectedHero.response === 'success') {
                selectedHero = selectedHero.results;
                selectedHero.map(hero => {
                    return hero.isChosen = 'false'
                })
                setFetchDone(true)
                return setHeroesList(selectedHero);
            } else {
                console.log('ERROR: ' + selectedHero.error);
                handleErrorNoData()
            }
        } catch(error) {
            console.log('ERROR: ', error);
            setErrorFetch(error)
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
            <Background height={fetchDone ? '150vh' : '70vh'}></Background>
                <SearchContent>

                    <TitleSearch>Choose your heroes!</TitleSearch>

                    <TitleRules>There should be 3 superheroes and 3 supervillains!</TitleRules>

                    { <RulesClarification display={neutralChoice === false ? 'none' : 'block'} >Neutral heroes does not count</RulesClarification> }
                    { <RulesClarification display={errorNoData === false ? 'none' : 'block'}> Character with given name not found </RulesClarification> }

                    <Search >
                        <SearchInput type='text' placeholder='Hero name...' onChange={handleWrittenHero} />
                        <SearchBtn type='button' value='' onClick={searchHero} />
                    </Search>

                    { errorFetch && <span> { errorFetch } </span> }

                    <AlignmentHeroes>SuperHeroes: <AlignmentHeroesData>{goodHeroes.length}/3</AlignmentHeroesData></AlignmentHeroes>
                    <AlignmentHeroes>SuperVillains: <AlignmentHeroesData>{badHeroes.length}/3</AlignmentHeroesData></AlignmentHeroes>

                    <AllHeroes>
                        <>
                        <HeroCardContainer 
                            heroesList={heroesList} 
                            handleSelectedHeroe={handleSelectedHeroe} 
                            goodHeroes={goodHeroes} 
                            badHeroes={badHeroes} 
                            handleNeutralHeroSelection={handleNeutralHeroSelection}
                        />
                        </>
                    </AllHeroes>

                    <Link to='/' style={{ textDecoration: 'none'}}><BackHomeBtn> Go back with your team! </BackHomeBtn></Link>

                </SearchContent>
        </>
    )
}