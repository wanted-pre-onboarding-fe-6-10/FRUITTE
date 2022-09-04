import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import ProductList from './ProductList';

const OrderInfo = props => {
  return (
    <>
      <BoxTitle title={'주문 상품 정보'} />
      <OrderWrapper>
        {props.orderInfo.map((ele, i) => (
          <>
            <ProductList key={ele.company + i} order={ele} />
          </>
        ))}
      </OrderWrapper>
    </>
  );
};

// styled-components 위치
const OrderWrapper = styled.div``;
export default OrderInfo;
