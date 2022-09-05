import React from 'react';
import addComma from '../../../utils/addComma';
import { TdEL } from './TdEl';

const OptionTable = ({ data }) => {
  return (
    <tr key={Date.now() + Math.random()} style={{ width: '100px' }}>
      <TdEL align="left">{data.productName}</TdEL>
      <TdEL>{addComma(data.price)}원</TdEL>
      <TdEL>{data.quantity}</TdEL>
    </tr>
  );
};
export default OptionTable;
