import styled from 'styled-components';

const RegisterOptionList = ({ options }) => {
  return (
    <OptionListBox>
      <OptionListItem>
        <Title>옵션명</Title>
        {options.map((v, i) => (
          <OptionContent>{v.productName}</OptionContent>
        ))}
      </OptionListItem>
      <OptionListItem>
        <Title>가격</Title>
        {options.map((v, i) => (
          <OptionContent>{v.price}</OptionContent>
        ))}
      </OptionListItem>
      <OptionListItem>
        <Title>수량</Title>
        {options.map((v, i) => (
          <OptionContent>{v.quantity}</OptionContent>
        ))}
      </OptionListItem>
    </OptionListBox>
  );
};

const OptionListBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 96px;
`;
const OptionListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;
const OptionContent = styled.div`
  margin-bottom: 4px;
`;

export default RegisterOptionList;
