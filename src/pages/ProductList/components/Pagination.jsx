import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/theme';

const Pagination = () => {
  return (
    <PaginationBlock>
      <button>이전</button>
      <span>1</span>
      <button>다음</button>
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
    width: 100%;
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
