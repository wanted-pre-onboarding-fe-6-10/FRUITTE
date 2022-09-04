import styled from 'styled-components';

const Info = ({ title, text }) => {
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
  padding: 15px;
`;

const InfoTitle = styled.h1`
  width: 25%;
  line-height: 1.5em;
  color: ${props => props.theme.subTextColor};
`;

const InfoText = styled.h1`
  width: 75%;
  line-height: 1.5em;
  padding-left: 20px;
  color: ${props => props.theme.textColor};
`;

export default Info;
