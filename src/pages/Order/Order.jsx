import * as React from 'react';
import styled from 'styled-components';

import OrderInfo from './components/OrderInfo';
import OrdererInfo from './components/OrdererInfo';
import ShippingInfo from './components/ShippingInfo';
import OrderSummary from './components/OrderSummary';
import PaymentMethod from './components/PaymentMethod';
import Payment from './components/Payment';
const OrderDummy = [
  {
    company: 'A사',
    productList: [
      {
        id: '1',
        img: ['https://cdn.imweb.me/thumbnail/20220610/7902f9ea75514.jpg'],
        title: '목감기에 좋은 건더기 없는 프리미엄 수제 착즙 유자청',
        price: 15000,
        discount: 13300,
        description: [
          '완도 바람 맞고 자란 비타민 가득 유자를 청으로 만나보세요!',
          '환절기에 딱! 목감기에 딱!',
          '건강한 유자로 맛있게 담근 청년 파머의 유자청',
        ],
        origin: '전라남도 완도',
        delivery_method: '택배',
        delivery_announcement: '50000원 이상 구매시 무료배송',
        delivery_fee: 3500,
        options: [
          { productName: '유자청 480g 2병(960g)', price: 15200, quantity: 30 },
          { productName: '유자청 1kg 1병', price: 13300, quantity: 20 },
          { productName: '착즙유자 500ml', price: 18800, quantity: 99 },
        ],
        status: {
          isSoldout: false,
          isDiscount: true,
          isRecommend: false,
          isBest: false,
          isPending: false,
        },
        isShow: true,
        option: [{ number: 0, quantity: 1 }],
      },
      {
        id: '2',
        img: [
          'https://cdn.imweb.me/thumbnail/20220622/7fae9ba860789.jpg',
          'https://cdn.imweb.me/thumbnail/20220622/bbf4a6989371e.jpg',
          'https://cdn.imweb.me/thumbnail/20220622/fec885830ef59.jpg',
        ],
        title: '구기자 발효 수제 고추장 1kg, 2kg',
        price: 70000,
        discount: 25000,
        description: [
          '국내산 청양 콩으로 만들어 더욱 맛있고 건강한 수제 고추장',
          '엄마의 마음으로 건강한 재료들을 엄선하고 준비하여 정성으로 담았습니다.',
        ],
        origin: '충청남도 청양군',
        delivery_method: '택배',
        delivery_announcement: '40000원 이상 구매시 무료배송',
        delivery_fee: 4000,
        options: [
          { productName: '고추장 1kg', price: 25000, quantity: 10 },
          { productName: '고추장 2kg', price: 49000, quantity: 0 },
        ],
        status: {
          isSoldout: false,
          isDiscount: true,
          isRecommend: true,
          isBest: false,
          isPending: false,
        },
        isShow: true,
        option: [{ number: 0, quantity: 1 }],
      },
    ],
    deliveryFee: 3000,
  },
  {
    company: 'A사',
    productList: [
      {
        id: '1',
        img: ['https://cdn.imweb.me/thumbnail/20220610/7902f9ea75514.jpg'],
        title: '목감기에 좋은 건더기 없는 프리미엄 수제 착즙 유자청',
        price: 15000,
        discount: 13300,
        description: [
          '완도 바람 맞고 자란 비타민 가득 유자를 청으로 만나보세요!',
          '환절기에 딱! 목감기에 딱!',
          '건강한 유자로 맛있게 담근 청년 파머의 유자청',
        ],
        origin: '전라남도 완도',
        delivery_method: '택배',
        delivery_announcement: '50000원 이상 구매시 무료배송',
        delivery_fee: 3500,
        options: [
          { productName: '유자청 480g 2병(960g)', price: 15200, quantity: 30 },
          { productName: '유자청 1kg 1병', price: 13300, quantity: 20 },
          { productName: '착즙유자 500ml', price: 18800, quantity: 99 },
        ],
        status: {
          isSoldout: false,
          isDiscount: true,
          isRecommend: false,
          isBest: false,
          isPending: false,
        },
        isShow: true,
        option: [{ number: 0, quantity: 1 }],
      },
      {
        id: '2',
        img: [
          'https://cdn.imweb.me/thumbnail/20220622/7fae9ba860789.jpg',
          'https://cdn.imweb.me/thumbnail/20220622/bbf4a6989371e.jpg',
          'https://cdn.imweb.me/thumbnail/20220622/fec885830ef59.jpg',
        ],
        title: '구기자 발효 수제 고추장 1kg, 2kg',
        price: 70000,
        discount: 25000,
        description: [
          '국내산 청양 콩으로 만들어 더욱 맛있고 건강한 수제 고추장',
          '엄마의 마음으로 건강한 재료들을 엄선하고 준비하여 정성으로 담았습니다.',
        ],
        origin: '충청남도 청양군',
        delivery_method: '택배',
        delivery_announcement: '40000원 이상 구매시 무료배송',
        delivery_fee: 4000,
        options: [
          { productName: '고추장 1kg', price: 25000, quantity: 10 },
          { productName: '고추장 2kg', price: 49000, quantity: 0 },
        ],
        status: {
          isSoldout: false,
          isDiscount: true,
          isRecommend: true,
          isBest: false,
          isPending: false,
        },
        isShow: true,
        option: [{ number: 0, quantity: 1 }],
      },
    ],
    deliveryFee: 0,
  },
];

const Order = () => {
  const [ordererName, setOpenPostcode] = React.useState('');
  const [ordererContact, setOrdererContact] = React.useState('');
  const [ordererEmail, setOrdererEmail] = React.useState('');
  const [recipientName, setRecipientName] = React.useState('');
  const [recipientContact, setRecipientContact] = React.useState('');
  const [recipientPostCode, setRecipientPostCode] = React.useState('');
  const [recipientAddress1, setRecipientAddress1] = React.useState('');
  const [recipientAddress2, setRecipientAddress2] = React.useState('');
  const [shippingMemo, setShippingMemo] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const [formData, setformData] = React.useState({
    ordererName: '',
  });
  const setData = (key, value) => {
    let newData = {};
  };

  const getData = () => {
    console.log({
      ordererName,
      ordererContact,
      ordererEmail,
      recipientName,
      recipientContact,
      recipientPostCode,
      recipientAddress1,
      recipientAddress2,
      shippingMemo,
      paymentMethod,
    });
  };

  return (
    <>
      <Title>결제하기</Title>
      <Box>
        <LeftWrapper>
          <OrderInfo orderInfo={OrderDummy} />
          <OrdererInfo />
          <ShippingInfo />
        </LeftWrapper>
        <RightWrapper>
          <OrderSummary orderInfo={OrderDummy} />
          <PaymentMethod setPaymentMethod={setPaymentMethod} />
          <Payment getData={getData} />
        </RightWrapper>
      </Box>
    </>
  );
};

// styled-components 위치
const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const Box = styled.div`
  color: ${props => props.theme.ownColor};
  border-width: 1px;
  display: flex;
`;
const LeftWrapper = styled.div`
  color: ${props => props.theme.ownColor};
  border-width: 1px;
  width: 70%;
  min-width: 500px;
  max-width: 600px;
  padding: 10px;
`;
const RightWrapper = styled.div`
  color: ${props => props.theme.ownColor};
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  padding: 10px;
`;
export default Order;
