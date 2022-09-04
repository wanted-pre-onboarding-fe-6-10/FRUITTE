import InfoMenu from './InfoMenu';

const Address = ({ infos }) => {
  const shippingAddress = infos.postcode + '\n' + infos.address + '\n' + infos.detail;

  return <InfoMenu title="배송주소" text={shippingAddress} />;
};

export default Address;
