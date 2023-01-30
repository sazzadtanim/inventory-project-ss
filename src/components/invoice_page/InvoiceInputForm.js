import React from "react";

const InvoiceInputForm = ({
  setClientsName,
  setClientsAddress,
  setClientsEmail,
  setClientsPhone,
  setInvoiceNumber,
}) => {
  return (
    <>
      <div>
        <label htmlFor="clientsName">Clients Name: </label>
        <input
          className="border border-solid border-gray-300"
          placeholder="Enter clients name"
          type="text"
          id="clientsName"
          onChange={(e) => setClientsName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="clientsAddress">Clients Address: </label>
        <input
          className="border border-solid border-gray-300"
          placeholder="Enter clients address"
          type="text"
          id="clientsAddress"
          onChange={(e) => setClientsAddress(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="clientsEmail">Clients Email: </label>
        <input
          className="border border-solid border-gray-300"
          placeholder="Enter clients email"
          type="email"
          id="clientsEmail"
          onChange={(e) => setClientsEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="clientsPhone">Clients Phone: </label>
        <input
          className="border border-solid border-gray-300"
          placeholder="Enter clients phone number"
          type="text"
          id="clientsPhone"
          onChange={(e) => setClientsPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="invoiceNumber">Invoice Number: </label>
        <input
          className="border border-solid border-gray-300"
          placeholder="Enter invoice number"
          type="text"
          id="invoiceNumber"
          onChange={(e) => setInvoiceNumber(e.target.value)}
        />
      </div>
    </>
  );
};

export default InvoiceInputForm;
