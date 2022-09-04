import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const Pagination = ({ pageSliceLength, pageNum, onIncreasePage, onDecreasePage }) => {
  return (
    <PaginationBox>
      <span>
        {pageNum + 1} / {pageSliceLength}
      </span>
      <BsFillArrowLeftCircleFill onClick={onDecreasePage} />
      <BsFillArrowRightCircleFill onClick={onIncreasePage} />
    </PaginationBox>
  );
};

export default Pagination;

const PaginationBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${lightTheme.ownColor};
    width: 25px;
    height: 25px;
    margin-left: 0.5rem;
    cursor: pointer;
  }

  button {
    outline: none;
    background-color: ${lightTheme.ownColor};
    border: none;
    color: white;
    border-radius: 7px;
    padding: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    margin-left: 1rem;
  }
`;
