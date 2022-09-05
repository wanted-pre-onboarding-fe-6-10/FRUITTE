import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';
import { RegisterInput } from './RegisterTitle';

const RegisterPrice = ({ data, setData }) => {
  return (
    <RegisterBox title={'판매가'}>
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
