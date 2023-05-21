import React from "react";
import styled from "styled-components";
import {connect} from 'react-redux'
import {signOutAPI} from "../redux/actions";
const Header = (props) => {
    console.log(props.user , 'header')
    return(
        <Container>
            <Content>
                <Logo>
                   <a href='/hom'>
                       <img  src='/image/home-logo.svg' alt=''/>
                   </a>
                </Logo>
                <Search>
                    <div>
                        <input text='text' placeholder='search'/>
                        <SearchIcon>
                            <img src='/image/search-icon.svg' alt=''/>
                        </SearchIcon>
                    </div>
                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a href='/home'>Home</a>
                            <img src='/image/nav-home.svg' alt='' />
                        </NavList>
                        <NavList>
                            <a href='/network'>My Network</a>
                            <img src='/image/nav-network.svg' alt='' />
                        </NavList>
                        <NavList>
                            <a href='message'>Messages</a>
                            <img src='/image/nav-messaging.svg' alt=''  />
                        </NavList>
                        <NavList>
                            <a href='/job'>Job</a>
                            <img src='/public/image/nav-jobs.svg' alt=''/>
                        </NavList>
                        <NavList>
                            <a href='/notifications'>Notifications</a>
                            <img src='/image/nav-network.svg' />
                        </NavList>
                        <User>
                            <a>
                                {props?.user && props?.user?.photoURL
                                    ? <img src={props.user.photoURL} alt=''/>
                                    :  <img src='/image/user.svg' alt=''/>
                                }
                                <span>Me
                                    <img src='/image/down-icon.svg' alt='' />
                                </span>
                            </a>
                            <SignOut onClick={ ()=> props.signOut() }>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src='/image/nav-home.svg' alt=''/>
                                <span>Work
                                    <img src='/image/down-icon.svg' alt='' />
                                </span>
                            </a>
                        </Work>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled(NavList)`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    right: 15px;
    background: #eee;
  }
`;
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 575px) {
    display: none;
  }
`;

const mapToStateProps = (state) => {
    return{
        user: state?.userState?.user
    }
}
const mapToSDispatchProps = (dispatch) => {
    return{
       signOut: () => {
           dispatch(signOutAPI())
       }
    }
}
export default connect(mapToStateProps,mapToSDispatchProps)(Header)
