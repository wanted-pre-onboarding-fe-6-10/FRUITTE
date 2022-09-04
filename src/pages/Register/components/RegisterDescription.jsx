import RegisterBox from './common/RegisterBox';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';
// textarea로 Description 부분을 입력하는 컴포넌트 구성
const RegisterDescription = ({ data, setData }) => {
  return (
    <RegisterBox title={'상품설명'}>
      <RegisterContentWrapper>
        <textarea
          style={{ width: '100%', height: '100px' }}
          type="text"
          onChange={e => {
            setData({ ...data, description: e.target.value });
          }}
        />
      </RegisterContentWrapper>
    </RegisterBox>
  );
};

export default RegisterDescription;
