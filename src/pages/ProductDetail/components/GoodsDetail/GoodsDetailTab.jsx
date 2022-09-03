import { useState } from 'react';
import { useHref, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GoodsInfo from './GoodsInfo';
import GoodsQna from './GoodsQna';
import GoodsReview from './GoodsReview';

const GoodsDetailTab = () => {
  const [focus, setFocus] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      {/* <Tabs>
        <Tab onClick={() => setFocus(0)}>상세정보</Tab>
        <Tab onClick={() => setFocus(1)}>구매평({})</Tab>
        <Tab onClick={() => setFocus(2)}>Q&A({})</Tab>
      </Tabs>
      {focus === 0 ? <GoodsInfo /> : focus === 1 ? <GoodsReview /> : <GoodsQna />} */}

      <Tabs>
        <Tab onClick={() => navigate('#prod_detail_detail')}>상세정보</Tab>
        {/* <Tab onClick={() => navigate({ path: '/#prod_detail_review', search: '?idx=123' })}> */}
        <Tab onClick={() => navigate('#prod_detail_review')}>구매평({})</Tab>
        <Tab onClick={() => navigate('#prod_detail_qna')}>Q&A({})</Tab>
      </Tabs>
    </Box>
  );
};

const Box = styled.div``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div``;

export default GoodsDetailTab;
