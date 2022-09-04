import styled from 'styled-components';

const StoreInfo = () => {
  return (
    <InfoContainer>
      <FooterBox>
        <FruitteInfo>
          <Title>
            <Strong>About Fruitte</Strong>
          </Title>
          <UnderLine>프루떼는</UnderLine>
          <Font14>
            (프루떼는 프로젝트프룻의 새 이름입니다) 프루떼는 안전한 먹거리의 신념을 지키는 좋은
            농장을 발굴하고 소개하는 팜큐레이터입니다. 건강한 자연을 가까이에서 만날 수 있는
            팜큐레이션 서비스를 통하여 농장을 알고 누리고 맛보는 기쁨을 전합니다. 프루떼를 경험하는
            사람들의 일상에 풍요로움을 더하는 것이 우리가 지향하는 가치입니다.
          </Font14>
        </FruitteInfo>
        <ContactInfo>
          <ContactBox>
            <UnderLine>
              <Font14>문의 안내</Font14>
            </UnderLine>
            <Ptag>
              <Font14>카카오톡채널: 프루떼</Font14>
            </Ptag>
            <Ptag>
              <Font14>(주중 9시~18시 채팅 상담 가능)</Font14>
            </Ptag>
          </ContactBox>
          <ContactBox>
            <UnderLine>
              <Font14>무통장 입금 계좌 안내</Font14>
            </UnderLine>
            <Ptag>
              <Font14>국민은행 527837-01-004676 주식회사 로컬앤라이프</Font14>
            </Ptag>
          </ContactBox>
        </ContactInfo>
        <NavInfo>
          <NavTagTitle>FRUITTE</NavTagTitle>
          <NavTagTitle>FRUIT NOW</NavTagTitle>
          <NavTagLink href="/fruitstore">
            <NavTagTitle checkPathname={checkPathname('/fruitstore')}>FRUIT STORE</NavTagTitle>
          </NavTagLink>
          <NavTagTitle>FRUID PLAY</NavTagTitle>
          <NavTagTitle>ABOUT US</NavTagTitle>
        </NavInfo>
      </FooterBox>
    </InfoContainer>
  );
};

const checkPathname = pathname => {
  if (pathname === window.location.pathname) {
    return true;
  } else return false;
};

const InfoContainer = styled.div`
  background-color: ${props => props.theme.subBoxColor};
  width: 100%;
  padding: 50px 0;
`;

const FooterBox = styled.div`
  width: 100%;
  padding: 20px 8px;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  font-weight: 300;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

const FruitteInfo = styled.div`
  width: 30vw;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const ContactInfo = styled.div`
  width: 30vw;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-bottom: 30px;
  }
`;

const NavInfo = styled.div`
  width: 30vw;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const NavTagTitle = styled.span`
  color: ${props => (props.checkPathname ? props.theme.textColor : props.theme.subTextColor)};
  font-weight: ${props => (props.checkPathname ? 400 : 200)};
  padding: 10px;
`;
const NavTagLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  :hover,
  :active {
    text-decoration: none;
  }
  padding: 10px 0;
`;

const UnderLine = styled.p`
  text-decoration: underline;
  font-weight: 400;
`;

const Ptag = styled.p``;

const Font14 = styled.div`
  font-size: 14px;
  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Title = styled.div`
  font-size: 1.28rem;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Strong = styled.strong`
  @media only screen and (max-width: 1024px) {
    font-weight: 400;
  }
`;

const ContactBox = styled.div``;

export default StoreInfo;
