import Info from './Info';
import styled from 'styled-components';
import BoxTitle from './BoxTitle';

const ShippingInfo = ({ ordererInfo, shippingInfo }) => {
  return (
    <ShippingBox>
      <BoxTitle title="배송정보" />
      <Info title="수령인" text={ordererInfo.orderer_name} />
      <Info title="연락처" text={ordererInfo.orderer_contact} />
      <Info title="배송지" />
      <Info title="배송방법" text={shippingInfo.delivery_method} />
      <Info title="배송메모" text={shippingInfo.shipping_req} />
    </ShippingBox>
  );
};

const ShippingBox = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px 30px;
  border: ${props => `1px solid ${props.theme.borderColor}`};
`;

export default ShippingInfo;
