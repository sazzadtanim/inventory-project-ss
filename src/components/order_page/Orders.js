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
    <section>
      <div className="search-customer">
        <SearchBox />
        <select>
          <OrdersSerachOption />
        </select>
        <SearchButton />
      </div>
      <div className="order-table">
        <table className="border border-solid border-gray">
          <thead className="w-screen">
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
