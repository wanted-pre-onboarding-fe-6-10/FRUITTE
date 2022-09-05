import styled from 'styled-components';
import { Input, Select } from '../../../components/Input';

const BankTransfer = ({ formData, setFormData }) => {
  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    console.log(e.target, formData);
    setFormData({
      ...formData,
      cashReceiptType: e.target.value,
      cashReceiptNumber: '',
    });
  };
  return (
    <>
      <CustomSelect>
        <Option>국민은행 527837-01-004676 주식회사로컬앤라이프</Option>
      </CustomSelect>
      <TextInput
        placeholder="입금자명"
        value={formData.depositor}
        onChange={e => setFormData({ ...formData, depositor: e.target.value })}
      />
      <Text>주문 후 72시간 동안 미입금시 자동 취소됩니다.</Text>
      <Line />
      <CheckBoxWrapper>
        <CheckBox
          onChange={e => {
            setFormData({
              ...formData,
              cashReceipt: !formData.cashReceipt,
            });
          }}
          type="checkbox"
        />
        <Label>현금영수증신청</Label>
      </CheckBoxWrapper>
      {formData.cashReceipt ? (
        <CashReceiptBox>
          <RadioBox>
            <RadioWrapper>
              <Radio
                id="소득공제용"
                value="소득공제용"
                name="cashReceiptType"
                type="radio"
                onChange={handleChange}
                // checked
              />
              <Label>소득공제용</Label>
            </RadioWrapper>
            <RadioWrapper>
              <Radio
                id="지출증빙용"
                value="지출증빙용"
                name="cashReceiptType"
                type="radio"
                onChange={handleChange}
              />
              <Label>지출증빙용</Label>
            </RadioWrapper>
          </RadioBox>
          {formData.cashReceiptType == '소득공제용' ? (
            <TextInput
              placeholder="휴대전화번호 입력"
              value={formData.cashReceiptNumber}
              onChange={e => setFormData({ ...formData, cashReceiptNumber: e.target.value })}
            />
          ) : (
            <TextInput
              placeholder="사업자번호 입력"
              value={formData.cashReceiptNumber}
              onChange={e => setFormData({ ...formData, cashReceiptNumber: e.target.value })}
            />
          )}
        </CashReceiptBox>
      ) : null}
    </>
  );
};

// styled-components 위치
const Text = styled.h1`
  margin: 10px 0;
  color: ${props => props.theme.subTextColor};
`;

const Option = styled.option`
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  margin: 20px 0;
  border-bottom: 1px solid;
  color: ${props => props.theme.borderColor};
`;
const CheckBoxWrapper = styled.div`
  margin: 20px 0;
`;
const CheckBox = styled.input``;
const Label = styled.label`
  color: ${props => props.theme.textColor};
`;
const CashReceiptBox = styled.div``;
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
const CustomSelect = styled(Select)`
  margin: 10px 5px;
`;
const TextInput = styled(Input)`
  margin: 10px 5px;
`;
export default BankTransfer;
