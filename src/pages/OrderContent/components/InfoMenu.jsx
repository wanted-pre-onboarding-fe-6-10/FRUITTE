import styled from 'styled-components';

const InfoMenu = ({ title, text }) => {
  return (
    <InfoWrapper>
      <InfoTitle>{title}</InfoTitle>
      <InfoText>{text}</InfoText>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const InfoTitle = styled.h1`
  width: 30%;
  color: ${props => props.theme.subTextColor};
`;

const InfoText = styled.h1`
  width: 70%;
  color: ${props => props.theme.textColor};
  white-space: pre-wrap;
`;

export default InfoMenu;
