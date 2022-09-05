// 판매 상태 정보 입력 컴포넌트 => 두개의 버튼으로 설정하거나 안하거나로 구분하면 될듯

import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import RegisterBox from './common/RegisterBox';
import RegisterContent from './common/RegisterContent';

const RegisterStatus = ({ data, setData }) => {
  const [isDiscount, setIsDiscount] = useState(false);
  const [isSoldout, setIsSoldout] = useState(false);
  const [isRecommend, setIsRecommend] = useState(false);
  const [isBest, setIsBest] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const onSale = () => {
    setIsDiscount(!isDiscount);
    setData({ ...data, status: { ...data.status, isDiscount: !isDiscount } });
  };
  const onSoldout = () => {
    setIsSoldout(!isSoldout);
    setData({ ...data, status: { ...data.status, isSoldout: !isSoldout } });
  };
  const onRecommend = () => {
    setIsRecommend(!isRecommend);
    setData({ ...data, status: { ...data.status, isRecommend: !isRecommend } });
  };
  const onBest = () => {
    setIsBest(!isBest);
    setData({ ...data, status: { ...data.status, isBest: !isBest } });
  };
  const onPending = () => {
    setIsPending(!isPending);
    setData({ ...data, status: { ...data.status, isPending: !isPending } });
  };

  return (
    <RegisterBox title={'상품상태'}>
      <RegisterContent title={'할인'}>
        <SaleButton active={isDiscount} size={'medium'} onClick={onSale}>
          설정함
        </SaleButton>
        <SaleButton active={!isDiscount} size={'medium'} onClick={onSale}>
          설정안함
        </SaleButton>
      </RegisterContent>
      <RegisterContent title={'매진'}>
        <SoldoutButton active={isSoldout} size={'medium'} onClick={onSoldout}>
          설정함
        </SoldoutButton>
        <SoldoutButton active={!isSoldout} size={'medium'} onClick={onSoldout}>
          설정안함
        </SoldoutButton>
      </RegisterContent>
      <RegisterContent title={'추천'}>
        <RecommendButton active={isRecommend} size={'medium'} onClick={onRecommend}>
          설정함
        </RecommendButton>
        <RecommendButton active={!isRecommend} size={'medium'} onClick={onRecommend}>
          설정안함
        </RecommendButton>
      </RegisterContent>
      <RegisterContent title={'Best'}>
        <BestButton active={isBest} size={'medium'} onClick={onBest}>
          설정함
        </BestButton>
        <BestButton active={!isBest} size={'medium'} onClick={onBest}>
          설정안함
        </BestButton>
      </RegisterContent>
      <RegisterContent title={'대기'}>
        <PendingButton active={isPending} size={'medium'} onClick={onPending}>
          설정함
        </PendingButton>
        <PendingButton active={!isPending} size={'medium'} onClick={onPending}>
          설정안함
        </PendingButton>
        {/* <RegisterButton size="medium">hi</RegisterButton> */}
      </RegisterContent>
    </RegisterBox>
  );
};

const SaleButton = styled(Button)`
  background-color: ${props => (props.active ? props.theme.ownColor : props.theme.bgColor)};
  color: ${props => (props.active ? props.theme.bgColor : props.theme.textColor)};
  font-size: 14px;
  border-color: ${props => (props.active ? props.theme.textColor : props.theme.textColor)};
  &:hover {
    background-color: ${props => (props.active ? props.theme.ownColorHover : props.theme.ownColor)};
    color: ${props => props.theme.bgColor};
  }
`;
const SoldoutButton = styled(SaleButton)``;
const RecommendButton = styled(SaleButton)``;
const BestButton = styled(SaleButton)``;
const PendingButton = styled(SaleButton)``;

export default RegisterStatus;
