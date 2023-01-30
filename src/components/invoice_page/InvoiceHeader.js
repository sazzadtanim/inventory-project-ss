import React from "react";

const InvoiceHeader = () => {
  return (
    <section className="invoice-header flex justify-between p-4">
      <div className="logo">
        <img
          className="w-40"
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt=""
        />
      </div>
      <div className="company-details">
        <h1 className="text-2xl">Company Name</h1>
        <p>Company Address</p>
      </div>
    </section>
  );
};

export default InvoiceHeader;
