import React, { useEffect, useState } from "react";
import SearchButton from "../search-button/SearchButton";
import SearchBox from "../search_box/SearchBox";
import OrdersSerachOption from "./OrdersSerachOption";
import OrderTableHead from "./OrderTableHead";
import OrderTableRow from "./OrderTableRow";

const Orders = () => {
  const [fakeInformation, setFakeInformation] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => setFakeInformation(data));
  }, []);
  return (
    <section className="flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <SearchBox />
        <select className="bg-white border border-gray-400 rounded py-2 px-4">
          <OrdersSerachOption />
        </select>
        <SearchButton />
      </div>
      <div className="border border-gray-400">
        <table className="w-full">
          <thead className="bg-gray-200">
            <OrderTableHead />
          </thead>
          <tbody>
            {fakeInformation.map((information, index) => (
              <OrderTableRow key={index} information={information} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
