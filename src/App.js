import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { SearchHeroes } from './pages/search';
import { Error } from './pages/error'
import styled from 'styled-components/macro';
import userDefaultIcon from './assets/img/userDefault.svg';
import bg from './assets/img/bg1.jpg';
import logoutIcon from './assets/img/logout.svg';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

// COLORS #8a0303 #03198a 

const AppDiv = styled.div`
  overflow: hidden;
`;

const Header = styled.div`
  width: 75%;
  border-bottom: 2px solid #031a8a69;
  padding: 20px 200px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
`;

const AlkemyIcon = styled.h1`
  font-family: 'comic_stripregular';
  font-weight: 500;
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #000;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    box-shadow: inset 0px 0px 5px #000;
  }
`;

const UserIconImg = styled.img`
  width: 30%;
  vertical-align: top;
  background-color: #000;
  padding: 15px;
  border-radius: 50%;
  border: 2px solid #000;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    box-shadow: inset 0px 0px 5px #000;
  }
`;

const Main = styled.div`
  margin-top: 4%;
  position:relative;
`;

const App = () => {
    const token = 1132055343928952;
    const urlToken = `https://superheroapi.com/api/${token}`;
    const proxy = 'https://rocky-basin-57618.herokuapp.com';

    const correctUser = {
    email: 'challenge@alkemy.org',
    password: 'react'
  }
  const [emailData, setEmailData] = useState(null);
  const [passwordData, setPasswordData] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const [selectedHero, setSelectedHero] = useState([]);
  const [heroesList, setHeroesList] = useState([]);

  const isLogged = window.localStorage.getItem('isAuthorized');

  const team = JSON.parse(window.localStorage.getItem('myTeam'));

  const handleEmail = email => {
    return setEmailData(email.target.value);
  }

  const handlePassword = pass => {
    return setPasswordData(pass.target.value);
  }

  const handleSubmit = e => {
    if(emailData === correctUser.email && passwordData === correctUser.password) {
      window.localStorage.setItem('isAuthorized', 'true');
    return setIsAuth(true)
      } else if(emailData === null || passwordData === null) {
        return setEmptyInput(true)
      } else {
        return setInvalidInput(true)
      }
  }

  if(isLogged === 'true') {
    window.localStorage.setItem('myTeam', JSON.stringify(selectedHero));
  }

  const handleLogout = () => {
      window.localStorage.removeItem('isAuthorized')
  }

  const handleSelectedHeroe = (hero) => {
    setSelectedHero([hero, ...selectedHero]) 
    window.localStorage.getItem('myTeam', hero.isChosen = 'true')
  }
  
  const handleDeleteHero = (heroDelete) => {
    let deleteCharacter = team.filter(hero => {
        return hero.id !== heroDelete.id
      })
      setSelectedHero(deleteCharacter)
  }


    return (
        <AppDiv>
          <Router>
            <Header>
              <Link to='/' style={{textDecoration:'none', color:'#000'}}>
                <AlkemyIcon> Alkemy Challenge </AlkemyIcon>
              </Link>
              <Link to='/login' style={{width:'10%'}} >
                { 
                  isLogged === 'true' ?
                  <UserIconImg src={userDefaultIcon} alt="User Login Icon" onClick={handleLogout} />
                  :
                  <UserIconImg src={logoutIcon} alt="User Logout Icon" />
                }
              </Link>
            </Header>
            <Main>
                <Switch>

                  <Route path="/login" >
                    <Login 
                      handleEmail={handleEmail} 
                      handlePassword={handlePassword} 
                      handleSubmit={handleSubmit} 
                      emailData={emailData}
                      passwordData={passwordData}
                      isAuth={isAuth} 
                      invalidInput={invalidInput} 
                      emptyInput={emptyInput} 
                    /> 
                  </Route>

                  <Route exact path="/" >
                    <Home 
                      setHeroesList={setHeroesList}
                      heroesList={heroesList}
                      handleDeleteHero={handleDeleteHero}
                      team={team}
                    />
                  </Route>

                  <Route path="/search-heroes">
                    <SearchHeroes 
                      proxy={proxy}
                      urlToken={urlToken}
                      handleSelectedHeroe={handleSelectedHeroe}
                      setHeroesList={setHeroesList}
                      heroesList={heroesList}
                    />
                  </Route>

                  <Route component={Error} />

                </Switch>
            </Main>
          </Router>
          {/* <BackgroundOne src={bg} alt='Background superheroes' /> */}
        </AppDiv>
      );
}

export default App;
