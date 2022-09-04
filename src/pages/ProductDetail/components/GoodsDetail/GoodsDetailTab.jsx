import { useState } from 'react';
import styled from 'styled-components';
import GoodsInfo from './GoodsInfo';
import GoodsQna from './GoodsQna';
import GoodsReview from './GoodsReview';

const GoodsDetailTab = () => {
  const [focus, setFocus] = useState(0);

  return (
    <Box>
      {/* 스크롤하면 그 element로 이동: 참고한 링크 - https://stackoverflow.com/a/50006901/19885276 */}
      <Tabs>
        <Tab href="#prod_detail_detail" focused={focus === 0} onClick={() => setFocus(0)}>
          상세정보
        </Tab>
        <Tab href="#prod_detail_review" focused={focus === 1} onClick={() => setFocus(1)}>
          구매평<CountIndex>({'0'})</CountIndex>
        </Tab>
        <Tab href="#prod_detail_qna" focused={focus === 2} onClick={() => setFocus(2)}>
          Q&A<CountIndex>({'todo'})</CountIndex>
        </Tab>
        {/* <Tab onClick={() => navigate({ path: '/#prod_detail_review', search: '?idx=123' })}> */}
      </Tabs>
      <GoodsInfo />
      <GoodsReview />
      <GoodsQna />
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

const Tab = styled.a`
  text-decoration: solid;
  color: ${props => props.theme.textColor};
  border: 1px;
  border-style: solid;
  border-color: ${props => props.theme.borderColor};
  font-size: small;
  font-weight: 300;
  width: 100%;
  text-align: center;
  padding: 8px 0;

  &:hover {
    background-color: ${props => props.theme.subBgColor};
  }

  ${props =>
    props.focused &&
    ` font-weight: 600;
      background-color: ${props.theme.subBgColor};
    `}
`;

const CountIndex = styled.span`
  color: ${props => props.theme.ownColor};
`;

export default GoodsDetailTab;
