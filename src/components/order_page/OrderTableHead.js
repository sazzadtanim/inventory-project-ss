import React from "react";

const OrderTableHead = () => {
  return (
    <tr className="bg-gray-400">
      <th>SELLING DATE</th>
      <th>INVOICE NUMBER</th>
      <th>PRODUCT NAME</th>
      <th>SKU</th>
      <th>CUSTOMER NAME</th>
      <th>CUSTOMER MOBILE</th>
      <th>CUSTOMER EMAIL</th>
      <th>CUSTOMER ADDRESS</th>
      <th>PRODUCT PRICE</th>
      <th>COURIER</th>
      <th>COURIER CHARGE</th>
      <th>MONEY RECEIVED</th>
      <th>TOTAL DUE</th>
      <th>COURIER NAME</th>
      <th>REMARKS</th>
    </tr>
  );
};

export default OrderTableHead;
