import styled from 'styled-components';

export const TdEL = styled.td`
  border: 0.7px solid black;
  height: 50px;
  padding: 0 5px;
  vertical-align: middle;
  text-align: ${prop => (prop.align ? prop.align : 'center')};
`;
