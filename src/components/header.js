import React, { Component } from 'react';
import { Link } from 'gatsby';

import logoHotdog from '../images/logo-hotdog.png';
import logoPickle from '../images/logo-pickle.png';
import logoPill from '../images/logo-pill.png';
import logoFlag from '../images/logo-flag.png';
import logoTalkie from '../images/logo-talkie.png';

import banner from '../images/banner.jpg'

import styled from 'styled-components'



const BannerImg = styled.img`
  height: 400px;
  width: 100%;
  border: 5px solid #000000;
  textalign: center;
`

const MainNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: Myriad Pro;
  font-weight: 900;
  font-size: 15px;
`


const NavLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  width: 15%;
  text-align: center;
   padding: 10px 30px;
      &:hover  {
    background-color: #D3D3D3;
  }
`






const NavImg = styled.img`
  height: 70px;
  width: 70px;
  display: inline-block;


`
const NavLinkText = styled.div`
  textAlign: center;
  display: block;
`



 class Header extends Component{
  render() {
    return (
      <div style={{maxWidth: `auto`,   margin: `10px`
}}>
      <BannerImg src={banner} alt="banner" />

        <MainNav>
          <NavLink to="#">
              <NavImg src={logoHotdog} alt="logoHotdog" />
              <NavLinkText>
                HOME
              </NavLinkText>
              </NavLink>

          <NavLink to="#">
            <NavImg src={logoPickle} alt="logoPickle" />
            <NavLinkText>
              RECIPES
            </NavLinkText>
          </NavLink>
          <NavLink to="#">
            <NavImg src={logoPill} alt="logoPill" />
            <NavLinkText>
              LIFESTYLE
            </NavLinkText>
          </NavLink>
          <NavLink to="#">
            <NavImg src={logoFlag} alt="logoFlag" />
            <NavLinkText>
              ABOUT
            </NavLinkText>
          </NavLink>
          <NavLink to="#">
            <NavImg src={logoTalkie} alt="logoTalkie" />
            <NavLinkText>
              CONTACT
            </NavLinkText>
          </NavLink>
        </MainNav>

      </div>
    )
  }
}


export default Header




