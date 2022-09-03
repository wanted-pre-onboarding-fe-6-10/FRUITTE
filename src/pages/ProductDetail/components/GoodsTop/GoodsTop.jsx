import styled from 'styled-components';
import GoodsForm from './GoodsForm';
import GoodsImages from './GoodsImages';

const GoodsTop = () => {
  return (
    <Box>
      <GoodsImages />
      <GoodsForm />
    </Box>
  );
};

const Box = styled.div``;

export default GoodsTop;
