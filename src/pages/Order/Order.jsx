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
];

const Order = () => {
  const [formData, setFormData] = React.useState({
    id: '',
    option: [],
    deliveryFee: [],
    ordererName: '',
    ordererContact: '',
    ordererEmail: '',
    recipientName: '',
    recipientContact: '',
    recipientPostCode: '',
    recipientAddress1: '',
    recipientAddress2: '',
    shippingMemo: '',
    paymentMethod: '',
    depositor: '',
    cashReceipt: false,
    cashReceiptType: '소득공제용',
    cashReceiptNumber: '',
    privacyAgree: false,
    paymentAgree: false,
  });

  return (
    <Container>
      <Title>결제하기</Title>
      <Box>
        <LeftWrapper>
          <ComponentWrapper>
            <OrderInfo orderInfo={OrderDummy} />
          </ComponentWrapper>
          <ComponentWrapper>
            <OrdererInfo formData={formData} setFormData={setFormData} />
          </ComponentWrapper>
          <ComponentWrapper>
            <ShippingInfo formData={formData} setFormData={setFormData} />
          </ComponentWrapper>
        </LeftWrapper>
        <RightWrapper>
          <ComponentWrapper>
            <OrderSummary orderInfo={OrderDummy} />
          </ComponentWrapper>
          <ComponentWrapper>
            <PaymentMethod formData={formData} setFormData={setFormData} />
          </ComponentWrapper>
          <ComponentWrapper>
            <Payment formData={formData} setFormData={setFormData} />
          </ComponentWrapper>
        </RightWrapper>
      </Box>
    </Container>
  );
};
// styled-components 위치
const Container = styled.div`
  min-height: 100vh;
  padding: 30px 0;
  background-color: ${props => props.theme.orderBgColor};
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ComponentWrapper = styled.div`
  margin: 16px 8px;
  padding: 24px;
  background-color: ${props => props.theme.boxColor};
`;
const Title = styled.div`
  font-size: 28px;
  text-align: center;
  padding: 30px 0;
  color: ${props => props.theme.textColor};
`;

const LeftWrapper = styled.div`
  color: ${props => props.theme.ownColor};
  border-width: 1px;
`;
const RightWrapper = styled.div`
  color: ${props => props.theme.ownColor};
`;
export default Order;
