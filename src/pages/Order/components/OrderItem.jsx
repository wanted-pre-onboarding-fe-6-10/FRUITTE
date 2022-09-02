import styled from 'styled-components';

const OrderItem = () => {
  return (
    <InputBox>
      <InputWrapper>
        <Input></Input>
      </InputWrapper>
    </InputBox>
  );
};

// styled-components 위치
const InputBox = styled.div`
  color: ${props => props.theme.ownColor};
`;

export default OrderItem;
