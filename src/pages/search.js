import {useState, useEffect, useRef} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {HeroCardContainer} from '../components/HeroCardContainer'
import { 
    Background,
    SearchContent,
    TitleSearch,
    TitleRules,
    RulesClarification,
    Search,
    SearchInput,
    SearchBtn,
    AlignmentHeroes,
    AlignmentHeroesData,
    AllHeroes,
    LoadingBox,
    LoadingMsg,
    LottieOne,
    BackHomeBtn
} from '../assets/styledComponents/styledSearch'
import lottie from 'lottie-web';

export const SearchHeroes = ({ handleSelectedHeroe, setHeroesList, heroesList }) => {
    const isLogged = window.localStorage.getItem('isAuthorized');
    const [writtenHero, setWrittenHero] = useState(null);
    const [errorFetch, setErrorFetch] = useState('')
    const [errorNoData, setErrorNoData] = useState(false);
    const [neutralChoice, setNeutralChoice] = useState(false);
    const [fetchDone, setFetchDone] = useState(null)
    const containerOne = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: containerOne.current,
            renderer: 'gif',
            loop: true,
            autoplay: true,
            animationData: require('../assets/loaders/flashLoader.json'),
            name: "Flash",
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
                                    <LottieOne ref={containerOne} /> 
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
