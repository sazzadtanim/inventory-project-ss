import React, { useState } from "react";
import { create } from "zustand";
import CompanyDetails from "./CompanyDetails";
import CustomerDetails from "./CustomerDetails";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceInputField from "./InvoiceInputField";
import InvoiceTextArea from "./InvoiceTextArea";

const Invoice = () => {
  const [invoiceStatus, setInvoiceStatus] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientsName, setClientsName] = useState("");
  const [clientsAddress, setClientsAddress] = useState("");
  const [clientsEmail, setClientsEmail] = useState("");
  const [clientsPhone, setClientsPhone] = useState("");

  return (
    <div>
      {invoiceStatus ? (
        <>
          <InvoiceHeader />
          <h1>INVOICE</h1>

          <CompanyDetails />
          <CustomerDetails
            clientsName={clientsName}
            clientsAddress={clientsAddress}
            clientsEmail={clientsEmail}
            clientsPhone={clientsPhone}
          />

          <InvoiceDetails invoiceNumber={invoiceNumber} />
          <button
            className="bg-black text-white"
            onClick={() => setInvoiceStatus(!invoiceStatus)}
          >
            Edit Information
          </button>
        </>
      ) : (
        <>
          <InvoiceInputField
            placeholder="Enter clients name"
            type="text"
            id="clientsName"
            value={clientsName}
            setValue={(e) => setClientsName(e.target.value)}
          />

          <InvoiceTextArea
            placeholder="Enter clients address"
            type="text"
            id="clientsAddress"
            value={clientsAddress}
            setValue={(e) => setClientsAddress(e.target.value)}
          />
          <InvoiceInputField
            placeholder="Enter clients email"
            type="email"
            id="clientsEmail"
            value={clientsEmail}
            setValue={(e) => setClientsEmail(e.target.value)}
          />

          <InvoiceInputField
            placeholder="Enter clients phone number"
            type="text"
            id="clientsPhone"
            value={clientsPhone}
            setValue={(e) => setClientsPhone(e.target.value)}
          />

          <InvoiceInputField
            placeholder="Enter invoice number"
            type="text"
            id="invoiceNumber"
            value={invoiceNumber}
            setValue={(e) => setInvoiceNumber(e.target.value)}
          />

          <button
            className="bg-black text-white"
            onClick={() => setInvoiceStatus(!invoiceStatus)}
          >
            Create Invoice
          </button>
        </>
      )}
    </div>
  );
};

export default Invoice;
