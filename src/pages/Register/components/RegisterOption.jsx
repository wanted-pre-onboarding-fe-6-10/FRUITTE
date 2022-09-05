// 옵션 입력 컴포넌트, 옵션명, 가격, 재고수량 입력할 수 있는 컴포넌트

import { useState } from 'react';
import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import RegisterOptionList from './RegisterOptionList';
import {
  RegisterContentWrapper,
  RegisterInputWrapper,
  RegisterTitleWrapper,
} from './common/RegisterContent';
import { RegisterInput } from './RegisterTitle';

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
            <RegisterInput
              type="text"
              placeholder="옵션명을 입력해주세요."
              onChange={e => setOption({ ...option, productName: e.target.value })}
            />
          </RegisterInputWrapper>
        </RegisterContentWrapper>
        <RegisterContentWrapper>
          <RegisterTitleWrapper>옵션가격</RegisterTitleWrapper>
          <RegisterInputWrapper>
            <RegisterInput
              type="text"
              placeholder="옵션가격을 입력해주세요."
              onChange={e => setOption({ ...option, price: parseInt(e.target.value) })}
            />
          </RegisterInputWrapper>
        </RegisterContentWrapper>
        <RegisterContentWrapper>
          <RegisterTitleWrapper>옵션수량</RegisterTitleWrapper>
          <RegisterInputWrapper>
            <RegisterInput
              type="text"
              placeholder="옵션수량을 입력해주세요."
              onChange={e => setOption({ ...option, quantity: parseInt(e.target.value) })}
            />
          </RegisterInputWrapper>
        </RegisterContentWrapper>
        <RegisterContentWrapper>
          <RegisterTitleWrapper></RegisterTitleWrapper>
          <RegisterButton>
            옵션으로 적용
            <Span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Span>
          </RegisterButton>
        </RegisterContentWrapper>
      </OptionForm>
      <RegisterOptionList options={data.options} />
    </RegisterBox>
  );
};
const OptionForm = styled.form``;

const RegisterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 40px;
  margin: 16px 0px;
  border: none;
  font-size: 16px;
  fontweight: bold;
  color: ${props => props.theme.bgColor};
  background-color: ${props => props.theme.ownColor};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.ownColorHover};
  }
`;
const Span = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

export default RegisterOption;
