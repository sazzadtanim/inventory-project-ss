import React, { useState } from "react";

import CompanyDetails from "./CompanyDetails";
import CustomerDetails from "./CustomerDetails";
import InvoiceDetails from "./InvoiceDetails";

import InvoiceHeader from "./InvoiceHeader";
import InvoiceInputForm from "./InvoiceInputForm";
import ProductTable from "./ProductTable";
import ProductTableForm from "./ProductTableForm";

const Invoice = () => {
  const [invoiceStatus, setInvoiceStatus] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientsName, setClientsName] = useState("");
  const [clientsAddress, setClientsAddress] = useState("");
  const [clientsEmail, setClientsEmail] = useState("");
  const [clientsPhone, setClientsPhone] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [productList, setProductList] = useState([]);

  return (
    <div>
      {invoiceStatus ? (
        <section>
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
          <ProductTable productList={productList} />
          <button
            className="bg-black text-white"
            onClick={() => setInvoiceStatus(!invoiceStatus)}
          >
            Edit Information
          </button>
        </section>
      ) : (
        <section>
          <InvoiceInputForm
            setInvoiceNumber={setInvoiceNumber}
            setClientsName={setClientsName}
            setClientsAddress={setClientsAddress}
            setClientsEmail={setClientsEmail}
            setClientsPhone={setClientsPhone}
          />

          <ProductTableForm
            productName={productName}
            setProductName={setProductName}
            quantity={quantity}
            setQuantity={setQuantity}
            price={price}
            setPrice={setPrice}
            amount={amount}
            setAmount={setAmount}
            productList={productList}
            setProductList={setProductList}
          />

          <button
            className="bg-black text-white"
            onClick={() => setInvoiceStatus(!invoiceStatus)}
          >
            Create Invoice
          </button>
        </section>
      )}
    </div>
  );
};

export default Invoice;
