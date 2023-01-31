import React from "react";

const SearchBox = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-50 border border-solid-black"
    />
  );
};

export default SearchBox;
