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
        <ActiveButton active={isDiscount} size={'medium'} onClick={onSale}>
          설정함
        </ActiveButton>
        <ActiveButton active={!isDiscount} size={'medium'} onClick={onSale}>
          설정안함
        </ActiveButton>
      </RegisterContent>
      <RegisterContent title={'매진'}>
        <ActiveButton active={isSoldout} size={'medium'} onClick={onSoldout}>
          설정함
        </ActiveButton>
        <ActiveButton active={!isSoldout} size={'medium'} onClick={onSoldout}>
          설정안함
        </ActiveButton>
      </RegisterContent>
      <RegisterContent title={'추천'}>
        <ActiveButton active={isRecommend} size={'medium'} onClick={onRecommend}>
          설정함
        </ActiveButton>
        <ActiveButton active={!isRecommend} size={'medium'} onClick={onRecommend}>
          설정안함
        </ActiveButton>
      </RegisterContent>
      <RegisterContent title={'Best'}>
        <ActiveButton active={isBest} size={'medium'} onClick={onBest}>
          설정함
        </ActiveButton>
        <ActiveButton active={!isBest} size={'medium'} onClick={onBest}>
          설정안함
        </ActiveButton>
      </RegisterContent>
      <RegisterContent title={'대기'}>
        <ActiveButton active={isPending} size={'medium'} onClick={onPending}>
          설정함
        </ActiveButton>
        <ActiveButton active={!isPending} size={'medium'} onClick={onPending}>
          설정안함
        </ActiveButton>
      </RegisterContent>
    </RegisterBox>
  );
};

const ActiveButton = styled(Button)`
  background-color: ${props => (props.active ? props.theme.ownColor : props.theme.bgColor)};
  color: ${props => (props.active ? props.theme.bgColor : props.theme.textColor)};
  font-size: 14px;
  border-color: ${props => (props.active ? props.theme.textColor : props.theme.textColor)};
  &:hover {
    background-color: ${props => (props.active ? props.theme.ownColorHover : props.theme.ownColor)};
    color: ${props => props.theme.bgColor};
  }
`;

export default RegisterStatus;
