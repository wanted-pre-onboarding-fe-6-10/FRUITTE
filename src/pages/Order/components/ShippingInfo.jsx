import styled from 'styled-components';
import BoxTitle from './BoxTitle';
const ShippingInfo = () => {
  return (
    <>
      <BoxTitle title={'배송 정보'} />
      <CheckBoxWrapper>
        <CheckBox type="checkbox"></CheckBox>
        <Label>주문자 정보와 동일</Label>
      </CheckBoxWrapper>
      <InputBox>
        <Input placeholder={'수령인'} />
        <Input placeholder={'연락처'} />
        <Input placeholder={'우편번호'} />
        <Input placeholder={'주소'} />
        <Input placeholder={'상세주소'} />
        <Select>
          <Option>배송메모를 선택해주세요.</Option>
          <Option>배송 전에 미리 연락 바랍니다</Option>
          <Option>부재시 경비실에 맡겨주세요.</Option>
          <Option>부재시 전화나 문자를 남겨주세요.</Option>
          <Option>직접입력</Option>
        </Select>
      </InputBox>
    </>
  );
};

// styled-components 위치
const CheckBoxWrapper = styled.div``;
const CheckBox = styled.input``;
const Label = styled.label`
  color: ${props => props.theme.textColor};
`;
const Input = styled.input`
  width: 100%;
`;
const Select = styled.select`
  width: 100%;
`;
const Option = styled.option`
  width: 100%;
`;
const InputBox = styled.div``;
export default ShippingInfo;
