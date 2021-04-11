import {useState, useEffect, useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {HeroCardContainer} from '../components/HeroCardContainer'
import styled from 'styled-components/macro';
import propTypes from 'prop-types';
import lottie from 'lottie-web';
import  searchIcon  from '../assets/img/search-icon.svg';

const SearchContent = styled.div`
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

const Background = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  position: absolute;
  background-color: #ffcc01;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%);
  z-index: -1;
  top: -265px;
  transition: all 0.30s ease-in-out;
`;

const TitleSearch = styled.h1`
    font-family: 'comictypemedium';
    font-size: 4em;
    font-weight: 700;
    text-align: center;
    color: #fff;
    @media (max-width: 481px) {
        font-size: 2em;
    }
`;

const TitleRules = styled.p`
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
    }
`;

const AlignmentHeroesData = styled.span`
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

const Search = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 4%;
`;

const SearchInput = styled.input`
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

const AllHeroes = styled.div`
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

const BackHomeBtn = styled.p`
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

const LoadingBox = styled.div`
    width: 500px;
    height: 500px;    
    top: 150px;
    right: 100px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoadingMsg = styled.p`
    color: #fff;
    font-size: 5em;
    display: inline-block;
    font-family: 'comictypemedium';
`;

const Lottie = styled.div`
    width: 100%;
    height: 100%;
`;

export const SearchHeroes = ({ handleSelectedHeroe, setHeroesList, heroesList }) => {
    const isLogged = window.localStorage.getItem('isAuthorized');
    const [writtenHero, setWrittenHero] = useState(null);
    const [errorFetch, setErrorFetch] = useState('')
    const [errorNoData, setErrorNoData] = useState(false);
    const [neutralChoice, setNeutralChoice] = useState(false);
    const [fetchDone, setFetchDone] = useState(null)
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/loaders/flashLoader.json'),
            name: "Flash",
            settings: {
                style: {
                    width: '50px',
                    height: '50px'
                }
            }
        })
    }, [fetchDone])

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
        setTimeout(() => { setFetchDone(false) }, 2000);
    }

    const searchHero = async () => {
        
        try {
            setFetchDone(true)
            const token = 1132055343928952;
            const urlToken = `https://superheroapi.com/api/${token}`;
            const proxy = 'https://rocky-basin-57618.herokuapp.com';
            let fetchHeroes = await fetch(`${proxy}/${urlToken}/search/${writtenHero}`)
            let selectedHero = await fetchHeroes.json();
            if(selectedHero.response === 'success') {
                selectedHero = selectedHero.results;
                selectedHero.map(hero => {
                    return hero.isChosen = 'false'
                })
                setFetchDone(false)
                return setHeroesList(selectedHero);
            } else {
                console.log('ERROR: ' + selectedHero.error);
                handleErrorNoData()
            }
        } catch(error) {
            console.log('ERROR: ', error);
            setErrorFetch(JSON.stringify(error))
        }
    }

    let goodHeroes = heroes.filter(hero => {
        return hero.biography.alignment === 'good'
    })

    let badHeroes = heroes.filter(hero => {
        return hero.biography.alignment === 'bad'
    })

    const colorNumberGood = () => {
        if(goodHeroes.length === 0) {
            return '#fff'
        } else if(goodHeroes.length === 1) {
            return '#ffcc01'
        } else if(goodHeroes.length === 2) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    const colorNumberbad = () => {
        if(badHeroes.length === 0) {
            return '#fff'
        } else if(badHeroes.length === 1) {
            return '#ffcc01'
        } else if(badHeroes.length === 2) {
            return 'orange'
        } else {
            return 'red'
        }
    }
    
    return (
        <>
            <Background height={fetchDone ? '200vh' : '70vh'}></Background>
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

                    <AlignmentHeroes>SuperHeroes: <AlignmentHeroesData colorNumber={() => colorNumberGood()}>{goodHeroes.length}/3</AlignmentHeroesData></AlignmentHeroes>
                    <AlignmentHeroes>SuperVillains: <AlignmentHeroesData colorNumber={() => colorNumberbad()}>{badHeroes.length}/3</AlignmentHeroesData></AlignmentHeroes>

                    <AllHeroes>
                        { 
                                fetchDone && 
                                <LoadingBox> 
                                    {errorNoData ? <LoadingMsg>Error!</LoadingMsg> : <LoadingMsg>Loading!</LoadingMsg>}
                                    <Lottie ref={container} /> 
                                </LoadingBox> 
                        }
                        <HeroCardContainer 
                            heroesList={heroesList} 
                            handleSelectedHeroe={handleSelectedHeroe} 
                            goodHeroes={goodHeroes} 
                            badHeroes={badHeroes} 
                            handleNeutralHeroSelection={handleNeutralHeroSelection}
                        />
                    </AllHeroes>

                    <Link to='/' style={{ textDecoration: 'none'}}><BackHomeBtn> Go back with your team! </BackHomeBtn></Link>

                </SearchContent>
        </>
    )
}

SearchHeroes.propTypes = {
    
}