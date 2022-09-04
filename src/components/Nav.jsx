import styled from 'styled-components';

const Nav = () => {
  return (
    <Container>
      <NavBox>
        <LogoBox>
          <LogoWrapper href="/">
            <LogoImg src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg" />
          </LogoWrapper>
        </LogoBox>
        <NavTagBox>
          <NavTagWrapper>
            <NavTagLink href="/productList">
              <NavTagTitle checkPathname={checkPathname('/productList')}>FRUIT STORE</NavTagTitle>
            </NavTagLink>
          </NavTagWrapper>
          <NavTagWrapper>
            <NavTagLink href="/register">
              <NavTagTitle checkPathname={checkPathname('/register')}>ADMIN</NavTagTitle>
            </NavTagLink>
          </NavTagWrapper>
        </NavTagBox>
        <AuthBox>
          <AuthWrapper>
            <Auth>login</Auth>
            <Auth>join</Auth>
          </AuthWrapper>
        </AuthBox>
      </NavBox>
    </Container>
  );
};

const checkPathname = pathname => {
  if (pathname === window.location.pathname) {
    return true;
  } else return false;
};

const Container = styled.div`
  z-index: 1000;
  background-color: ${props => props.theme.bgColor};
  border-bottom: 1px solid ${props => props.theme.subBgColor};
  padding: 0;
`;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74px;
`;
const LogoBox = styled.div`
  width: 200px;
`;
const LogoWrapper = styled.a`
  height: 100%;
`;
const LogoImg = styled.img`
  width: 179px;
`;
const NavTagBox = styled.div`
  display: flex;
`;
const NavTagWrapper = styled.div`
  padding: 0px 20px;
`;
const NavTagLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  :hover,
  :active {
    text-decoration: none;
  }
`;
const NavTagTitle = styled.span`
  color: ${props => (props.checkPathname ? props.theme.textColor : props.theme.subTextColor)};
  font-weight: ${props => (props.checkPathname ? 400 : 200)};
`;
const AuthBox = styled.div`
  width: 190px;
  padding: 0 5px;
`;
const AuthWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Auth = styled.div`
  font-size: 12px;
  padding: 4px;
`;

export default Nav;
