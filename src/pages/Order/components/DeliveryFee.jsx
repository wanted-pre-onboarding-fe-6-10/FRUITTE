import styled from 'styled-components';

const DeliveryFee = props => {
  var fee = 0;
  if (props.productList) {
    props.productList.forEach(ele => {
      fee += ele.delivery_fee;
    });
  }
  return <Text>배송비 : {fee}</Text>;
};

// styled-components 위치
const Text = styled.div`
  text-align: center;
  background-color: ${props => props.theme.subBgColor};
  color: ${props => props.theme.textColor};
`;

export default DeliveryFee;
