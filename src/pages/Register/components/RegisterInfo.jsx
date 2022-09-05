import styled from 'styled-components';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';
import { RegisterInput } from './RegisterTitle';

const RegisterInfo = ({ data, setData }) => {
  return (
    <RegisterBox title={'상품주요정보'}>
      <RegisterContent title={'원산지'}>
        <RegisterInput
          type="text"
          placeholder="원산지를 입력해주세요."
          onChange={e => setData({ ...data, origin: e.target.value })}
        />
      </RegisterContent>
      <RegisterContent title={'배송비'}>
        <RegisterInput
          type="text"
          placeholder="배송비를 입력해주세요."
          onChange={e => setData({ ...data, delivery_fee: parseInt(e.target.value) })}
        />
      </RegisterContent>
      <RegisterContent title={'배송 방법'}>
        <Select
          name="배송방법"
          placeholder="배송방법을 선택해주세요."
          onChange={e => setData({ ...data, delivery_method: e.target.value })}
        >
          <Option value="">배송방법을 선택해주세요.</Option>
          <Option value="택배">택배</Option>
          <Option value="퀵배송">퀵배송</Option>
        </Select>
      </RegisterContent>
      <RegisterContent title={'배송 안내'}>
        <Select
          name="배송안내사항"
          placeholder="배송안내사항을 선택해주세요."
          onChange={e => setData({ ...data, delivery_announcement: e.target.value })}
        >
          <Option value="">배송안내사항을 선택해주세요.</Option>
          <Option value="무료">무료</Option>
          <Option value="무료 | 도서산간 배송비 추가">무료 | 도서산간 배송비 추가</Option>
        </Select>
      </RegisterContent>
    </RegisterBox>
  );
};

const Select = styled.select`
  height: 40px;
  width: 220px;
  padding-left: 8px;
  border: 1px solid ${props => props.theme.textColor};
  border-radius: 5px;
  &:hover {
    border: 2px solid black;
  }
  &::placeholder {
    font-size: 14px;
    color: ${props => props.theme.subTextColor};
  }
`;
const Option = styled.option`
  font-size: 14px;
`;

export default RegisterInfo;
