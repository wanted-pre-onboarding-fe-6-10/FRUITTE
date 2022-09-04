import { Button, InputLabel, MenuItem, Select } from '@mui/material';
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

  const handleRemoveSelectedItem = idx => {
    alert('상품 제거');
    const renewList = selectedItems;
    renewList.splice(idx, 1);
    //// setSelectedItems(renewList);
    //? 이렇게 해야지만 rerender가 일어나는 이유는?
    setSelectedItems([...renewList]);
  };

  return (
    <Wrapper>
      <GoodsName>{data.title}</GoodsName>
      <BadgeWrapper>
        {data.status.isDiscount ? <SaleBadge>SALE</SaleBadge> : null}
        {data.status.isBest ? <BestBadge>BEST</BestBadge> : null}
        {data.status.isPending ? <PendingBadge>판매대기</PendingBadge> : null}
        {data.status.isRecommend ? <RecommendBadge>MD</RecommendBadge> : null}
        {data.status.isSoldout ? <SoldoutBadge>SOLDOUT</SoldoutBadge> : null}
        {/* <Badge>{data.status.map((item, idx) => {})}</Badge> */}
      </BadgeWrapper>
      <Row>
        <DiscountPrice>{data.discount}원</DiscountPrice>
        <Price>{data.price}원</Price>
      </Row>
      <Divider />
      <Summary>
        {data.description.map(item => (
          <>
            {item}
            <br />
          </>
        ))}
      </Summary>
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
              <SelectionWrapperRow>
                <SelectedItemOption>{item.option}</SelectedItemOption>
                <SelectedItemResetButton
                  onClick={() => {
                    handleRemoveSelectedItem(idx);
                  }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>{' '}
                </SelectedItemResetButton>
              </SelectionWrapperRow>
              <DottedDivider />
              <SelectionWrapperRow>
                <SelectedItemQuantitySelector />
                <SelectedItemPrice>{item.priceSum}원</SelectedItemPrice>
              </SelectionWrapperRow>
            </SelectedItem>
          ))}
          <SelectionWrapperRow>
            <div>총 상품금액({selectedItems.reduce((sum, curr) => sum + curr.quantity, 0)}개)</div>
            <TotalPrice>{selectedItems.reduce((sum, curr) => sum + curr.priceSum, 0)}원</TotalPrice>
          </SelectionWrapperRow>
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

const Wrapper = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Divider = styled.hr``;

const GoodsName = styled.h3``;

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

/* Badges */
const Badge = styled.div`
  padding: 5px;
  font-size: small;
  text-transform: capitalize;
  word-break: keep-all;
  align-self: center;
`;

const SaleBadge = styled(Badge)`
  background-color: ${props => props.theme.highlightColor};
  color: ${props => props.theme.bgColor};
`;

const BestBadge = styled(Badge)`
  color: ${props => props.theme.highlightColor};
  box-shadow: 0 0 0 1px ${props => props.theme.borderColor} inset;
`;

const PendingBadge = styled(Badge)`
  box-shadow: 0 0 0 1px ${props => props.theme.borderColor} inset;
`;

const RecommendBadge = styled(Badge)`
  box-shadow: 0 0 0 1px ${props => props.theme.borderColor} inset;
`;

const SoldoutBadge = styled(Badge)`
  background-color: ${props => props.theme.soldoutBoxColor};
  color: ${props => props.theme.bgColor};
`;

const DiscountPrice = styled.div`
  color: ${props => props.theme.ownColor};
  font-weight: bold;
  font-size: large;
`;

const Price = styled.div`
  color: ${props => props.theme.lightTextColor};
  font-size: small;
  text-decoration: line-through;
  padding-left: 4px;
`;

const Summary = styled.summary`
  color: ${props => props.theme.subTextColor};
  font-size: medium;
`;

const Info = styled.div`
  color: ${props => props.theme.textColor};
  font-size: small;
`;

const ButtonWrapper = styled.div``;

const NaverPayModule = styled.div``;

const SelectionWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.textColor};
  font-size: small;
`;

const SelectedItem = styled.div`
  background-color: ${props => props.theme.subBgColor};
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: stretch;
`;

const SelectedItemOption = styled.div`
  font-size: small;
`;

const SelectedItemResetButton = styled.svg`
  &:hover {
    fill: red;
  }
`;

const DottedDivider = styled.hr`
  border: 0;
  border-bottom: 1px dashed #ccc;
  background: #999;
`;

const SelectedItemPrice = styled.div``;

const SelectedItemQuantitySelector = styled.div``;

const TotalPrice = styled.div`
  font-size: medium;
`;

export default GoodsForm;
