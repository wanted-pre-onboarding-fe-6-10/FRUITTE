import RegisterBox from './common/RegisterBox';
import { RegisterContentWrapper } from './common/RegisterContent';
const RegisterDescription = ({ data, setData }) => {
  return (
    <RegisterBox title={'상품설명'}>
      <RegisterContentWrapper>
        <textarea
          style={{ width: '100%', height: '100px' }}
          type="text"
          onChange={e => {
            setData({ ...data, description: e.target.value });
          }}
        />
      </RegisterContentWrapper>
    </RegisterBox>
  );
};

export default RegisterDescription;
