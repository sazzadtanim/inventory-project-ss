import React from "react";

const SearchOptionBox = ({ value, name }) => {
  return (
    <>
      <option value={value}>{name}</option>
    </>
  );
};

export default SearchOptionBox;
