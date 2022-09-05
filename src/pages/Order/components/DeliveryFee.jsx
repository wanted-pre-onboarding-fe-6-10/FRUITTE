import styled from 'styled-components';
import addComma from '../../../utils/addComma';
const DeliveryFee = ({ deliveryFee }) => {
  return <Text>배송비 : {deliveryFee !== 0 ? addComma(deliveryFee) + ' 원' : '무료'}</Text>;
};

// styled-components 위치
const Text = styled.div`
  text-align: center;
  background-color: ${props => props.theme.subBgColor};
  color: ${props => props.theme.textColor};
`;

export default DeliveryFee;
