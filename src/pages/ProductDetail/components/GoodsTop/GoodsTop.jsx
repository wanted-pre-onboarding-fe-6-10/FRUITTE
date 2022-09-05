import styled from 'styled-components';
import GoodsForm from './GoodsForm';
import GoodsImages from './GoodsImages';

const GoodsTop = ({ data }) => {
  return (
    <Box>
      <GoodsImages imageList={data.img} />
      <GoodsForm data={data} />
    </Box>
  );
};

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-column-gap: 50px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default GoodsTop;
