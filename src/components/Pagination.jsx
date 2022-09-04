import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../styles/theme';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({ pageSliceArr, pageNum, setPageNum }) => {
  const pageNums = Array(pageSliceArr.length).fill(null);

  const onIncreasePage = () => {
    if (pageNum === pageSliceArr.length - 1) {
      alert('마지막 페이지 입니다');
    } else {
      setPageNum(pageNum + 1);
    }
  };

  const onDecreasePage = () => {
    if (pageNum === 0) {
      alert('마지막 페이지 입니다.');
    } else {
      setPageNum(pageNum - 1);
    }
  };
  return (
    <PaginationBox>
      <button onClick={onDecreasePage}>
        <IoIosArrowBack />
      </button>
      {pageNums.map((_, idx) => (
        <span
          key={idx}
          onClick={() => setPageNum(idx)}
          aria-current={pageNum === idx ? 'page' : null}
        >
          {idx + 1}
        </span>
      ))}
      <button style={{ marginLeft: '1rem' }} onClick={onIncreasePage}>
        <IoIosArrowForward />
      </button>
    </PaginationBox>
  );
};

export default Pagination;

const PaginationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    outline: none;
    border: none;
    color: ${lightTheme.textColor};
    background-color: ${lightTheme.bgColor};
    border-radius: 7px;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 500;
  }

  span {
    margin-left: 1rem;
    cursor: pointer;

    &[aria-current] {
      background-color: ${lightTheme.ownColor};
      color: white;
      padding: 0.5rem;
      border-radius: 5px;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    }
  }
`;
