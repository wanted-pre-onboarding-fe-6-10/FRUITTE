import React from 'react';
import TdEL from './TdStyle';

const OptionTr = ({ options }) => {
  return (
    <>
      {options.map((el, idx) => {
        if (idx === 0) {
          return null;
        }
        return (
          <tr key={idx} style={{ width: '100px' }}>
            <TdEL align="left">{el.productName}</TdEL>
            <TdEL>{el.price}</TdEL>
            <TdEL>{el.quantity}</TdEL>
          </tr>
        );
      })}
    </>
  );
};

export default OptionTr;
