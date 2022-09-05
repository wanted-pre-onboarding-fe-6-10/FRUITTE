import styled from 'styled-components';
import Button from '../../../../components/Button';
import { lightTheme } from '../../../../styles/theme';

const GoodsQna = () => {
  return (
    <Wrapper id="prod_detail_qna">
      <SubTitle>
        Q&A <span>({0})</span>
      </SubTitle>
      <HelperText>구매하시려는 상품에 대해 궁금한 점이 있으면 문의주세요</HelperText>
      <SubmitButton rounding>상품문의</SubmitButton>
      <QuestionButton rounding>1:1문의</QuestionButton>
      <List>등록된 문의사항이 없습니다</List>
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
  color: white;
  border: none;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${lightTheme.ownColorHover};
  }
`;

const QuestionButton = styled(Button)`
  outline: none;
  cursor: pointer;
  background-color: ${lightTheme.bgColor};
  color: ${lightTheme.textColor};
  border: 1px solid ${lightTheme.borderColor};
  font-weight: 500;
  padding: 0.5rem 1.5rem;
`;

const List = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${lightTheme.lightTextColor};
  border-top: 1px solid ${lightTheme.borderColor};
`;

export default GoodsQna;
