// API: https://superheroapi.com/
// MI TOKEN: 1132055343928952

import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from './pages/login';
import { SearchHeroes } from './pages/search';
import styled from 'styled-components/macro';
import  userDefaultIcon  from './assets/img/userDefault.svg';

const Header = styled.div`
  background-color: #fff;
  border-bottom: 2px solid #000;
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
`;

const AlkemyIcon = styled.h1`
  font-weight: 500;
`;

const UserIconImg = styled.img`
  width: 3%;
  :hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  margin-top: 4%;
`;

const App = () => {
    return (
      <div className="App">
        <Header>
          <AlkemyIcon> Alkemy Challenge </AlkemyIcon>
          <UserIconImg src={userDefaultIcon} alt="User Icon" />
        </Header>
        <Main>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/search-heroes" component={SearchHeroes} />
            </Switch>
          </Router>
        </Main>
      </div>
    );
}

export default App;
