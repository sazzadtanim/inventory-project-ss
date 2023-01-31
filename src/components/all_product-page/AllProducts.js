import React, { useEffect, useState } from "react";
import AllProductTableRow from "./AllProductTableRow";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="search-box">
        <input type="text" className="w-50 border border-solid-black" />
        <button className="bg-black text-white">SEARCH</button>
      </div>
      <table className="border border-solid border-black">
        <thead className="w-screen">
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
        </thead>
        <tbody>
          {products.map((product, index) => (
            <AllProductTableRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
