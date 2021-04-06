import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';
import  userDefaultIcon  from '../assets/img/userDefault.svg';
import  searchIcon  from '../assets/img/search-icon.svg';

const SearchContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: #fff;
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

const HeroBox = styled.div`
    width: 15%;
    border: 0.4em solid #000;
    border-radius: 10px;
    margin-bottom: 3%;
    margin-right: 3%;
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

export const SearchHeroes = () => {
    return (
        <>
            <SearchContent>
                <Search method='GET' action=''>
                    <SearchInput type='text' placeholder='Hero name...' />
                    <SearchImg src={searchIcon} alt='Magnifying Glass Icon' />
                </Search>

                <AllHeroes>
                    <HeroBox>
                        <HeroImg src={userDefaultIcon} alt='Hero Icon' />
                        <HeroName>Hero Name</HeroName>
                        <AddHeroForm method='POST' action=''>
                            <AddHeroBtn type='submit' value='+' />
                        </AddHeroForm>
                    </HeroBox>

                </AllHeroes>

                <Link to='/' style={{ textDecoration: 'none'}}><BackHomeBtn> Go back with your team </BackHomeBtn></Link>

            </SearchContent>
        </>
    )
}