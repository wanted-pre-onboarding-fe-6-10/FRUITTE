import styled from 'styled-components';

const RegisterContent = ({ title, children }) => {
  return (
    <RegisterContentWrapper>
      <RegisterTitleWrapper>{title}</RegisterTitleWrapper>
      <RegisterInputWrapper>{children}</RegisterInputWrapper>
    </RegisterContentWrapper>
  );
};

export const RegisterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 4px;
  border-bottom: 0.5px solid ${props => props.theme.subBgColor};
  font-size: 16px;
`;
export const RegisterTitleWrapper = styled.div`
  width: 30%;
`;
export const RegisterInputWrapper = styled.div`
  width: auto;
`;

export default RegisterContent;
