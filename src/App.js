import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { SearchHeroes } from './pages/search';
import styled from 'styled-components/macro';
import  userDefaultIcon  from './assets/img/userDefault.svg';
import logoutIcon from './assets/img/logout.svg';
import ReactModal from 'react-modal';


ReactModal.setAppElement('#root');

const Header = styled.div`
  background-color: #fff;
  border-bottom: 2px solid #000;
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AlkemyIcon = styled.h1`
  font-weight: 500;
`;

const UserIconImg = styled.img`
  width: 30%;
  vertical-align: top;
  :hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  margin-top: 4%;
`;

const App = () => {
    const token = 1132055343928952;
    const urlToken = `https://superheroapi.com/api/${token}`

    const correctUser = {
    // email: 'challenge@alkemy.org',
    // password: 'react'
    email: 'a@a.com',
    password: '123'
  }
  const [emailData, setEmailData] = useState(null);
  const [passwordData, setPasswordData] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
  const [invalidInput, setInvalidInput] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);


  const isLogged = window.localStorage.getItem('isAuthorized');

  const handleEmail = email => {
    return setEmailData(email.target.value);
  }

  const handlePassword = pass => {
    return setPasswordData(pass.target.value);
  }

  const handleSubmit = e => {
      e.preventDefault()
      if(emailData === correctUser.email && passwordData === correctUser.password) {
    window.localStorage.setItem('isAuthorized', 'true');
    return setIsAuth(true)
      } else if(emailData === null || passwordData === null) {
        return setEmptyInput(true)
      } else {
        return setInvalidInput(true)
      }
  }

  const handleLogout = logout => {
      window.localStorage.removeItem('isAuthorized')
  }

    return (
      <div className="App">
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
                    token={token} 
                    urlToken={urlToken} 
                  />
                </Route>

                <Route path="/search-heroes">
                  <SearchHeroes 
                    token={token} 
                    urlToken={urlToken} 
                  />
                </Route>

              </Switch>

          </Main>
        </Router>
      </div>
    );
}

export default App;
