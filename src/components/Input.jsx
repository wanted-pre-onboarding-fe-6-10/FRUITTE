import styled from 'styled-components';
import React, { forwardRef } from 'react';

export const TextInput = forwardRef((props, ref) => {
  return (
    <Width100>
      {props.title ? (
        <Label required={props.required}>
          {props.title}
          <Required>*</Required>
        </Label>
      ) : (
        <DisplayNone />
      )}
      <Input
        placeholder={props.placeholder ? props.placeholder : '안에 들어갈 내용을 입력하세요'}
        value={props.value ? props.value : ''}
        onChange={props.onChange}
        key={props.key}
        ref={ref}
        defaultValue={props.defaultValue}
      />
      {props.guideline ? <Guideline>{props.guideline}</Guideline> : <DisplayNone />}
    </Width100>
  );
});

export const ArrInput = forwardRef((props, ref) => {
  return (
    <Width100>
      {props.title ? (
        <Label required={props.required}>
          {props.title}
          <Required>*</Required>
        </Label>
      ) : (
        <DisplayNone />
      )}
      <Widthflex>
        <Input
          placeholder={props.placeholder ? props.placeholder : '안에 들어갈 내용을 입력하세요'}
          onChange={props.onChange}
          key={props.key}
          ref={ref}
          value={props.value}
          defaultValue={props.defaultValue}
        />
        <ArrButton onClick={props.onClick}>add</ArrButton>
      </Widthflex>
      {props.arr}
      {props.guideline ? <Guideline>{props.guideline}</Guideline> : <DisplayNone />}
    </Width100>
  );
});

const Width100 = styled.div`
  width: 100%;
  margin-top: 28px;
`;

const Widthflex = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DisplayNone = styled.div`
  display: none;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 12px;
  span {
    display: ${props => (props.required === true ? 'static' : 'none')};
  }
`;
const Required = styled.span`
  color: red;
  margin-left: 2px;
`;

const ArrButton = styled.button`
  font-size: 16px;
  line-height: 19px;
  width: 7rem;
  height: 30px;
  background-color: transparent;
  margin-left: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 12px 19px;
  border-radius: 5px;
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 19px;
  width: 100%;
  height: 30px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  padding: 15px 19px;
  border-radius: 5px;
  @media screen and (max-width: 499px) {
    font-size: 12px;
  }
  &::placeholder {
    color: #c8c8c8;
  }
`;

export const Guideline = styled.div`
  color: #949494;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 16px;
  margin-left: 1px;
`;
