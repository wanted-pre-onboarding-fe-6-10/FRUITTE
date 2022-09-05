import styled from 'styled-components';
import { useTable } from 'react-table';

const RegisterOptionList = ({ columnData, options }) => {
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
  //   columnData,
  //   options,
  // });
  return (
    <OptionListBox>
      <OptionListItem>
        <Title>옵션명</Title>
        {options.map((v, i) => (
          <OptionContent key={i}>{v.productName}</OptionContent>
        ))}
      </OptionListItem>
      <OptionListItem>
        <Title>가격</Title>
        {options.map((v, i) => (
          <OptionContent key={i}>{v.price}</OptionContent>
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
