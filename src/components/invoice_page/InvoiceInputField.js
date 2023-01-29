import React from "react";

const InvoiceInputField = ({placeholder,id,value,type, setValue}) => {
  return (
    <div>
      <input className="border border-solid border-gray-300" type={type} placeholder={placeholder} id={id} value={value} onChange={setValue}/>
    </div>
  );
};

export default InvoiceInputField;
