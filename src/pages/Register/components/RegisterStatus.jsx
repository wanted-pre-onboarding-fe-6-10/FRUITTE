// 판매 상태 정보 입력 컴포넌트 => 두개의 버튼으로 설정하거나 안하거나로 구분하면 될듯

import { useState } from 'react';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';

const RegisterStatus = ({ data, setData }) => {
  const contentList = ['할인', '매진', '추천', 'Best', '대기'];
  return (
    <RegisterBox title={'상품상태'}>
      <RegisterContent title={'할인'}>
        <button onClick={() => setData({ ...data, status: { ...data.status, isDiscount: true } })}>
          설정함
        </button>
        <button onClick={() => setData({ ...data, status: { ...data.status, isDiscount: false } })}>
          설정안함
        </button>
      </RegisterContent>
      <RegisterContent title={'매진'}>
        <button onClick={() => setData({ ...data, status: { ...data.status, isSoldout: true } })}>
          설정함
        </button>
        <button onClick={() => setData({ ...data, status: { ...data.status, isSoldout: false } })}>
          설정안함
        </button>
      </RegisterContent>
      <RegisterContent title={'추천'}>
        <button onClick={() => setData({ ...data, status: { ...data.status, isRecommend: true } })}>
          설정함
        </button>
        <button
          onClick={() => setData({ ...data, status: { ...data.status, isRecommend: false } })}
        >
          설정안함
        </button>
      </RegisterContent>
      <RegisterContent title={'Best'}>
        <button onClick={() => setData({ ...data, status: { ...data.status, isBest: true } })}>
          설정함
        </button>
        <button onClick={() => setData({ ...data, status: { ...data.status, isBest: false } })}>
          설정안함
        </button>
      </RegisterContent>
      <RegisterContent title={'대기'}>
        <button onClick={() => setData({ ...data, status: { ...data.status, isPending: true } })}>
          설정함
        </button>
        <button onClick={() => setData({ ...data, status: { ...data.status, isPending: false } })}>
          설정안함
        </button>
      </RegisterContent>
    </RegisterBox>
  );
};

export default RegisterStatus;
