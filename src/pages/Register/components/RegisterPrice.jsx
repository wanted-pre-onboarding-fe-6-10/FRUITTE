// 그냥 가격만 입력받는데 이 부분이 애매해서 status 입력 부분과 합쳐도 될듯

import styled from 'styled-components';
import { Input } from '../../../components/Input';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';
import { RegisterInput } from './RegisterTitle';

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
        <RegisterInput
          type="text"
          placeholder="판매가를 입력해주세요"
          onChange={e => setData({ ...data, price: parseInt(e.target.value) })}
        />
      </RegisterContent>
      <RegisterContent title={'할인가'}>
        <RegisterInput
          type="text"
          placeholder="할인가를 입력해주세요"
          onChange={e => setData({ ...data, discount: parseInt(e.target.value) })}
        />
      </RegisterContent>
    </RegisterBox>
  );
};

export default RegisterPrice;
