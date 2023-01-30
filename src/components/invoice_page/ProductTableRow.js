import React from "react";

const ProductTableRow = (props) => {
  const { productName, quantity, price, amount } = props.product;
  return (
    <tr>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default ProductTableRow;
