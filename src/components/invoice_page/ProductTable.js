import React, { useState } from 'react';
import InvoiceTableRow from './InvoiceTableRow';

const ProductTable = () => {
  const [tableRow, setTableRow] = useState([{}]);

  const addRow = () => {
    setTableRow([...tableRow, {}]);
  };
  const removeRow = (index) => {
    setTableRow(tableRow.filter((_, i) => i !== index));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Unit Price</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {tableRow.map((row, index) => (
            <InvoiceTableRow key={index} index={index} removeRow={removeRow} />
          ))}
        </tbody>
      </table>
      <button className='bg-black text-white' onClick={addRow}>
        Add Product
      </button>
    </div>
  );
};

export default ProductTable;
