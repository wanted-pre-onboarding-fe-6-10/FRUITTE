// 상품 이름 입력 컴포넌트

import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';

const RegisterTitle = () => {
  return (
    <RegisterBox title={'상품명'}>
      <input type="text" placeholder="상품명을 입력해주세요" />
    </RegisterBox>
  );
};

const Line = styled.hr`
  border: 0.5px solid;
  color: ${props => props.theme.subBgColor};
`;

export default RegisterTitle;
