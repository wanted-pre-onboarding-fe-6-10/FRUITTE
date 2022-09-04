import styled from 'styled-components';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from '../RegisterPrice';

const RegisterContent = ({ title, children }) => {
  return (
    <RegisterContentWrapper>
      <RegisterTitleWrapper>{title}</RegisterTitleWrapper>
      <RegisterInputWrapper>{children}</RegisterInputWrapper>
    </RegisterContentWrapper>
  );
};

export default RegisterContent;
