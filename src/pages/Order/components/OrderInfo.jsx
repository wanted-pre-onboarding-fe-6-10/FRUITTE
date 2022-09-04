import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import ProductList from './ProductList';

const OrderInfo = ({ orderInfo }) => {
  return (
    <>
      <BoxTitle title="주문 상품 정보" />
      <OrderWrapper>
        {orderInfo.map((ele, i) => (
          <ProductList
            key={ele.company + ele.deliveryFee}
            productList={ele.productList}
            deliveryFee={ele.deliveryFee}
          />
        ))}
      </OrderWrapper>
    </>
  );
};

// styled-components 위치
const OrderWrapper = styled.div``;
export default OrderInfo;
