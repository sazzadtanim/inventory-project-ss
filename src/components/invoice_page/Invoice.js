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

      <div className="invoice-title text-center">
        <h1 className="text-3xl font-bold">Commercial Invoice</h1>
        <hr className="my-4" />
      </div>

      <div className="invoice-details flex justify-between py-4">
        <InvoiceDetailsInformation />
      </div>

      <div className="exporter-customer flex justify-between py-4">
        <Exporter />
        <Customer />
      </div>

      <div className="product-table py-4">
        <ProductTable />
      </div>

      <div className="invoice-footer flex justify-between py-4">
        <InvoiceFooter />
      </div>
    </div>
  );
};

export default Invoice;
