import * as React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import Modal from 'react-modal';

import BoxTitle from './BoxTitle';
import { Input, Select } from '../../../components/Input';
const ShippingInfo = ({ formData, setFormData }) => {
  const [openPostcode, setOpenPostcode] = React.useState(false);
  const recipientAddress2 = React.useRef(null);

  const PostModalControl = () => {
    setOpenPostcode(current => !current);
  };

  const selectAddress = e => {
    setFormData({
      ...formData,
      recipientPostCode: e.zonecode,
      recipientAddress1: e.address + '(' + e.bname + ')',
    });
    PostModalControl();
    recipientAddress2.current.focus();
  };
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
    },
  };

  return (
    <>
      <BoxTitle title="배송 정보" />
      <CheckBoxWrapper>
        <CheckBox
          type="checkbox"
          onChange={e => {
            if (e.target.checked)
              setFormData({
                ...formData,
                recipientName: formData.ordererName,
                recipientContact: formData.ordererContact,
              });
          }}
        />
        <Label>주문자 정보와 동일</Label>
      </CheckBoxWrapper>
      <InputBox>
        <InputWrapper>
          <TextInputWrapper>
            <TextInput
              placeholder="수령인"
              value={formData.recipientName}
              onChange={e => setFormData({ ...formData, recipientName: e.target.value })}
            />
          </TextInputWrapper>
          <TextInputWrapper>
            <TextInput
              placeholder="연락처"
              value={formData.recipientContact}
              onChange={e => setFormData({ ...formData, recipientContact: e.target.value })}
            />
          </TextInputWrapper>
        </InputWrapper>
        <PostWrapper onClick={PostModalControl}>
          <InputWrapper>
            <TextInputWrapper>
              <TextInput
                placeholder="우편번호"
                value={formData.recipientPostCode}
                onChange={e => setFormData({ ...formData, recipientPostCode: e.target.value })}
              />
            </TextInputWrapper>
          </InputWrapper>
          <InputWrapper>
            <TextInputWrapper>
              <TextInput
                placeholder="주소"
                value={formData.recipientAddress1}
                onChange={e => setFormData({ ...formData, recipientAddress1: e.target.value })}
              />
            </TextInputWrapper>
          </InputWrapper>
        </PostWrapper>
        <InputWrapper>
          <TextInputWrapper>
            <TextInput
              ref={recipientAddress2}
              placeholder="상세주소"
              value={formData.recipientAddress2}
              onChange={e => setFormData({ ...formData, recipientAddress2: e.target.value })}
            />
          </TextInputWrapper>
        </InputWrapper>
        <InputWrapper>
          <CustomSelect
            value={formData.shippingMemo}
            onChange={e => setFormData({ ...formData, shippingMemo: e.target.value })}
          >
            <Option value="배송메모를 선택해주세요.">배송메모를 선택해주세요.</Option>
            <Option value="배송 전에 미리 연락 바랍니다.">배송 전에 미리 연락 바랍니다.</Option>
            <Option value="부재시 경비실에 맡겨주세요.">부재시 경비실에 맡겨주세요.</Option>
            <Option value="부재시 전화나 문자를 남겨주세요.">
              부재시 전화나 문자를 남겨주세요.
            </Option>
            <Option value="직접입력">직접입력</Option>
          </CustomSelect>
        </InputWrapper>
      </InputBox>
      {openPostcode && (
        <Modal isOpen={openPostcode} onRequestClose={() => PostModalControl()} style={modalStyle}>
          <DaumPostcodeWrapper>
            <BoxTitle title="주소 찾기" />
            <DaumPostcode
              onComplete={selectAddress} // 값을 선택할 경우 실행되는 이벤트
              autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
              defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
            />
          </DaumPostcodeWrapper>
        </Modal>
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

const Option = styled.option`
  width: 100%;
`;
const TextInputWrapper = styled.div`
  margin: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const CustomSelect = styled(Select)`
  flex: 1;
  padding: 7px 10.5px;
  margin: 5px;
`;
const TextInput = styled(Input)`
  flex: 1;
  padding: 7px 10.5px;
`;
const InputBox = styled.div``;
export default ShippingInfo;
