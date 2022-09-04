// 판매 상태 정보 입력 컴포넌트 => 두개의 버튼으로 설정하거나 안하거나로 구분하면 될듯

import RegisterBox from './common/RegisterBox';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';

const RegisterStatus = () => {
  return (
    <RegisterBox title={'상품상태'}>
      <RegisterContentWrapper>
        <RegisterTitleWrapper></RegisterTitleWrapper>
        <RegisterInputWrapper></RegisterInputWrapper>
      </RegisterContentWrapper>
    </RegisterBox>
  );
};

export default RegisterStatus;
