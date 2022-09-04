import styled from 'styled-components';

const GoodsInfo = () => {
  return (
    <Wrapper id="prod_detail_detail">
      <InfoImage></InfoImage>
      <Table></Table>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const InfoImage = styled.div`
  height: 2000px;
`;

const Table = styled.table``;

export default GoodsInfo;
