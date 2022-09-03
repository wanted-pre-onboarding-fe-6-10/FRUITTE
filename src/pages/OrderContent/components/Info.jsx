import styled from 'styled-components';

const Info = ({ title }) => {
  return (
    <InfoWrapper>
      <InfoTitle>{title}</InfoTitle>
      <InfoText>텍스트</InfoText>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
`;

const InfoTitle = styled.h1`
  width: 30%;
  color: ${props => props.theme.subTextColor};
`;

const InfoText = styled.h1`
  width: 60%;
  color: ${props => props.theme.textColor};
`;

export default Info;
