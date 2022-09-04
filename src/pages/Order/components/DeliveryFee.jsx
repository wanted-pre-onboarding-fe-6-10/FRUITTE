import styled from 'styled-components';

const DeliveryFee = ({ deliveryFee }) => {
  return <Text>배송비 : {deliveryFee !== 0 ? deliveryFee : '무료'}</Text>;
};

// styled-components 위치
const Text = styled.div`
  text-align: center;
  background-color: ${props => props.theme.subBgColor};
  color: ${props => props.theme.textColor};
`;

export default DeliveryFee;
