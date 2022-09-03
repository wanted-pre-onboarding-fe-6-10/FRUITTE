import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import BreadcrumbHeader from './components/BreadcrumbHeader';
import GoodsDetailTab from './components/GoodsDetail/GoodsDetailTab';
import GoodsTop from './components/GoodsTop/GoodsTop';

const MOCK_DATA = {
  id: '31',
  img: [
    'https://cdn.imweb.me/thumbnail/20220714/e43ccd3949677.jpeg',
    'https://cdn.imweb.me/thumbnail/20220714/e43ccd3949677.jpeg',
    'https://cdn.imweb.me/thumbnail/20220714/e43ccd3949677.jpeg',
    'https://cdn.imweb.me/thumbnail/20220714/e43ccd3949677.jpeg',
  ],
  title: '반려동물과자 아기과자 동결건조 사과칩 50g (5봉지, 10봉지 묶음상품)',
  price: 80000,
  discount: 35000,
  description: [
    '달달함과 아삭함이 살아있는 껍찔째 먹는 동결건조 사과칩',
    '영양만점 간식으로 언제 어디서나 모두의 입맛에 딱!',
    'NO 제초제, NO 화학비료, NO 불필요한 잎따기를 철저히 지킨',
    '사과의 고장 충남 예산의 건강한 3무 사과를 껍찔째 즐겨보세요!',
  ],
  origin: '충청남도 예산',
  delivery_method: '택배',
  delivery_announcement: '무료 | 도서산간 배송비 추가',
  delivery_fee: '0',
  options: [
    { productName: '5봉지', price: 35000, quantity: 23 },
    { productName: '10봉지', price: 65000, quantity: 99 },
  ],
  status: {
    isSoldout: false,
    isDiscount: true,
    isRecommend: true,
    isBest: false,
    isPending: false,
  },
  isShow: true,
};

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  // searchParam 대신 param으로 리팩토링 (anchoring 때문에)
  const { idx } = useParams();
  // const idx = searchParams.get('idx');
  const [data, setData] = useState(MOCK_DATA);

  // TODO localStorage scroll position caching

  // TODO anchor with URL

  useEffect(() => {
    const data = fetch('/data.json');
    console.log(data);
  });

  return (
    <Container>
      <BreadcrumbHeader />
      <GoodsTop data={data} />
      <GoodsDetailTab />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  background-color: ${props => props.theme.subBgColor};
  height: 100%;
  padding: 10px 100px;
`;

export default ProductDetail;
