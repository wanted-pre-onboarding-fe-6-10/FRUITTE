// 옵션 입력 컴포넌트, 옵션명, 가격, 재고수량 입력할 수 있는 컴포넌트

import RegisterBox from './common/RegisterBox';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';

const RegisterOption = () => {
  return (
    <RegisterBox title={'옵션'}>
      <RegisterContentWrapper>
        <RegisterTitleWrapper></RegisterTitleWrapper>
        <RegisterInputWrapper></RegisterInputWrapper>
      </RegisterContentWrapper>
    </RegisterBox>
  );
};

export default RegisterOption;
