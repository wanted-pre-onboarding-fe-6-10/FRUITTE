import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BreadcrumbHeader from './components/BreadcrumbHeader';
import GoodsDetailTab from './components/GoodsDetail/GoodsDetailTab';
import GoodsTop from './components/GoodsTop/GoodsTop';

const ProductDetail = () => {
  const { idx } = useParams();
  const [data, setData] = useState();

  // TODO localStorage scroll position caching

  useEffect(() => {
    const getData = async () => {
      const { products_list } = await fetch('/data.json').then(res => res.json());
      // TODO id로 상품 정보 받아오게끔 수정
      setData(products_list[idx - 1]);
    };

    getData();
  }, [idx]);

  return (
    <Container>
      {data ? (
        <>
          <BreadcrumbHeader />
          <GoodsTop data={data} />
          <GoodsDetailTab />
        </>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  height: 100%;
  margin: 0 auto;
  padding: 20px 16px;
  grid-row-gap: 20px;
  width: 100%;
  max-width: 1000px;
  justify-items: center;
  justify-self: center;
`;

export default ProductDetail;
