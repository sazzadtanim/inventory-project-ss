import React from 'react';

const InvoiceTableRow = ({ removeRow, index }) => {
  return (
    <tr>
      <td>
        <input
          className='border border-solid border-gray'
          type='text'
          placeholder='Product name'
        />
      </td>
      <td>
        <input
          className='border border-solid border-gray'
          type='number'
          placeholder='Quantity'
        />
      </td>
      <td>
        <input
          className='border border-solid border-gray'
          type='number'
          placeholder='Unit Price'
        />
      </td>
      <td>500</td>
      <button className='bg-black text-white' onClick={() => removeRow(index)}>
        Remove Item
      </button>
    </tr>
  );
};

export default InvoiceTableRow;
