import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import { Input } from '../../../components/Input';

const OrdererInfo = ({ formData, setFormData }) => {
  return (
    <>
      <BoxTitle title="주문자 정보" />
      <InputBox>
        <InputWrapper>
          <TextInputWrapper>
            <TextInput
              placeholder="이름"
              value={formData.ordererName}
              onChange={e => setFormData({ ...formData, ordererName: e.target.value })}
            />
          </TextInputWrapper>
          <TextInputWrapper>
            <TextInput
              placeholder="연락처"
              value={formData.ordererContact}
              onChange={e => setFormData({ ...formData, ordererContact: e.target.value })}
            />
          </TextInputWrapper>
        </InputWrapper>
        <InputWrapper>
          <TextInputWrapper>
            <TextInput
              placeholder="이메일(선택)"
              value={formData.ordererEmail}
              onChange={e => setFormData({ ...formData, ordererEmail: e.target.value })}
            />
          </TextInputWrapper>
        </InputWrapper>
      </InputBox>
    </>
  );
};

// styled-components 위치
const TextInputWrapper = styled.div`
  width: 100%;
  margin: 5px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`;
const TextInput = styled(Input)`
  flex: 1;
  padding: 7px 10.5px;
  color: #000;
`;
const InputBox = styled.div``;
export default OrdererInfo;
