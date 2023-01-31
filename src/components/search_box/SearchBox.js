import React from "react";

const SearchBox = ({ type, placeholder }) => {
  return (
    <input
      type="text"
      placeholder="Type to search"
      className="w-50 border border-solid-black"
    />
  );
};

export default SearchBox;
