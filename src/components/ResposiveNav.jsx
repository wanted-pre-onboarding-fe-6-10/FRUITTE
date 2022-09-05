import React from 'react';
import styled from 'styled-components';

function ResposiveNav() {
  return (
    <ResposiveNavContainer>
      <NavTagLink href="/">
        <NavTagTitle checkPathname={checkPathname('/')}>FRUIT STORE</NavTagTitle>
      </NavTagLink>
      <NavTagLink href="/register">
        <NavTagTitle checkPathname={checkPathname('/register')}>ADMIN</NavTagTitle>
      </NavTagLink>
    </ResposiveNavContainer>
  );
}

export default ResposiveNav;

const checkPathname = pathname => {
  if (pathname === window.location.pathname) {
    return true;
  } else return false;
};
const ResposiveNavContainer = styled.div`
  display: none;
  padding: 0.5rem 3rem;
  border-bottom: 1px solid ${props => props.theme.subBgColor};

  @media (max-width: 800px) {
    display: block;
  }
`;
const NavTagLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  font-size: 14px;
  :hover,
  :active {
    text-decoration: none;
  }
`;
const NavTagTitle = styled.span`
  color: ${props => (props.checkPathname ? props.theme.textColor : props.theme.subTextColor)};
  font-weight: ${props => (props.checkPathname ? 400 : 200)};
  border-bottom: ${props =>
    props.checkPathname ? `1px solid ${props.theme.highlightColor}` : 'none'};
  padding-bottom: 0.5rem;
  margin-right: 1rem;
`;
