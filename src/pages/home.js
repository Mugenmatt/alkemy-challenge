import {Link} from 'react-router-dom';
import styled from 'styled-components/macro';
import  userDefaultIcon  from '../assets/img/userDefault.svg';

const HomeContent = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 100px;
    background-color: #fff;
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
`;

const Hero = styled.div`
    width: 20%;
    padding: 50px;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    border: 0.8em solid #000;
    border-radius: 10px;
`;

const HeroImg = styled.img`
    width: 40%;
    margin: auto;
`;

const HeroName = styled.h3`
    text-align: center;
    font-size: 2em;
`;

const HeroPowerStats = styled.p`
    font-weight: 300;
    margin: 0.7em 0;
`;

const DataHeroPowerstats = styled.span`
    color: red;
    font-weight: 700;
`;

const DeleteBox = styled.form`
    margin: auto;
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

export const Home = () => {
    return (
        <HomeContent>
            
            <TitleHome>Your Team!</TitleHome>

            <TeamBox>
                <Hero>
                    <HeroImg src={userDefaultIcon} alt="Image of the Hero" />
                    <HeroName> Hero Name </HeroName>
                    <HeroPowerStats> Intelligence:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                    <HeroPowerStats> Strength:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                    <HeroPowerStats> Speed:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                    <HeroPowerStats> Durability:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                    <HeroPowerStats> Power:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                    <HeroPowerStats> Combat:<DataHeroPowerstats> </DataHeroPowerstats> </HeroPowerStats>
                    <DeleteBox method="POST" action="">
                        <DeleteBtn type="submit" value="Delete" />
                    </DeleteBox>
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
    )
}