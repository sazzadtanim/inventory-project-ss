import React from "react";

const SearchOptionBox = () => {
  return (
    <>
      <option value="select-an-option" selected>
        Select an option
      </option>
      <option value="name">Name</option>
      <option value="sku">SKU</option>
      <option value="productId">Product ID</option>
      <option value="category">Category</option>
    </>
  );
};

export default SearchOptionBox;
