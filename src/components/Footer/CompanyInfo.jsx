import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
const CompanyInfo = () => {
  return (
    <CompanyContainer>
      <IconBox>
        <a href="https://www.instagram.com/fruitte_picnic/" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" size="20" color="gray" />
        </a>
        <a href="https://pf.kakao.com/_jBWkK" target="_blank" rel="noreferrer">
          <RiKakaoTalkFill className="icon" size="20" color="gray" />
        </a>
        <a href="https://blog.naver.com/fruitte" target="_blank" rel="noreferrer">
          <SiNaver className="icon" size="20" color="gray" />
        </a>
      </IconBox>
      <TextBox>
        <Text>상호명: Local & Life Inc. | 대표: 홍인기 | 전화번호: 010-8828-0472 </Text>
        <Text>사업자번호: 625-81-01879 | 통신판매허가번호: 2020-서울동대문-1110</Text>
        <Text>주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호</Text>
        <Text>호스팅 제공자 : (주)아임웹</Text>
        <Text>
          이용약관 <strong>개인정보처리방침</strong>
        </Text>
        <Text>Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.</Text>
      </TextBox>
    </CompanyContainer>
  );
};

export default CompanyInfo;

const CompanyContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  padding: 20px;
`;
const TextBox = styled.div`
  font-size: 12px;
  color: ${props => props.theme.subTextColor};
`;

const Text = styled.div`
  text-align: center;
  padding: 2px;
`;
