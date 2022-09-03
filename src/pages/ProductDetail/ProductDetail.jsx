import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import BreadcrumbHeader from './components/BreadcrumbHeader';
import GoodsDetailTab from './components/GoodsDetail/GoodsDetailTab';
import GoodsTop from './components/GoodsTop/GoodsTop';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const idx = searchParams.get('idx');

  // TODO localStorage scroll position caching

  // TODO anchor with URL

  return (
    <Container>
      {idx}
      <BreadcrumbHeader />
      <GoodsTop />
      <GoodsDetailTab />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  background-color: ${props => props.theme.bgColor};
`;

export default ProductDetail;
