import React, { useEffect, useState } from "react";
import AllProductTableHead from "./AllProductTableHead";
import AllProductTableRow from "./AllProductTableRow";
import SearchBox from "./SearchBox";
import SearchButton from "./SearchButton";
import SearchOptionBox from "./SearchOptionBox";

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
        <SearchBox type="text" placeholder="Type to search" />

        <select>
          <SearchOptionBox />
        </select>
        <SearchButton />
      </div>
      <table className="border border-solid border-black">
        <thead className="w-screen">
          <tr className="bg-gray-400">
            <AllProductTableHead />
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
