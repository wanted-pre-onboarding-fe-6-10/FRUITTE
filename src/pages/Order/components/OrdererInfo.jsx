import styled from 'styled-components';
import BoxTitle from './BoxTitle';
const OrdererInfo = ({ setOpenPostcode, setOrdererContact, setOrdererEmail }) => {
  return (
    <>
      <BoxTitle title="주문자 정보" />
      <InputBox>
        <Input placeholder="이름" onChange={e => setOpenPostcode(e.target.value)} />
        <Input placeholder="연락처" onChange={e => setOrdererContact(e.target.value)} />
        <Input placeholder="이메일(선택)" onChange={e => setOrdererEmail(e.target.value)} />
      </InputBox>
    </>
  );
};

// styled-components 위치
const Input = styled.input`
  width: 100%;
`;
const InputBox = styled.div``;
export default OrdererInfo;
