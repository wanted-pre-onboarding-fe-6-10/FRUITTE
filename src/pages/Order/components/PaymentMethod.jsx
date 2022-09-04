import styled from 'styled-components';
import BoxTitle from './BoxTitle';
const PaymentMethod = () => {
  return (
    <>
      <BoxTitle title="결제수단" />
      <RadioBox>
        <RadioWrapper>
          <Radio type="radio" />
          <Text>신용카드</Text>
        </RadioWrapper>
        <RadioWrapper>
          <Radio type="radio" />
          <Text>무통장입금</Text>
        </RadioWrapper>
      </RadioBox>
    </>
  );
};

// styled-components 위치
const RadioBox = styled.div`
  display: flex;
`;
const RadioWrapper = styled.div`
  display: flex;
  width: 50%;
`;
const Radio = styled.input`
  /* width: 100%; */
`;
const Text = styled.div`
  color: ${props => props.theme.textColor};
`;
export default PaymentMethod;
