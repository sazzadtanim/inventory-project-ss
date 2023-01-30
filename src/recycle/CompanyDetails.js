import React from "react";
import { companyDetails } from "../jsonData/CompanyDetails";

const CompanyDetails = () => {
  return (
    <div>
      <h1>Name: {companyDetails.name}</h1>
      <p>Address: {companyDetails.address}</p>
      <p>Phone: {companyDetails.phone}</p>
      <p>Email: {companyDetails.email}</p>
    </div>
  );
};

export default CompanyDetails;
