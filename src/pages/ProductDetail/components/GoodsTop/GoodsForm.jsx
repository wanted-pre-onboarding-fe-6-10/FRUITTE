import { Button } from '@mui/material';
import styled from 'styled-components';

const GoodsForm = ({ data }) => {
  return (
    <Wrapper>
      <GoodsName>{data.title}</GoodsName>
      <Labels>{data.status.map((item, idx) => {})}</Labels>
      <Row>
        <DiscountPrice>{data.discount}</DiscountPrice>
        <Price>{data.price}</Price>
      </Row>
      <Summary>{data.description}</Summary>
      <Info>원산지: {data.origin}</Info>
      <Info>배송 방법: {data.delivery_method}</Info>
      <Info>배송비: {data.delivery_fee}</Info>
      <Info>배송 안내: {data.delivery_announcement}</Info>
      <Dropdown />
      <ButtonWrapper>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const GoodsName = styled.div``;

const Labels = styled.div``;

const Row = styled.div``;

const DiscountPrice = styled.div``;

const Price = styled.div``;

const Summary = styled.div``;

const Info = styled.div``;

const Dropdown = styled.div``;

const ButtonWrapper = styled.div``;

export default GoodsForm;
