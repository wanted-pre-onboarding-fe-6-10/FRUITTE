import InfoMenu from './InfoMenu';
import styled from 'styled-components';
import BoxTitle from './BoxTitle';
import Address from './Address';

const Shipping = ({ orderInfo }) => {
  const ordererInfo = orderInfo.orderer;
  const shippingInfo = orderInfo.shipping;

  return (
    <ShippingBox>
      <BoxTitle title="배송정보" />
      <InfoMenu title="수령인" text={ordererInfo.name} />
      <InfoMenu title="연락처" text={ordererInfo.contact} />
      <Address infos={shippingInfo} />
      <InfoMenu title="배송방법" text={shippingInfo.method} />
      <InfoMenu title="배송메모" text={shippingInfo.req} />
    </ShippingBox>
  );
};

const ShippingBox = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border: ${props => `1px solid ${props.theme.borderColor}`};
  background-color: ${props => props.theme.bgColor};
  @media (max-width: 650px) {
    width: 100%;
  }
  @media (min-width: 650px) and (max-width: 800px) {
    width: 80%;
  }
  @media (min-width: 800px) and (max-width: 1180px) {
    width: 60%;
  }
`;

export default Shipping;
