// 상품 이름 입력 컴포넌트

import styled from 'styled-components';

const RegisterTitle = () => {
  return (
    <Box>
      <Title>
        상품명
        <RequireDot>*</RequireDot>
      </Title>
      <input type="text" />
      <Description>설명내용</Description>
    </Box>
  );
};

export const Box = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
  width: 60%;
  flex-direction: column;
  padding: 16px;
  background-color: ${props => props.theme.bgColor};
  margin-bottom: 16px;
  gap: 8px;
`;
export const Title = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 0.5px solid ${props => props.theme.subBgColor};
  padding-bottom: 8px;
  margin-bottom: 8px;
`;
export const RequireDot = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-left: 4px;
  color: ${props => props.theme.highlightColor};
`;
const Line = styled.hr`
  border: 0.5px solid;
  color: ${props => props.theme.subBgColor};
`;
export const Description = styled.div`
  font-size: 12px;
`;

export default RegisterTitle;
