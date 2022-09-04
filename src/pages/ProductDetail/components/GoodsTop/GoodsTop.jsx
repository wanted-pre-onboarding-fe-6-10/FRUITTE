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
  display: flex;
  flex-direction: row;
  width: 100%;
  /* justify-content: space-around; */
`;

export default GoodsTop;
