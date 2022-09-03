import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetail = () => {
  const [searchParams] = useSearchParams();

  return <Container>{searchParams.get('idx')}</Container>;
};

const Container = styled.div`
  display: grid;
  background-color: ${props => props.theme.bgColor};
`;

export default ProductDetail;
