import * as React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import BoxTitle from './BoxTitle';
const ShippingInfo = () => {
  const [openPostcode, setOpenPostcode] = React.useState(false);
  const PostModalControl = () => {
    setOpenPostcode(current => !current);
  };
  const selectAddress = () => {};
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
        <PostWrapper onClick={PostModalControl}>
          <Input placeholder={'우편번호'} />
          <Input placeholder={'주소'} />
          <Input placeholder={'상세주소'} />
        </PostWrapper>
        <Select>
          <Option>배송메모를 선택해주세요.</Option>
          <Option>배송 전에 미리 연락 바랍니다</Option>
          <Option>부재시 경비실에 맡겨주세요.</Option>
          <Option>부재시 전화나 문자를 남겨주세요.</Option>
          <Option>직접입력</Option>
        </Select>
      </InputBox>
      {openPostcode && (
        <DaumPostcodeBox onClick={PostModalControl}>
          <DaumPostcodeWrapper>
            <BoxTitle title={'주소 찾기'} />
            <DaumPostcode
              onComplete={selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
            />
          </DaumPostcodeWrapper>
        </DaumPostcodeBox>
      )}
    </>
  );
};

// styled-components 위치
const PostWrapper = styled.div``;
const DaumPostcodeBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.subBgColor};
  align-items: center;
  justify-content: center;
  display: flex;
`;
const DaumPostcodeWrapper = styled.div`
  max-width: 800px;
  min-width: 500px;
`;
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
