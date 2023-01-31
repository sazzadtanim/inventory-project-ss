import React from "react";
import { currentDate } from "../current_date_time/CurrentDate";

const InvoiceDetailsInformation = () => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="billNo"> BILL NO</label>
        <input type="text" placeholder="Bill number" id="billNo" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="invoiceNo">INVOICE NO</label>
        <input type="text" placeholder="Invoice Number" id="invoiceNo" />
      </div>
      <div>
        <label htmlFor="invoiceDate">INVOICE DATE</label>
        <p>{currentDate}</p>
      </div>
      <div>
        <label htmlFor="exportDate">DATE OF EXPORT</label>
        <p>{currentDate}</p>
      </div>
    </>
  );
};

export default InvoiceDetailsInformation;
