import React from "react";

const OrderTableHead = () => {
  return (
    <tr className="bg-gray-400 text-white font-bold">
      <th className="px-4 py-2">SELLING DATE</th>
      <th className="px-4 py-2">INVOICE NUMBER</th>
      <th className="px-4 py-2">PRODUCT NAME</th>
      <th className="px-4 py-2">SKU</th>
      <th className="px-4 py-2">CUSTOMER NAME</th>
      <th className="px-4 py-2">CUSTOMER MOBILE</th>
      <th className="px-4 py-2">CUSTOMER EMAIL</th>
      <th className="px-4 py-2">CUSTOMER ADDRESS</th>
      <th className="px-4 py-2">PRODUCT PRICE</th>
      <th className="px-4 py-2">COURIER</th>
      <th className="px-4 py-2">COURIER CHARGE</th>
      <th className="px-4 py-2">MONEY RECEIVED</th>
      <th className="px-4 py-2">TOTAL DUE</th>
      <th className="px-4 py-2">COURIER NAME</th>
      <th className="px-4 py-2">REMARKS</th>
    </tr>
  );
};

export default OrderTableHead;
