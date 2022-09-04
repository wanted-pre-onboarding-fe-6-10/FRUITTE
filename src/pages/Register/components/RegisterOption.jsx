// 옵션 입력 컴포넌트, 옵션명, 가격, 재고수량 입력할 수 있는 컴포넌트

import { useState } from 'react';
import RegisterBox from './common/RegisterBox';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';

const RegisterOption = () => {
  const [optionList, setOptionList] = useState([]);
  return (
    <RegisterBox title={'옵션'}>
      <RegisterContentWrapper>
        <RegisterTitleWrapper>옵션명</RegisterTitleWrapper>
        <RegisterInputWrapper>
          <input type="text" />
        </RegisterInputWrapper>
      </RegisterContentWrapper>
      <RegisterContentWrapper>
        <RegisterTitleWrapper>가격</RegisterTitleWrapper>
        <RegisterInputWrapper>
          <input type="text" />
        </RegisterInputWrapper>
      </RegisterContentWrapper>
      <RegisterContentWrapper>
        <RegisterTitleWrapper>수량</RegisterTitleWrapper>
        <RegisterInputWrapper>
          <input type="text" />
        </RegisterInputWrapper>
      </RegisterContentWrapper>
      <button>추가하기</button>
    </RegisterBox>
  );
};

export default RegisterOption;
