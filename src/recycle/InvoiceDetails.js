import React from "react";
import CurrentDate from "../current_date_time/CurrentDate";
import CurrentTime from "../current_date_time/CurrentTime";

const InvoiceDetails = ({invoiceNumber}) => {
   
  return (
    <div>
      <div>
        <label htmlFor="invoiceNumber">Invoice Number:{invoiceNumber}</label>
      </div>

      <div>
        <label htmlFor="">Invoice Date:</label>
        <CurrentDate />
      </div>

      <div>
        <label htmlFor="">Invoice Time:</label>
        <CurrentTime />
      </div>
    </div>
  );
};

export default InvoiceDetails;
