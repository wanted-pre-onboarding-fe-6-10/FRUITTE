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
  padding: 1em 2em 1em 3em;
  border-top: ${props => `1px solid ${props.theme.borderColor}`};
  display: flex;
`;

const InfoTitle = styled.h1`
  width: 30%;
  color: ${props => props.theme.subTextColor};
  align-items: baseline;
  font-size: 0.9em;
  line-height: 1.5em;
`;

const InfoText = styled.h1`
  width: 70%;
  color: ${props => props.theme.textColor};
  white-space: pre-wrap;
  font-size: 0.9em;
  line-height: 1.5em;
`;

export default InfoMenu;
