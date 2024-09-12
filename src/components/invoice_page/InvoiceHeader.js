import React from "react";

const InvoiceHeader = () => {
  return (
    <section className="invoice-header flex justify-between p-4 bg-gray-200">
      <div className="logo">
        <img
          className="w-40"
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt=""
        />
      </div>
      <div className="company-details text-gray-800">
        <h1 className="text-2xl font-bold">Company Name</h1>
        <p className="text-sm">Company Address</p>
      </div>
    </section>
  );
};

export default InvoiceHeader;
