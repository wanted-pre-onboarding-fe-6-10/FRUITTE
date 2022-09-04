import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';

const Pagination = ({ pageNum, onIncreasePage, onDecreasePage }) => {
  return (
    <PaginationBlock>
      <button onClick={onDecreasePage}>이전</button>
      <span>{pageNum + 1}</span>
      <button onClick={onIncreasePage}>다음</button>
    </PaginationBlock>
  );
};

export default Pagination;

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8rem;

  @media (max-width: 425px) {
    width: 80%;
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
  }
`;
