import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import { RegisterContentWrapper } from './common/RegisterContent';

const RegisterDescription = ({ data, setData }) => {
  return (
    <RegisterBox title={'상품설명'}>
      <RegisterContentWrapper>
        <TextArea
          type="text"
          onChange={e => {
            setData({ ...data, description: e.target.value });
          }}
        />
      </RegisterContentWrapper>
    </RegisterBox>
  );
};
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
`;

export default RegisterDescription;
