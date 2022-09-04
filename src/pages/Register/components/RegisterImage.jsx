import RegisterBox from './common/RegisterBox';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';
// 이미지 등록하고 미리보기 볼 수 있는 컴포넌트
const RegisterImage = () => {
  return (
    <RegisterBox title={'상품이미지'}>
      <RegisterContentWrapper>
        <RegisterTitleWrapper></RegisterTitleWrapper>
        <RegisterInputWrapper></RegisterInputWrapper>
        <input type="file" />
      </RegisterContentWrapper>
    </RegisterBox>
  );
};

export default RegisterImage;
