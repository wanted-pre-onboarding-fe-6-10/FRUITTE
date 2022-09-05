import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import Button from '../../../components/Button';

const Payment = ({ formData, setFormData }) => {
  const handleChange = e => {
    switch (e.target.name) {
      case 'allAgree':
        setFormData({
          ...formData,
          privacyAgree: e.target.checked,
          paymentAgree: e.target.checked,
        });
        break;
      default:
        let newFormData = { ...formData };
        newFormData[e.target.name] = e.target.checked;
        setFormData(newFormData);
    }
  };
  const getData = () => {
    console.log(formData);
  };

  return (
    <>
      <BoxTitle title="결제하기" />
      <CheckBoxWrapper>
        <CheckBox
          name="allAgree"
          type="checkbox"
          onChange={handleChange}
          checked={formData.privacyAgree && formData.paymentAgree}
        />
        <Label>전체동의</Label>
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <CheckBox
          checked={formData.privacyAgree}
          name="privacyAgree"
          type="checkbox"
          onChange={handleChange}
        />
        <Label>개인정보 수집 및 이용 동의</Label>
        <Link href="#">약관보기</Link>
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <CheckBox
          checked={formData.paymentAgree}
          name="paymentAgree"
          type="checkbox"
          onChange={handleChange}
        />
        <Label>구매조건 확인 및 결제진행에 동의</Label>
      </CheckBoxWrapper>
      <ButtonBox>
        <Button size="large" fullWidth={true} onClick={getData}>
          결제하기
        </Button>
      </ButtonBox>
    </>
  );
};

// styled-components 위치
const CheckBoxWrapper = styled.div`
  margin: 10px 0;
`;
const CheckBox = styled.input``;
const ButtonBox = styled.div``;

const Label = styled.label`
  color: ${props => props.theme.textColor};
`;
const Link = styled.a`
  color: ${props => props.theme.textColor};
`;
export default Payment;
