import React from "react";
import ProductTableHead from "./ProductTableHead";
import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ productList }) => {
  return (
    <table>
      <ProductTableHead />
      <tbody>
        {productList.map((product, index) => (
          <ProductTableRow key={index} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
