import React from 'react';
import styled from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi';
import addComma from '../../../utils/addComma';
import { TdEL } from './TdEl';

const ProductTable = ({ data, setProductData }) => {
  const rowLength = data.options.length ? data.options.length : 1;

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

  return (
    <tr key={data.id}>
      <TdEL rowSpan={rowLength}>
        <DeleteBtn onClick={() => onClickDelBtn(data.id)}>
          <HiOutlineTrash />
        </DeleteBtn>
      </TdEL>
      <TdEL rowSpan={rowLength}>{data.id}</TdEL>
      <TdEL rowSpan={rowLength}>
        <TableImg src={data.img[0]} alt={data.title} />
      </TdEL>
      <TdEL rowSpan={rowLength} align="left">
        {data.title}
      </TdEL>
      <TdEL align="left">{data.options.length > 0 ? data.options[0].productName : ''}</TdEL>
      <TdEL>
        {data.options.length > 0
          ? `${addComma(data.options[0].price)}원`
          : `${addComma(data.discount)}원`}
      </TdEL>
      <TdEL>{data.options.length > 0 ? data.options[0].quantity : 70}</TdEL>
      <TdEL rowSpan={rowLength}>{data.delivery_method}</TdEL>
      <TdEL rowSpan={rowLength}>{addComma(data.delivery_fee)}원</TdEL>
      <TdEL rowSpan={rowLength}>
        {data.status.isSoldout && <Status>품절</Status>}
        {data.status.isDiscount && <Status>할인</Status>}
        {data.status.isBest && <Status>Best</Status>}
        {data.status.isPending && <Status>준비중</Status>}
      </TdEL>
      <TdEL rowSpan={rowLength}>2022.09.{RandomDay(data.id)}</TdEL>
      <TdEL rowSpan={rowLength}>
        <ShowBtn onClick={() => onClickShowBtn(data.id)} isShow={data.isShow}>
          {data.isShow ? 'on' : 'off'}
        </ShowBtn>
      </TdEL>
    </tr>
  );
};

const DeleteBtn = styled.button.attrs({ type: 'button' })`
  color: #d40303;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const TableImg = styled.img`
  width: 10rem;
  height: 10rem;
`;

const Status = styled.span`
  margin-right: 8px;
`;

const ShowBtn = styled.button.attrs({ type: 'button' })`
  background-color: ${prop => (prop.isShow ? '#ea9b28' : 'gray')};
  color: white;
  border-radius: 20px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

export default ProductTable;

const RandomDay = day => {
  if (day.length === 1) {
    day = '0' + day;
  }

  if (+day > 31) {
    day = '0' + day.slice(1);
  }
  return day;
};
