import React from 'react';
import TdEL from './TdStyle';

const OptionTr = ({ options }) => {
  return (
    <>
      {options.map((el, idx) => {
        if (idx === 0) {
          // eslint-disable-next-line array-callback-return
          return;
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
