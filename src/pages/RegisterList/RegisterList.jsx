import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';
import OptionTr from './components/OptionTr';
import TdEL from './components/TdStyle';

const RegisterList = () => {
  const [productData, setProductData] = useState([]);

  const getRequest = async () => {
    const response = await axios('/data.json');
    setProductData(response.data.products_list);
  };

  // console.log(productData);  // [질문]왜 4번이나 찍히는지?

  useEffect(() => {
    getRequest();
  }, []);

  const onClickDelBtn = clickedId => {
    const isDelete = window.confirm('상품을 삭제하시겠습니까?');
    if (isDelete) {
      setProductData(prev => {
        return prev.filter(data => data.id !== clickedId);
      });
    }
  };

  const onClickShowBtn = clickedId => {
    const isShowCheck = window.confirm('상품을 노출상태를 변경하시겠습니까?');
    if (isShowCheck) {
      setProductData(prev =>
        prev.map(data => {
          if (data.id === clickedId) {
            return { ...data, isShow: !data.isShow };
          }
          return data;
        })
      );
    }
  };

  // 페이지네이션 부분
  let [nowPage, setNowPage] = useState(0);

  const pageBtnClicked = idx => {
    setNowPage(idx);
  };

  const onClickArrow = type => {
    if (type === 'left') {
      setNowPage(prev => {
        return prev - 1 >= 0 ? prev - 1 : 0;
      });
    }

    if (type === 'right') {
      setNowPage(prev => {
        return prev + 1 <= 4 ? prev + 1 : 4;
      });
    }
  };

  const countPerPage = 8;
  const pageNums = Math.ceil(productData.length / countPerPage); // 5
  const pageNumsArr = Array(pageNums).fill(null); // [null,null,null,null,null]

  const FirstPageData = productData.slice(0, 8);

  const [clickedData, setClickedData] = useState(FirstPageData);

  useEffect(() => {
    const pageDataArr = productData.slice(nowPage * 8, nowPage * 8 + 8);
    setClickedData(pageDataArr);
  }, [productData, nowPage]);

  return (
    <Container>
      <table style={{ border: '0.8px solid black', borderSpacing: 0 }}>
        <tbody>
          <tr>
            {TITLES.map((data, idx) => (
              <TableTitle key={idx} width={data.width}>
                {data.title}
              </TableTitle>
            ))}
          </tr>
          {clickedData.map(data => {
            const rowLength = data.options.length ? data.options.length : 1;

            return (
              <>
                <tr key={data.id}>
                  <TdEL rowSpan={rowLength}>
                    <DeleteBtn onClick={() => onClickDelBtn(data.id)}>
                      <HiOutlineTrash />
                      <p>{data.id}</p>
                    </DeleteBtn>
                  </TdEL>
                  <TdEL rowSpan={rowLength}>
                    <TableImg src={data.img[0]} alt={data.title} />
                  </TdEL>
                  <TdEL rowSpan={rowLength} align="left">
                    {data.title}
                  </TdEL>
                  <TdEL align="left">
                    {data.options.length > 0 ? data.options[0].productName : ''}
                  </TdEL>
                  <TdEL>{data.options.length > 0 ? data.options[0].price : data.discount}</TdEL>
                  <TdEL>{data.options.length > 0 ? data.options[0].quantity : 70}</TdEL>
                  <TdEL rowSpan={rowLength}>{data.delivery_method}</TdEL>
                  <TdEL rowSpan={rowLength}>{data.delivery_fee}</TdEL>
                  <TdEL rowSpan={rowLength}>할인 | MD추천 | Best | 준비중</TdEL>
                  <TdEL rowSpan={rowLength}>2022.09.01</TdEL>
                  <TdEL rowSpan={rowLength}>
                    <ShowBtn onClick={() => onClickShowBtn(data.id)} isShow={data.isShow}>
                      {data.isShow ? 'on' : 'off'}
                    </ShowBtn>
                  </TdEL>
                </tr>
                {data.options.length > 0 ? <OptionTr options={data.options} /> : ''}
                {/* [질문] : key값이 있는 부모태그를 만들 수가 없음 */}
              </>
            );
          })}
        </tbody>
      </table>
      <PageButtonWrapper>
        <PageButtons>
          <PageButton onClick={() => onClickArrow('left')}>
            <MdArrowBackIosNew />
          </PageButton>
          {pageNumsArr.map((_, idx) => (
            <PageButton key={idx} onClick={() => pageBtnClicked(idx)}>
              {idx + 1}
            </PageButton>
          ))}
          <PageButton onClick={() => onClickArrow('right')}>
            <MdArrowForwardIos />
          </PageButton>
        </PageButtons>
      </PageButtonWrapper>
    </Container>
  );
};

const TITLES = [
  { title: '삭제', width: 45 },
  { title: '이미지', width: 200 },
  { title: '상품명', width: 300 },
  { title: '상품 옵션', width: 250 },
  { title: '가격(할인가)', width: 120 },
  { title: '재고', width: 90 },
  { title: '배송방법', width: 110 },
  { title: '배송비', width: 110 },
  { title: '상태', width: 230 },
  { title: '마지막 수정일', width: 120 },
  { title: '상품노출', width: 80 },
];

const Container = styled.div`
  margin: 2rem;
  background-color: aliceblue;
`;

const TableTitle = styled.td`
  border: 0.7px solid black;
  vertical-align: middle;
  height: 30px;
  padding-left: 4px;
  text-align: center;
  width: ${prop => prop.width}px;
`;

const TableImg = styled.img`
  width: 160px;
  height: 160px;
`;

const DeleteBtn = styled.button.attrs({ type: 'button' })`
  color: #d40303;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const ShowBtn = styled.button.attrs({ type: 'button' })`
  background-color: ${prop => (prop.isShow ? 'green' : 'gray')};
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

const PageButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const PageButtons = styled.ul`
  display: flex;
`;

const PageButton = styled.button`
  background-color: inherit;
  border: 1px solid black;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

export default RegisterList;
