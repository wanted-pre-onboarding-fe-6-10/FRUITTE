import styled from 'styled-components';
import ResposiveNav from './ResposiveNav';

const Nav = ({ onToggle }) => {
  const user = localStorage.getItem('who');

  const onLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('로그아웃 하시겠습니까?') === true) {
      localStorage.removeItem('who');
      window.location.replace('/');
    } else {
      return;
    }
  };

  return (
    <>
      <Container>
        <NavBox>
          <LogoBox>
            <LogoWrapper href="/">
              <LogoImg src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg" />
            </LogoWrapper>
          </LogoBox>
          <NavTagBox>
            <NavTagWrapper>
              <NavTagLink href="/fruitstore">
                <NavTagTitle checkPathname={checkPathname('/fruitstore')}>FRUIT STORE</NavTagTitle>
              </NavTagLink>
            </NavTagWrapper>
            {user === 'admin' && (
              <NavTagWrapper>
                <NavTagLink href="/register">
                  <NavTagTitle checkPathname={checkPathname('/register')}>ADMIN</NavTagTitle>
                </NavTagLink>
              </NavTagWrapper>
            )}
          </NavTagBox>
          <AuthBox>
            <AuthWrapper>
              {!user ? (
                <>
                  <Auth onClick={onToggle}>login</Auth> <Auth>join</Auth>
                </>
              ) : (
                <Auth onClick={onLogout}>logout</Auth>
              )}
            </AuthWrapper>
          </AuthBox>
        </NavBox>
      </Container>
      <ResposiveNav />
    </>
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
  padding: 0 3rem;
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

  @media (max-width: 425px) {
    width: 140px;
  }

  @media (max-width: 375px) {
    width: 100px;
  }
`;
const NavTagBox = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
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
  font-size: 16px;
  padding: 4px;
  cursor: pointer;
`;

export default Nav;
