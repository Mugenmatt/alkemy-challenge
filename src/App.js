import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderContainer } from './components/header'
import { Home } from './pages/home';
import { Login } from './pages/login';
import { SearchHeroes } from './pages/search';
import { Error } from './pages/error'
import styled from 'styled-components/macro';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const AppDiv = styled.div`
  overflow: hidden;
`;

const Main = styled.div`
  margin-top: 4%;
  position: relative;
`;

const App = () => {
    const correctUser = {
    email: 'challenge@alkemy.org',
    password: 'react'
  }
  let [nameData, setNameData] = useState(null);
  const [emailData, setEmailData] = useState(null);
  const [passwordData, setPasswordData] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);
  const [selectedHero, setSelectedHero] = useState([]);
  const [heroesList, setHeroesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogMsg, setShowLogMsg] = useState(false);

  const isLogged = window.localStorage.getItem('isAuthorized');

  const team = JSON.parse(window.localStorage.getItem('myTeam'));

  const handleName = name => {
    return setNameData(name.target.value);
  }

  const handleEmail = email => {
    return setEmailData(email.target.value);
  }

  const handlePassword = pass => {
    return setPasswordData(pass.target.value);
  }

  const handleSubmit = e => {
    if(emailData === correctUser.email && passwordData === correctUser.password) {
      window.localStorage.setItem('isAuthorized', 'true');
      window.localStorage.setItem('username', JSON.stringify(nameData))
      return setIsAuth(true)
    } else if(nameData === null || emailData === null || passwordData === null) {
      console.log('entramo');
      return setEmptyInput(true)
    } else {
      return setInvalidInput(true)
    }
  }

  const handleLogout = () => {
    setIsAuth(false);
    window.localStorage.setItem('isAuthorized', false)
    window.localStorage.removeItem('username')
    setNameData('');
  }

  const handleSelectedHeroe = (hero) => {
    setSelectedHero([hero, ...selectedHero]) 
    window.localStorage.getItem('myTeam', hero.isChosen = 'true')
  }
  
  const handleDeleteHero = (heroDelete) => {
    let deleteCharacter = team.filter(hero => {
        if(hero.id === heroDelete.id) {
          hero.isChosen = 'false'
          return
        }
        return hero;
      })
    setSelectedHero(deleteCharacter)
  }

  const handleShowLogMsg = () => {
    setTimeout( () => {setShowLogMsg(true)} ,1000)
    setShowLogMsg(false)
  }

  if(isLogged === 'true') {

    if(team === 'null'){
      setSelectedHero(selectedHero)
      window.localStorage.setItem('myTeam', JSON.stringify(selectedHero));
    } else {
      window.localStorage.setItem('myTeam', JSON.stringify(selectedHero));
    }
  }

    return (
        <AppDiv>
          <Router>
            <HeaderContainer
              handleLogout={handleLogout}
              handleShowLogMsg={handleShowLogMsg}
              showLogMsg={showLogMsg}
            />
            <Main>
                <Switch>

                  <Route path="/login" >
                    <Login 
                      handleName={handleName}
                      handleEmail={handleEmail} 
                      handlePassword={handlePassword} 
                      handleSubmit={handleSubmit} 
                      emailData={emailData}
                      passwordData={passwordData}
                      isAuth={isAuth} 
                      invalidInput={invalidInput} 
                      emptyInput={emptyInput}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    /> 
                  </Route>

                  <Route exact path="/" >
                    <Home 
                      setHeroesList={setHeroesList}
                      heroesList={heroesList}
                      handleDeleteHero={handleDeleteHero}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  </Route>

                  <Route path="/search-heroes">
                    <SearchHeroes 
                      handleSelectedHeroe={handleSelectedHeroe}
                      setHeroesList={setHeroesList}
                      heroesList={heroesList}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  </Route>

                  <Route component={Error} />

                </Switch>
            </Main>
          </Router>
        </AppDiv>
      );
}

export default App;
