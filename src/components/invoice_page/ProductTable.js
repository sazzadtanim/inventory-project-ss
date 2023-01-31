import React from "react";

const ProductTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody className="border-b border-black">
        <tr>
          <td>
            <input
              className="border border-solid border-gray"
              type="text"
              placeholder="Product name"
            />
          </td>
          <td>
            <input
              className="border border-solid border-gray"
              type="text"
              placeholder="Price"
            />
          </td>
          <td>
            <input
              className="border border-solid border-gray"
              type="number"
              placeholder="Quantity"
            />
          </td>
          <td>500</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Sub Total:</td>
          <td>1000</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Discount:</td>
          <td>1000</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>Tax:</td>
          <td>1000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>Total Value</td>
          <td>5000</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ProductTable;
