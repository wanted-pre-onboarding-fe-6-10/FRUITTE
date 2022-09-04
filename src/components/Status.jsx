import React from 'react';
import styled, { css } from 'styled-components';
import { lightTheme } from '../styles/theme';

const Status = props => <StatusBlock {...props} />;

export default Status;

const StatusBlock = styled.div`
  & + & {
    margin-left: 0.5rem;
  }
  font-size: 11px;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;

  ${props =>
    props.sold &&
    css`
      color: white;
      background-color: ${lightTheme.soldoutBoxColor};
    `}
  ${props =>
    props.discount &&
    css`
      color: white;
      background-color: ${lightTheme.highlightColor};
    `}
  ${props =>
    props.commonStatus &&
    css`
      border: 1px solid #ccc;
    `}

  ${props =>
    props.best &&
    css`
      border: 1px solid #ccc;
      color: ${lightTheme.highlightColor};
    `}
`;
