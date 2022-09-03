import DeliveryInfo from './components/DeliveryInfo';
import OrderStatus from './components/OrderStatus';
import PaymentInfo from './components/PaymentInfo';
import styled from 'styled-components';

const OrderContent = () => {
  return (
    <>
      <OrderStatus />
      <Box>
        <PaymentInfo />
        <DeliveryInfo />
      </Box>
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export default OrderContent;
