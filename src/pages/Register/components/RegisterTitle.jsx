import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import { Input } from './../../../components/Input';

const RegisterTitle = ({ data, setData }) => {
  return (
    <RegisterBox title={'상품명'}>
      <RegisterInput
        type="text"
        placeholder="상품명을 입력해주세요"
        onChange={e => setData({ ...data, title: e.target.value })}
      />
    </RegisterBox>
  );
};

export const RegisterInput = styled(Input)`
  height: 40px;
  border: 1px solid ${props => props.theme.textColor};
  &:hover {
    border: 2px solid black;
  }
  &::placeholder {
    font-size: 14px;
    color: ${props => props.theme.subTextColor};
  }
`;

export default RegisterTitle;
