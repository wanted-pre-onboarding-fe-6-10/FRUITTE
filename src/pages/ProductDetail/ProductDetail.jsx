import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import BreadcrumbHeader from './components/BreadcrumbHeader';
import GoodsDetailTab from './components/GoodsDetail/GoodsDetailTab';
import GoodsTop from './components/GoodsTop/GoodsTop';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const idx = searchParams.get('idx');

  // TODO localStorage scroll position caching

  // TODO anchor with URL

  useEffect(() => {
    const data = fetch('/data.json');
    console.log(data);
  });

  return (
    <Container>
      <BreadcrumbHeader />
      <GoodsTop data={data} />
      <GoodsDetailTab />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  background-color: ${props => props.theme.subBgColor};
  height: 100%;
  padding: 10px 100px;
`;

export default ProductDetail;
