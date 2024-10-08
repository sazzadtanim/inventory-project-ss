import React, { useEffect, useState } from "react";
import AllProductTableHead from "./AllProductTableHead";
import AllProductTableRow from "./AllProductTableRow";
import SearchBox from "../search_box/SearchBox";
import SearchButton from "../search-button/SearchButton";
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
        <SearchBox />

        <select>
          <SearchOptionBox />
        </select>
        <SearchButton />
      </div>
      <table className="border border-solid border-black">
        <thead className="w-screen">
          <AllProductTableHead />
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
