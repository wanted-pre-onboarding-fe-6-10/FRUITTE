import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import BankTransfer from './BankTransfer';
const PaymentMethod = ({ formData, setFormData }) => {
  const handleChange = e => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };
  return (
    <>
      <BoxTitle title="결제수단" />
      <RadioBox>
        <RadioWrapper>
          <Radio
            id="신용카드"
            value="신용카드"
            name="paymentMethod"
            type="radio"
            onChange={handleChange}
          />
          <Text>신용카드</Text>
        </RadioWrapper>
        <RadioWrapper>
          <Radio
            id="무통장입금"
            value="무통장입금"
            name="paymentMethod"
            type="radio"
            onChange={handleChange}
          />
          <Text>무통장입금</Text>
        </RadioWrapper>
      </RadioBox>
      {formData.paymentMethod == '무통장입금' ? (
        <BankTransfer formData={formData} setFormData={setFormData} />
      ) : null}
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
