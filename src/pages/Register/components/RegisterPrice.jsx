// 그냥 가격만 입력받는데 이 부분이 애매해서 status 입력 부분과 합쳐도 될듯

import { useState } from 'react';
import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';

const RegisterPrice = ({ data, setData }) => {
  // const contentList = [{ price: '판매가' }, { discount: '할인가' }];
  // const [price, setPrice] = useState();
  // console.log(contentList[0].key());
  return (
    <RegisterBox title={'판매가'}>
      {/* {contentList.map((v, i) => (
        <RegisterContent key={i} title={v}>
          <input
            style={{ height: '35px' }}
            value={price}
            type="text"
            placeholder={`${v}를 입력해주세요.`}
            onChange={e => {
              // setData(...data, data.v.key());
              setPrice(e.target.value);
            }}
          />{' '}
          원
        </RegisterContent>
      ))} */}
      <RegisterContent title={'판매가'}>
        <input
          style={{ height: '35px' }}
          type="text"
          onChange={e => setData({ ...data, price: parseInt(e.target.value) })}
        />
      </RegisterContent>
      <RegisterContent title={'할인가'}>
        <input
          style={{ height: '35px' }}
          type="text"
          onChange={e => setData({ ...data, discount: parseInt(e.target.value) })}
        />
      </RegisterContent>
    </RegisterBox>
  );
};

export const RegisterContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 4px;
  border-bottom: 0.5px solid ${props => props.theme.subBgColor};
  font-size: 14px;
`;
export const RegisterTitleWrapper = styled.div`
  width: 30%;
`;
export const RegisterInputWrapper = styled.div`
  width: auto;
`;

export default RegisterPrice;
