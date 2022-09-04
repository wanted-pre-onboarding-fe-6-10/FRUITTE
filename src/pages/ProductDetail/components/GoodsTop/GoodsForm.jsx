import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

const GoodsForm = ({ data }) => {
  const [option, setOption] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = event => {
    setOption(event.target.value);
    for (let i of selectedItems) {
      if (i.option === event.target.value.productName) {
        alert('이미 선택한 옵션입니다.');
        return;
      }
    }
    const newSelectedItem = {
      option: event.target.value.productName,
      quantity: 1,
      priceSum: event.target.value.price,
    };
    setSelectedItems([...selectedItems, newSelectedItem]);
  };

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
      {/* 왜 이부분이 상품마다 label이 다른지 분석 필요. 상품 등록 페이지에도 반영 필요 */}
      <InputLabel id="select-purchase-option">필수선택 *</InputLabel>
      <Select
        labelId="select-purchase-option"
        id="select-purchase-selector"
        value={option}
        // label={`${data.title}(필수)`}
        onChange={e => handleSelect(e)}
        style={{ width: '80%' }}
      >
        {data.options.map((item, idx) => (
          <MenuItem key={idx} value={item}>
            {item.productName}
            <br />
            {`${item.price}원`}
          </MenuItem>
        ))}
      </Select>

      {selectedItems.length > 0 ? (
        <>
          {selectedItems.map((item, idx) => (
            <SelectedItem key={idx}>
              <Row>
                <SelectedItemOption>{item.option}</SelectedItemOption>
                <SelectedItemResetButton onClick={() => {}}>X</SelectedItemResetButton>
              </Row>
              <Row>
                <SelectedItemQuantitySelector />
                <SelectedItemPrice>{item.priceSum}원</SelectedItemPrice>
              </Row>
            </SelectedItem>
          ))}
          <Row>
            <div>총 상품금액({selectedItems.reduce((sum, curr) => sum + curr.quantity, 0)}개)</div>
            <TotalPrice>{selectedItems.reduce((sum, curr) => sum + curr.priceSum, 0)}원</TotalPrice>
          </Row>
        </>
      ) : null}

      <ButtonWrapper>
        <Button>구매하기</Button>
        <Button>장바구니</Button>
        <Button>하트아이콘(개수){}</Button>
      </ButtonWrapper>

      <NaverPayModule />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const GoodsName = styled.div``;

const Badge = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DiscountPrice = styled.div``;

const Price = styled.div``;

const Summary = styled.div``;

const Info = styled.div``;

const ButtonWrapper = styled.div``;

const NaverPayModule = styled.div``;

const SelectedItem = styled.div`
  background-color: ${props => props.theme.subBgColor};
  display: flex;
  flex-direction: column;
`;

const SelectedItemOption = styled.div``;

const SelectedItemResetButton = styled.div``;

const SelectedItemPrice = styled.div``;

const SelectedItemQuantitySelector = styled.div``;

const TotalPrice = styled.div``;

export default GoodsForm;
