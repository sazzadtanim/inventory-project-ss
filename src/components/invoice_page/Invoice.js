import React, { useState } from "react";
import { create } from "zustand";
import CompanyDetails from "./CompanyDetails";
import CustomerDetails from "./CustomerDetails";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceInputField from "./InvoiceInputField";

const useInvoiceStore = create((set) => ({
  showInvoice: false,
  setShowInvoice: () => set((state) => ({ showInvoice: !state.showInvoice })),
  invoiceNumber: "",
  setInvoiceNumber: (e) => set((state) => ({ invoiceNumber: e.target.value })),
}));

const Invoice = () => {
  const showInvoice = useInvoiceStore((state) => state.showInvoice);
  const changeInvoiceStatus = useInvoiceStore((state) => state.setShowInvoice);

  return (
    <div>
      {showInvoice ? (
        <>
          <InvoiceHeader />
          <h1>INVOICE</h1>

          <CompanyDetails />
          <CustomerDetails />

          <InvoiceDetails />
          <button className="bg-black text-white" onClick={changeInvoiceStatus}>
            Edit Information
          </button>
        </>
      ) : (
        <>
      
        <button className="bg-black text-white" onClick={changeInvoiceStatus}>
          Create Invoice
        </button>
        </>
      )}
    </div>
  );
};

export default Invoice;
