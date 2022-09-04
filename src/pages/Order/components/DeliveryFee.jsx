import styled from 'styled-components';

const DeliveryFee = props => {
  return <Text>배송비 : {props.deliveryFee !== 0 ? props.deliveryFee : '무료'}</Text>;
};

// styled-components 위치
const Text = styled.div`
  text-align: center;
  background-color: ${props => props.theme.subBgColor};
  color: ${props => props.theme.textColor};
`;

export default DeliveryFee;
