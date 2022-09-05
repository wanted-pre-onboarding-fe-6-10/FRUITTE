import styled from 'styled-components';
import Button from '../../../../components/Button';
import { lightTheme } from '../../../../styles/theme';

const GoodsReview = () => {
  return (
    <Wrapper id="prod_detail_review">
      <SubTitle>
        구매평 <span>(0)</span>
      </SubTitle>
      <HelperText>상품을 구매하신 분들이 작성한 리뷰입니다.</HelperText>
      <SubmitButton>구매평 작성</SubmitButton>
      <List>
        {/* <ListContent>ㅇㅇ</ListContent>
        <ListInfo>
          <span>이름</span>
          <span>날짜</span>
        </ListInfo> */}
        등록된 구매평이 없습니다.
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const SubTitle = styled.div`
  margin-bottom: 0.8rem;

  span {
    color: ${lightTheme.ownColor};
  }
`;

const HelperText = styled.div`
  color: ${lightTheme.lightTextColor};
  font-size: 14px;
  margin-bottom: 0.8rem;
`;

const SubmitButton = styled(Button)`
  outline: none;
  cursor: pointer;
  background-color: ${lightTheme.ownColor};
  color: white;
  border: none;
  font-weight: 500;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${lightTheme.ownColorHover};
  }
`;
const List = styled.div`
  width: 100%;
  /* display: flex;
  border-bottom: 1px solid ${lightTheme.borderColor}; */
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${lightTheme.lightTextColor};
  border-top: 1px solid ${lightTheme.borderColor};
`;

// const ListContent = styled.div`
//   width: 100%;
//   padding: 1rem;
//   flex: 1;
// `;

// const ListInfo = styled.div``;

export default GoodsReview;
