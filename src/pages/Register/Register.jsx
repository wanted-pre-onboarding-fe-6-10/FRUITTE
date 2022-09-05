import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { create } from '../../api/Api';
import Button from '../../components/Button';
import RegisterDescription from './components/RegisterDescription';
import RegisterImage from './components/RegisterImage';
import RegisterInfo from './components/RegisterInfo';
import RegisterOption from './components/RegisterOption';
import RegisterPrice from './components/RegisterPrice';
import RegisterStatus from './components/RegisterStatus';
import RegisterTitle from './components/RegisterTitle';

const Register = () => {
  const [data, setData] = useState({
    // id: '',
    img: [],
    title: '',
    price: 0,
    discount: 0,
    description: '',
    origin: '',
    delivery_method: '택배',
    delivery_announcement: '무료 | 도서산간 배송비 추가',
    delivery_fee: 0,
    options: [],
    status: {
      isSoldout: false,
      isDiscount: false,
      isRecommend: false,
      isBest: false,
      isPending: false,
    },
    isShow: true,
  });
  const onSubmit = e => {
    e.preventDefault();
    if (window.confirm('등록하시겠습니까?')) {
      alert('등록이 완료됐습니다.');
    } else {
      alert('등록이 취소됐습니다.');
    }

    // create(data).then(res => alert('등록이 완료됐습니다.'));
  };

  return (
    <Container>
      <Title>관리자 상품 등록 페이지</Title>
      <RegisterTitle data={data} setData={setData} />
      <RegisterPrice data={data} setData={setData} />
      <RegisterStatus data={data} setData={setData} />
      <RegisterOption data={data} setData={setData} />
      <RegisterImage data={data} setData={setData} />
      <RegisterDescription data={data} setData={setData} />
      <RegisterInfo data={data} setData={setData} />
      <Button size="large" onClick={onSubmit}>
        등록하기
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.subBgColor};
`;
const Title = styled.div`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;

export default Register;
