import React from "react";

const CustomerDetails = ({
  clientsName,
  clientsAddress,
  clientsEmail,
  clientsPhone,
}) => {
  return (
    <div>
      <div>
        <label htmlFor="clientsName">Clients Name:{clientsName} </label>
      </div>

      <div>
        <label htmlFor="clientsAddress">
          Clients Address:{clientsAddress}{" "}
        </label>
      </div>

      <div>
        <label htmlFor="clientsEmail">Clients Email:{clientsEmail} </label>
      </div>

      <div>
        <label htmlFor="clientsPhone">Clients Phone: {clientsPhone}</label>
      </div>
    </div>
  );
};

export default CustomerDetails;
