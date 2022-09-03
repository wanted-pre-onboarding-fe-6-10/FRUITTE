import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
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

  // useEffect(getRequest, []); // [질문] 왜 이렇게 하면 안되는지?
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
  // const [nowPage, setNowPage] = useState(1);
  const countPerPage = 8;
  const pageCount = Math.floor(productData.length / countPerPage);
  const pageCountArr = Array(pageCount).fill(null);
  // // let PageData = [];

  // useEffect(() => {
  //   const PageData = productData.splice(0, countPerPage);
  //   console.log(PageData);
  // }, []);

  return (
    <Container>
      <table style={{ border: '0.8px solid black', borderSpacing: 0 }}>
        <tbody>
          <tr>
            <TableTitle width="45">삭제</TableTitle>
            <TableTitle width="200">이미지</TableTitle>
            <TableTitle width="300">상품명</TableTitle>
            <TableTitle width="250">상품 옵션</TableTitle>
            <TableTitle width="120">가격(할인가)</TableTitle>
            <TableTitle width="90">재고</TableTitle>
            <TableTitle width="110">배송방법</TableTitle>
            <TableTitle width="110">배송비</TableTitle>
            <TableTitle width="230">상태</TableTitle>
            <TableTitle width="120">마지막 수정일</TableTitle>
            <TableTitle width="80">상품노출</TableTitle>
          </tr>
          {productData.map(data => {
            const rowLength = data.options.length ? data.options.length : 1;

            return (
              <>
                <tr key={data.id}>
                  <TdEL rowSpan={rowLength}>
                    <DeleteBtn onClick={() => onClickDelBtn(data.id)}>
                      <HiOutlineTrash />
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
          {pageCountArr.map((_, idx) => (
            <PageButtn key={idx} value={idx + 1}>
              {idx + 1}
            </PageButtn>
          ))}
        </PageButtons>
      </PageButtonWrapper>
    </Container>
  );
};

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

const PageButtn = styled.button`
  background-color: inherit;
  border: none;
  margin: 0 10px;
  cursor: pointer;
`;

export default RegisterList;
