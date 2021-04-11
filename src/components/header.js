import { Link } from "react-router-dom";
import userDefaultIcon from '../assets/img/userDefault.svg';
import logoutIcon from '../assets/img/logout.svg';
import styled from 'styled-components';

const Header = styled.div`
width: 75%;
border-bottom: 2px solid #000;
padding: 20px 200px;
margin: 20px auto 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 200;
@media (max-width: 1200px) {
    width: 80%;
    margin-left: 68px;
    justify-content: space-between;
    padding: 20px 50px;
}
`;

const AlkemyIcon = styled.h1`
font-family: 'comic_stripregular';
font-weight: 500;
background-color: #000;
color: #fff;
padding: 20px;
transition: all 0.6s ease-in-out;
border-radius: 10px;
border: 2px solid #000;
:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, .3);
  box-shadow: inset 0px 0px 5px #000;
}

`;

const LoginBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
right: -70px;
@media (max-width: 1200px) {
    right: -70px;
}
`;

const LogMsg = styled.p`
font-family: 'comictypemedium';
color: #000;
font-size: 1.3em;
position: absolute;
bottom: 5px;
left: -160px;
display: ${(props) => props.displayMsg};
@media (max-width: 1200px) {
    display: none;
}
`;

const UserIconImg = styled.img`
width: 30%;
background-color: #000;
padding: 10px;
transition: all 0.6s ease-in-out;
border-radius: 50%;
border: 2px solid #000;
:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, .3);
  box-shadow: inset 0px 0px 5px #000;
}
`;

export const HeaderContainer = ({handleLogout, handleShowLogMsg, showLogMsg}) => {

    const isLogged = window.localStorage.getItem('isAuthorized');

    return (
        <Header>
            <Link to='/' style={{textDecoration:'none', color:'#000'}}>
                <AlkemyIcon> Alkemy Challenge </AlkemyIcon>
            </Link>
              
            <LoginBox>
                <LogMsg displayMsg={!showLogMsg ? 'inline-block' : 'none'} >{isLogged === 'true' ? 'User logged in' : 'User logged out'}</LogMsg>
                <Link to='/login' >
                <UserIconImg onMouseOut={handleShowLogMsg} src={isLogged === 'true' ? userDefaultIcon : logoutIcon} alt={isLogged === 'true' ? 'User logged in' : 'User logged out'} onClick={handleLogout} />
                </Link>
            </LoginBox>
        </Header>
    )
}