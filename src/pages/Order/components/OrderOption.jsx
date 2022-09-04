import styled from 'styled-components';

const OrderOption = props => {
  return (
    <OptionBox>
      {props.option.map(ele => {
        return (
          <OptionWrapper key={ele.number}>
            <Text>{props.optionList[ele.number].productName}</Text>
            <Text>{ele.quantity}개</Text>
          </OptionWrapper>
        );
      })}
    </OptionBox>
  );
};

// styled-components 위치
const OptionBox = styled.div`
  padding: 2px;
  margin: 1px;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Text = styled.div`
  color: ${props => props.theme.subTextColor};
`;
export default OrderOption;
