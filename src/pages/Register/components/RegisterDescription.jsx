import RegisterBox from './common/RegisterBox';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';
// textarea로 Description 부분을 입력하는 컴포넌트 구성
const RegisterDescription = () => {
  return (
    <RegisterBox title={'상세설명'}>
      <RegisterContentWrapper>
        <RegisterTitleWrapper></RegisterTitleWrapper>
        <RegisterInputWrapper></RegisterInputWrapper>
      </RegisterContentWrapper>
    </RegisterBox>
  );
};

export default RegisterDescription;
