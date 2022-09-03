import { useState } from 'react';
import styled from 'styled-components';
import GoodsInfo from './GoodsInfo';
import GoodsQna from './GoodsQna';
import GoodsReview from './GoodsReview';

const GoodsDetailTab = () => {
  const [focus, setFocus] = useState(0);

  return (
    <Box>
      <Tabs>
        <Tab>상세정보</Tab>
        <Tab>구매평({})</Tab>
        <Tab>Q&A({})</Tab>
      </Tabs>
      {focus === 0 ? <GoodsInfo /> : focus === 1 ? <GoodsReview /> : <GoodsQna />}
    </Box>
  );
};

const Box = styled.div``;
const Tabs = styled.div``;
const Tab = styled.div``;

export default GoodsDetailTab;
