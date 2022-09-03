import styled from 'styled-components';
import BoxTitle from './BoxTitle';
const OrdererInfo = () => {
  return (
    <>
      <BoxTitle title={'주문자 정보'} />
      <InputBox>
        <Input placeholder={'이름'} />
        <Input placeholder={'연락처'} />
        <Input placeholder={'이메일(선택)'} />
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
