import React from "react";
import { CustomerData } from "../../jsonData/CustomerData";
import CustomerInformation from "./CustomerInformation";

const Customer = () => {
  return (
    <div className="customer">
      {CustomerData.map((information, index) => (
        <CustomerInformation key={index} information={information} />
      ))}
    </div>
  );
};

export default Customer;
