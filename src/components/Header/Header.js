import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../Container'

const HeaderStyle = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  z-index: 1071;
  height: auto;
  min-height: 3rem;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  box-sizing: content-box;
  font-size: 1.25rem;
`

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  line-height: inherit;
  white-space: nowrap;

  @media (max-width: 576px) {
    align-items: flex-end;
    line-height: 1;
  }
`

const BrandLink = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  height: 100%;
  width: 100%;
  font-weight: 600;
  line-height: inherit;
  white-space: nowrap;
  color: #424242;
  text-decoration: none;
  transition: color 0.2s ease-out;

  &:hover {
    text-decoration: none;
  }
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  line-height: inherit;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`

const NavItem = styled(Link)`
  display: block;
  padding: 0 1rem;
  color: #757575;
  transition: color 0.2s ease-out;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #212529;
  }

  &:active {
    text-decoration: none;
    color: #212529;
  }
`

const Header = () => (
  <HeaderStyle>
    <Container>
      <HeaderNav>
        <BrandLink to="/">Kimani&nbsp;Maina</BrandLink>
        <NavItems>
          <NavItem to="/blog/">Blog</NavItem>
          <NavItem to="/about/">About</NavItem>
          <NavItem to="/contact/">Contact</NavItem>
        </NavItems>
      </HeaderNav>
    </Container>
  </HeaderStyle>
)

export default Header
