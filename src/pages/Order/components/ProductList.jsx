import styled from 'styled-components';
import Product from './Product';
import DeliveryFee from './DeliveryFee';
const OrderList = props => {
  return (
    <>
      <OrderWrapper>
        {props.productList.map((ele, i) => (
          <Product key={'Product' + i} product={ele} />
        ))}
        <DeliveryFee productList={props.productList} />
      </OrderWrapper>
    </>
  );
};

// styled-components 위치
const OrderWrapper = styled.div`
  border: 1px solid;
`;
export default OrderList;
