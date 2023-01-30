import React from "react";
import Customer from "./Customer";
import Exporter from "./Exporter";
import InvoiceDetailsInformation from "./InvoiceDetailsInformation";
import InvoiceFooter from "./InvoiceFooter";

import InvoiceHeader from "./InvoiceHeader";
import ProductTable from "./ProductTable";

const Invoice = () => {
  return (
    <div className="w-screen">
      <InvoiceHeader />

      <div className="invoice-title">
        <h1 className="text-3xl text-center font-bold">Commercial Invoice</h1>
        <hr />
      </div>
      <div className="invoice-details flex justify-between">
        <InvoiceDetailsInformation />
      </div>
      <div className="exporter-customer flex justify-between">
        <Exporter />
        <Customer />
      </div>
      <div className="product-table">
        <ProductTable />
      </div>
      <div className="invoice-footer flex justify-between">
        <InvoiceFooter />
      </div>
    </div>
  );
};

export default Invoice;
