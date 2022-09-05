import styled from 'styled-components';

const RegisterBox = ({ title, children }) => {
  return (
    <Box>
      <Title>
        {title}
        <RequireDot>*</RequireDot>
      </Title>
      {children}
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
  /* border-radius: 8px; */
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
export const Description = styled.div`
  font-size: 12px;
`;

export default RegisterBox;
