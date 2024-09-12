import React from "react";

const AllProductTableHead = () => {
  return (
    <tr className="bg-gray-400">
      <th className="mt-2 mr-3 p-3">PRODUCT NAME</th>
      <th className="mt-2 mr-3 p-3">SKU</th>
      <th className="mt-2 mr-3 p-3">REGULAR PRICE</th>
      <th className="mt-2 mr-3 p-3">SALE PRICE</th>
      <th className="mt-2 mr-3 p-3">STOCK QUANTITY</th>
      <th className="mt-2 mr-3 p-3">MANAGE STOCK</th>
      <th className="mt-2 mr-3 p-3">EDIT</th>
      <th className="mt-2 mr-3 p-3">VIEW PURCHASE</th>
    </tr>
  );
};

export default AllProductTableHead;
