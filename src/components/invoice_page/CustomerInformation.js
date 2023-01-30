import React from "react";

const CustomerInformation = (props) => {
  const { htmlFor, label, type, placeholder } = props.information;
  return (
    <div className="flex">
      <label htmlFor={htmlFor}>{label} </label>
      <input
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        className="border border-solid border-gray"
      />
    </div>
  );
};

export default CustomerInformation;
