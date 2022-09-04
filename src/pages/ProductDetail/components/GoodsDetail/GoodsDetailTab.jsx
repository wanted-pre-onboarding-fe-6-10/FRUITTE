import { useState } from 'react';
import styled from 'styled-components';
import GoodsInfo from './GoodsInfo';
import GoodsQna from './GoodsQna';
import GoodsReview from './GoodsReview';

const GoodsDetailTab = () => {
  const [focus, setFocus] = useState(0);

  return (
    <Box>
      {/* <Tabs>
        <Tab onClick={() => setFocus(0)}>상세정보</Tab>
        <Tab onClick={() => setFocus(1)}>구매평({})</Tab>
        <Tab onClick={() => setFocus(2)}>Q&A({})</Tab>
      </Tabs>
      {focus === 0 ? <GoodsInfo /> : focus === 1 ? <GoodsReview /> : <GoodsQna />} */}

      {/* 스크롤하면 그 element로 이동: 참고한 링크 - https://stackoverflow.com/a/50006901/19885276 */}
      <Tabs>
        <Tab href="#prod_detail_detail">상세정보</Tab>
        <Tab href="#prod_detail_review">구매평({})</Tab>
        <Tab href="#prod_detail_qna">Q&A({})</Tab>
        {/* <Tab onClick={() => navigate({ path: '/#prod_detail_review', search: '?idx=123' })}> */}
      </Tabs>
      <GoodsInfo />
      <GoodsReview />
      <GoodsQna />
    </Box>
  );
};

const Box = styled.div``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

const Tab = styled.a`
  text-decoration: solid;
  color: red;
`;

export default GoodsDetailTab;
