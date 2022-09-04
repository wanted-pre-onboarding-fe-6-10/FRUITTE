import ShippingInfo from './components/ShippingInfo';
import OrderStatus from './components/OrderStatus';
import PaymentInfo from './components/PaymentInfo';
import ProductInfo from './components/ProductInfo';
import styled from 'styled-components';

// order-content dummy data
const OrderContentDummy = {
  orderNumber: 1,
  product_info: {
    product_name: '목감기에 좋은 건더기 없는 프리미엄 수제 착즙 유자청',
    product_img: 'https://cdn.imweb.me/thumbnail/20220610/7902f9ea75514.jpg',
    order_option: '유자청 1kg 1병',
  },
  price_info: {
    order_price: 15000,
    discount_price: 13300,
    delivery_fee: 3500,
    isDiscout: true,
  },
  payment_info: {
    payment_method: false, // true = 카드결제, false = 무통장입금
    total_price: 18500,
    card_number: '1234 5678 9101 1121',
    account_info: {
      bank_name: '국민은행',
      account_number: '527837-01-004676',
      account_name: '주식회사 로컬앤라이프',
    },
  },
  orderer_info: {
    orderer_name: '추승연',
    orderer_contact: '010-1234-5678',
    isRegistered: false, // true = 회원, false = 비회원
  },
  shipping_info: {
    postcode: 1234,
    delivery_method: '택배',
    order_address: '서울시 양천구 신정3동 신정로7길 60-7',
    detail_address: '402 - 701',
    shipping_req: '부재시 경비실에 맡겨주세요.',
  },
};

const productInfo = OrderContentDummy.product_info;
const priceInfo = OrderContentDummy.price_info;
const paymentInfo = OrderContentDummy.payment_info;
const ordererInfo = OrderContentDummy.orderer_info;
const shippingInfo = OrderContentDummy.shipping_info;

const withComma = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const itemPrice = productInfo.isDiscount ? priceInfo.discount_price : priceInfo.order_price;
const deliveryFee = priceInfo.delivery_fee;

const itemPriceWithComma = withComma(itemPrice);
const deliveryFeeWithComma = withComma(deliveryFee);
const totalPrice = withComma(itemPrice + deliveryFee);

const OrderContent = () => {
  return (
    <Container>
      <OrderStatus payMethod={paymentInfo.payment_method} />
      <ProductInfo productInfo={productInfo} priceInfo={priceInfo} />
      <PaymentInfo paymentInfo={paymentInfo} totalPrice={totalPrice} />
      <ShippingInfo shippingInfo={shippingInfo} ordererInfo={ordererInfo} />
      <RedirectButton>홈으로</RedirectButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RedirectButton = styled.button`
  width: 50%;
  height: 30%;
  background-color: ${props => props.theme.ownColor};
  color: ${props => props.theme.boxColor};
  margin: 10px;
  &:hover {
    background-color: ${props => props.theme.ownColorHover};
  }
`;

export default OrderContent;
