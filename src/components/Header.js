import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from '../firebase'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [userName]);

  const handleAuth = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      setUser(result.user);
    }).catch((error) => {
      alert(error.message)
    });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.png" alt="Aspire" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>

      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="Aspire" />
        <span>HOME</span>
        </a>
        <a href="/home">
          <img src="/images/search-icon.svg" alt="Aspire" />
        <span>ABOUT</span>
        </a>
        <a href="/home">
          <img src="/images/watchlist-icon.svg" alt="Aspire" />
        <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src="/images/original-icon.svg" alt="Aspire" />
        <span>MOTION GRAPHICS</span>
        </a>
        <a href="/home">
          <img src="/images/movie-icon.svg" alt="Aspire" />
        <span>FEATURE FILMS</span>
        </a>
        <a href="/home">
          <img src="/images/series-icon.svg" alt="Aspire" />
        <span>SHORT FILMS</span>
        </a>
        
      </NavMenu>
      <SignOut>
      <UserImg src={userPhoto} alt={userName} />
      <DropDown>
        <span onClick={handleAuth}>Sing Out</span>
      </DropDown>
      </SignOut>
      </>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 140px;
  margin-top: 2px;
  max-height: 130px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s  ease 0s;
&:hover {
  cursor: pointer;
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}


`;

const UserImg = styled.img`
 height: 100%;
`;

const DropDown = styled.div`
position: absolute;
top: 48px;
right: 0px;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151,0.34);
border-radius: 4px;
box-shadow: rbg(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
opacity: 0;
`;

const SignOut = styled.div`

`;





export default Header