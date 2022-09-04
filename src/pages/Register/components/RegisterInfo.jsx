// 원산지랑 배송관련 정보 입력 컴포넌트(배송 관련 내용은 따로 작업할지 고민)

import { useState } from 'react';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';

const RegisterInfo = ({ data, setData }) => {
  const [announcement, setAnnouncement] = useState('무료');
  return (
    <RegisterBox title={'상품주요정보'}>
      <RegisterContent title={'원산지'}>
        <input type="text" onChange={e => setData({ ...data, origin: e.target.value })} />
      </RegisterContent>
      <RegisterContent title={'배송비'}>
        <input
          type="text"
          onChange={e => setData({ ...data, delivery_fee: parseInt(e.target.value) })}
        />
      </RegisterContent>
      <RegisterContent title={'배송 방법'}>
        <select
          name="배송방법"
          placeholder="배송방법을 선택해주세요."
          onChange={e => setData({ ...data, delivery_method: e.target.value })}
        >
          <option value="">배송방법을 선택해주세요.</option>
          <option value="택배">택배</option>
          <option value="퀵배송">퀵배송</option>
        </select>
      </RegisterContent>
      <RegisterContent title={'배송 안내'}>
        <select
          name="배송안내사항"
          placeholder="배송안내사항을 선택해주세요."
          onChange={e => setData({ ...data, delivery_announcement: e.target.value })}
        >
          <option value="">배송안내사항을 선택해주세요.</option>
          <option value="무료">무료</option>
          <option value="무료 | 도서산간 배송비 추가">무료 | 도서산간 배송비 추가</option>
        </select>
      </RegisterContent>
    </RegisterBox>
  );
};

export default RegisterInfo;
