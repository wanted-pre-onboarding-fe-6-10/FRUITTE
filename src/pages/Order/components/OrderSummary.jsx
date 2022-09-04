import styled from 'styled-components';
import BoxTitle from './BoxTitle';
const OrderSummary = ({ orderInfo }) => {
  let totalPrice = 0;
  let totalDeleveryFee = 0;
  if (orderInfo) {
    orderInfo.forEach(ele => {
      if (ele.productList) {
        ele.productList.forEach(ele2 => {
          totalPrice += ele2.price;
          totalDeleveryFee += ele2.delivery_fee;
        });
      }
    });
  }

  return (
    <>
      <BoxTitle title="주문 상품 정보" />
      <Text>상품가격 : {totalPrice}</Text>
      <Text>배송비 : {totalDeleveryFee}</Text>
      <Text>합계 : {totalPrice + totalDeleveryFee}</Text>
    </>
  );
};

// styled-components 위치
const Text = styled.div`
  color: ${props => props.theme.textColor};
`;
export default OrderSummary;
