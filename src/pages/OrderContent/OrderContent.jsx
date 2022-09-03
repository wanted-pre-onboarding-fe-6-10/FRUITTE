import DeliveryInfo from './components/DeliveryInfo';
import OrderStatus from './components/OrderStatus';
import PaymentInfo from './components/PaymentInfo';
import styled from 'styled-components';
import ProductInfo from './components/ProductInfo';

const OrderContentDummy = {
  orderNumber: 1,
  orderProduct: {
    product_name: '목감기에 좋은 건더기 없는 프리미엄 수제 착즙 유자청',
    product_img: 'https://cdn.imweb.me/thumbnail/20220610/7902f9ea75514.jpg',
    product_price: 15000,
    product_discount: 13300,
    delivery_fee: 3500,
    delivery_method: '택배',
  },
  payment_method: true, // true = 카드결제, false = 무통장입금
  orderer_info: {
    orderer_name: '추승연',
    orderer_contact: '010-1234-5678',
  },
  shipping_info: {
    postcode: 1234,
    order_address: '서울시 양천구 신정3동 신정로7길 60-7',
    detail_address: '402 - 701',
    shipping_req: '부재시 경비실에 맡겨주세요.',
  },
};

const OrderContent = () => {
  return (
    <>
      <OrderStatus />
      <ProductInfo orderInfo={OrderContentDummy.orderProduct} />
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
