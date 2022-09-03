import { Button } from '@mui/material';
import styled from 'styled-components';

const GoodsForm = ({ data }) => {
  return (
    <Wrapper>
      <GoodsName>{data.title}</GoodsName>
      {/* <Labels>{data.status.map((item, idx) => {})}</Labels> */}
      <Row>
        <DiscountPrice>{data.discount}</DiscountPrice>
        <Price>{data.price}</Price>
      </Row>
      <Summary>{data.description.join(`\n`)}</Summary>
      <Info>
        <b>원산지:</b> {data.origin}
      </Info>
      <Info>
        <b>배송 방법:</b> {data.delivery_method}
      </Info>
      <Info>{data.delivery_fee > 0 ? `배송비: ${data.delivery_fee}` : null}</Info>
      <Info>
        <b>배송 안내:</b> {data.delivery_announcement}
      </Info>
      <Dropdown />
      <ButtonWrapper>
        <Button>구매하기</Button>
        <Button>장바구니</Button>
        <Button>하트아이콘(개수){}</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>네이버wrapper</Button>
        <Button>네이버wrapper</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const GoodsName = styled.div``;

const Labels = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const DiscountPrice = styled.div``;

const Price = styled.div``;

const Summary = styled.div``;

const Info = styled.div``;

const Dropdown = styled.div``;

const ButtonWrapper = styled.div``;

export default GoodsForm;
