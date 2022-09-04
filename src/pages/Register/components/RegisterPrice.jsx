// 그냥 가격만 입력받는데 이 부분이 애매해서 status 입력 부분과 합쳐도 될듯

import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';

const RegisterPrice = () => {
  return (
    <RegisterBox title={'판매가'}>
      <RegisterContent title={'판매가'}>
        <input type="text" placeholder="판매가를 입력해주세요" />
      </RegisterContent>
    </RegisterBox>
  );
};

export const RegisterContentWrapper = styled.div`
  display: flex;
`;
export const RegisterTitleWrapper = styled.div`
  width: 30%;
`;
export const RegisterInputWrapper = styled.div`
  width: auto;
`;

export default RegisterPrice;
