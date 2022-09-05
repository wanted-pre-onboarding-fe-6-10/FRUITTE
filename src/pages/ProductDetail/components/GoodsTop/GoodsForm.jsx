import { InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import addComma from '../../../../utils/addComma';
import SelectedItemQuantitySelector from './SelectedItemQuantitySelector';

const GoodsForm = ({ data }) => {
  const [option, setOption] = useState();
  const [triggerQuantityRefresh, setTriggerQuantityRefresh] = useState(true);

  const [selectedItems, setSelectedItems] = useState(
    data.options.length === 1
      ? [
          {
            opIdx: 0,
            option: data.productName,
            quantity: 1,
            priceSum: data.price,
          },
        ]
      : []
  );
  const navigate = useNavigate();

  const handleSelect = event => {
    setOption(event.target.value);
    for (let i of selectedItems) {
      if (i.option === event.target.value.productName) {
        alert('이미 선택한 옵션입니다.');
        return;
      }
    }
    if (event.target.value.quantity < 1) {
      alert('품절된 상품입니다.');
      return;
    }
    const newSelectedItem = {
      opIdx: event.target.value.opIdx,
      option: event.target.value.productName,
      quantity: 1,
      priceSum: event.target.value.price,
    };
    setSelectedItems([...selectedItems, newSelectedItem]);
  };

  const handleSelectQuantity = (opIdx, newQuantity) => {
    if (newQuantity < 1) {
      alert('최소 수량은 1개입니다');
      return;
    } else if (newQuantity > data.options[opIdx].quantity) {
      alert('수량이 부족합니다.');
      return;
    }
    selectedItems[opIdx].quantity = newQuantity;

    setSelectedItems(selectedItems);
    setTriggerQuantityRefresh(!triggerQuantityRefresh);
  };

  const handleRemoveSelectedItem = idx => {
    alert('상품 제거');
    const renewList = selectedItems;
    renewList.splice(idx, 1);
    //// setSelectedItems(renewList);
    //? 이렇게 해야지만 rerender가 일어나는 이유는?
    setSelectedItems([...renewList]);
  };

  const handlePurchaseButtonClick = () => {
    sessionStorage.setItem(
      `PROD_SELECTED_OPTION_${data.id}`,
      JSON.stringify({
        prodIdx: data.id,
        options: selectedItems,
        thumbnail: data.img[0],
        delivery_fee: 0,
      })
    );
    navigate('/order');
  };

  return (
    <Wrapper>
      <Row>
        <GoodsName>{data.title}</GoodsName>
        <BadgeWrapper>
          {/* {data.status.isDiscount && <Status discount>SALE</Status>}
          {data.status.isBest && <Status best>BEST</Status>}
          {data.status.isPending && <Status commonStatus>MD</Status>}
          {data.status.isRecommend && <Status commonStatus>판매대기</Status>}
          {data.status.isSoldout && <Status sold>SOLDOUT</Status>} */}
          {data.status.isDiscount ? <SaleBadge>SALE</SaleBadge> : null}
          {data.status.isBest ? <BestBadge>BEST</BestBadge> : null}
          {!data.status.isPending ? <PendingBadge>판매대기</PendingBadge> : null}
          {!data.status.isRecommend ? <RecommendBadge>MD</RecommendBadge> : null}
          {data.status.isSoldout ? <SoldoutBadge>SOLDOUT</SoldoutBadge> : null}
          {/* <Badge>{data.status.map((item, idx) => {})}</Badge> */}
        </BadgeWrapper>
      </Row>
      <Row>
        <DiscountPrice>{addComma(data.discount)}원</DiscountPrice>
        <Price>{addComma(data.price)}원</Price>
      </Row>
      <Divider />
      <Summary>
        {data.description.map((item, idx) => (
          <p key={idx}>
            {item}
            <br />
          </p>
        ))}
      </Summary>
      <Info>
        <InfoLabel>원산지</InfoLabel>
        {data.origin}
      </Info>
      <Info>
        <InfoLabel>배송 방법</InfoLabel>
        {data.delivery_method}
      </Info>
      <Info>
        {data.delivery_fee > 0 ? (
          <>
            <InfoLabel>배송비</InfoLabel>
            {data.delivery_fee}원
          </>
        ) : null}
      </Info>
      <Info>
        <InfoLabel>배송 안내</InfoLabel>
        {data.delivery_announcement}
      </Info>
      {/* 왜 이부분이 상품마다 label이 다른지 분석 필요. 상품 등록 페이지에도 반영 필요 */}

      {data.options.length > 1 ? (
        <>
          <Divider />
          <InputLabel id="select-purchase-option">필수선택 *</InputLabel>
          <Select
            labelId="select-purchase-option"
            id="select-purchase-selector"
            value={option}
            label={`${data.title}(필수)`}
            onChange={e => handleSelect(e)}
            style={{ width: '100%', fontSize: '10' }}
          >
            {data.options.map((item, idx) => {
              item.opIdx = idx;
              return (
                <MenuItem key={idx} value={item}>
                  <OptionMenuItemRow soldout={item.quantity < 1}>
                    {item.productName}
                    <br />
                    {`${item.price}원`}
                    {item.quantity < 1 ? '(품절)' : null}
                  </OptionMenuItemRow>
                </MenuItem>
              );
            })}
          </Select>
          {selectedItems.map((item, idx) => (
            <SelectedItem key={idx}>
              <SelectedItemRow>
                <SelectedItemOption>{item.option}</SelectedItemOption>
                <SelectedItemResetButton
                  onClick={() => {
                    handleRemoveSelectedItem(idx);
                  }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z" />
                </SelectedItemResetButton>
              </SelectedItemRow>
              <DottedDivider />
              <SelectedItemRow triggerQuantityRefresh>
                <SelectedItemQuantitySelector
                  opIdx={idx}
                  state={item.quantity}
                  setQuantity={handleSelectQuantity}
                />
                <SelectedItemPrice>{addComma(item.priceSum)}원</SelectedItemPrice>
              </SelectedItemRow>
            </SelectedItem>
          ))}
          <TotalPriceRow>
            <div>총 상품금액({selectedItems.reduce((sum, curr) => sum + curr.quantity, 0)}개)</div>
            <TotalPrice>
              {addComma(selectedItems.reduce((sum, curr) => sum + curr.priceSum, 0))}원
            </TotalPrice>
          </TotalPriceRow>
        </>
      ) : (
        <>
          <SelectedItem>
            <SelectedItemOption>수량</SelectedItemOption>
            <DottedDivider />
            <SelectedItemRow triggerQuantityRefresh>
              <SelectedItemQuantitySelector
                opIdx={0}
                state={selectedItems[0].quantity}
                setQuantity={handleSelectQuantity}
              />
              <SelectedItemPrice>{addComma(selectedItems[0].priceSum)}원</SelectedItemPrice>
            </SelectedItemRow>
          </SelectedItem>
          <TotalPriceRow>
            <div>총 상품금액({selectedItems.reduce((sum, curr) => sum + curr.quantity, 0)}개)</div>
            <TotalPrice>
              {addComma(selectedItems.reduce((sum, curr) => sum + curr.priceSum, 0))}원
            </TotalPrice>
          </TotalPriceRow>
        </>
      )}

      <ButtonWrapper>
        <Button
          color="black"
          size="large"
          rounding
          style={{ flexGrow: 1 }}
          onClick={handlePurchaseButtonClick}
        >
          구매하기
        </Button>
        <Button color="black" size="large" outline rounding style={{ flexGrow: 1 }}>
          장바구니
        </Button>
        <Button color="black" size="large" outline rounding style={{ flexGrow: 1 }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61" />
          </svg>
          {' 0'}
        </Button>
      </ButtonWrapper>

      {data.status.isPending ? (
        <PendingMessage>이 상품은 현재 판매기간이 아닙니다.</PendingMessage>
      ) : (
        <NaverPayModule />
      )}
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
  margin-bottom: 0.5rem;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${props => props.theme.subBgColor};
  margin: 1rem 0;
`;

const GoodsName = styled.h2`
  font-size: larger;
`;

/* Badges */
const BadgeWrapper = styled.span`
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  /* width: 100%; */
`;

const Badge = styled.div`
  padding: 4px 8px;
  font-size: x-small;
  text-transform: capitalize;
  word-break: keep-all;
  align-self: center;
  & + & {
    margin-left: 0.2rem;
  }
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
  /* font-weight: bold; */
  font-size: large;
`;

const Price = styled.div`
  color: ${props => props.theme.lightTextColor};
  font-size: small;
  text-decoration: line-through;
  padding-left: 8px;
`;

const Summary = styled.summary`
  width: 90%;
  color: ${props => props.theme.subTextColor};
  font-size: medium;
  font-weight: 100;
  padding: 10px 0px;
  line-height: normal;
`;

const Info = styled.div`
  color: ${props => props.theme.textColor};
  font-size: small;
  margin-top: 4px;
`;

const InfoLabel = styled.span`
  color: ${props => props.theme.textColor};
  font-weight: 600;
  margin-right: 0.5rem;
`;

const OptionMenuItemRow = styled.div`
  ${props =>
    props.soldout &&
    ` text-decoration: line-through;
      color: ${props.theme.lightTextColor};
    `}
`;

const SelectedItem = styled.div`
  background-color: ${props => props.theme.lightBgColor};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 8px;
`;

const SelectedItemRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.textColor};
  font-size: small;
`;

const DottedDivider = styled.hr`
  width: 100%;
  border: 0;
  border-bottom: 1px dashed #e0e0e0;
  margin: 10px 0px;
`;

const SelectedItemOption = styled.div`
  font-size: small;
`;

const SelectedItemResetButton = styled.svg`
  fill: ${props => props.theme.lightTextColor};
  &:hover {
    fill: ${props => props.theme.ownColor};
  }
`;

const SelectedItemPrice = styled.div``;

// const SelectedItemQuantitySelector = styled.div``;

const TotalPriceRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.subTextColor};
  font-size: medium;
  font-weight: 300;
  margin: 2rem 0;
  padding: 0 0.5rem;
`;

const TotalPrice = styled.div`
  color: ${props => props.theme.textColor};
  font-size: large;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

const PendingMessage = styled.div`
  background-color: ${props => props.theme.lightBgColor};
  color: ${props => props.theme.subTextColor};
  font-size: small;
  font-weight: 300;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

const NaverPayModule = styled.div``;

export default GoodsForm;
