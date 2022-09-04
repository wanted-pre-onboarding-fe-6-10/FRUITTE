// 옵션 입력 컴포넌트, 옵션명, 가격, 재고수량 입력할 수 있는 컴포넌트

import { useState } from 'react';
import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import RegisterOptionList from './RegisterOptionList';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './RegisterPrice';

const RegisterOption = ({ data, setData }) => {
  const [option, setOption] = useState({ productName: '', price: 0, quantity: 0 });
  const onSubmit = e => {
    e.preventDefault();
    const ops = [...data.options, option];
    setData({ ...data, options: ops });
  };
  return (
    <RegisterBox title={'옵션'}>
      <OptionForm onSubmit={onSubmit}>
        <RegisterContentWrapper>
          <RegisterTitleWrapper>옵션명</RegisterTitleWrapper>
          <RegisterInputWrapper>
            <input
              type="text"
              onChange={e => setOption({ ...option, productName: e.target.value })}
            />
          </RegisterInputWrapper>
        </RegisterContentWrapper>
        <RegisterContentWrapper>
          <RegisterTitleWrapper>가격</RegisterTitleWrapper>
          <RegisterInputWrapper>
            <input
              type="text"
              onChange={e => setOption({ ...option, price: parseInt(e.target.value) })}
            />
          </RegisterInputWrapper>
        </RegisterContentWrapper>
        <RegisterContentWrapper>
          <RegisterTitleWrapper>수량</RegisterTitleWrapper>
          <RegisterInputWrapper>
            <input
              type="text"
              onChange={e => setOption({ ...option, quantity: parseInt(e.target.value) })}
            />
          </RegisterInputWrapper>
        </RegisterContentWrapper>
        <button style={{ width: '100%' }}>추가하기</button>
      </OptionForm>

      <RegisterOptionList options={data.options} />
    </RegisterBox>
  );
};
const OptionForm = styled.form``;

export default RegisterOption;
