import styled from 'styled-components';
import addComma from '../../../utils/addComma';
const RegisterOptionList = ({ options }) => {
  return (
    <OptionListBox>
      <OptionListItem>
        <Title>옵션번호</Title>
        {options.map((v, i) => (
          <OptionContent key={i}>{i + 1}</OptionContent>
        ))}
      </OptionListItem>
      <OptionListItem>
        <Title>옵션명</Title>
        {options.map((v, i) => (
          <OptionContent key={i}>{v.productName}</OptionContent>
        ))}
      </OptionListItem>
      <OptionListItem>
        <Title>가격</Title>
        {options.map((v, i) => (
          <OptionContent key={i}>{addComma(v.price.toString())}</OptionContent>
        ))}
      </OptionListItem>
      <OptionListItem>
        <Title>수량</Title>
        {options.map((v, i) => (
          <OptionContent key={i}>{v.quantity}</OptionContent>
        ))}
      </OptionListItem>
    </OptionListBox>
  );
};

const OptionListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 16px;
  padding: 8px 0px;
  border: 1px solid;
  border-radius: 5px;
`;
const OptionListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 4px 16px;
  width: 25%;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const OptionContent = styled.div`
  margin-bottom: 8px;
`;

export default RegisterOptionList;
