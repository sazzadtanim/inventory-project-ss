import React from "react";

const InvoiceFooter = () => {
  return (
    <>
      <div className="invoice-notes">
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolorem soluta voluptatibus architecto iure temporibus ducimus dolorum
          in modi, corrupti itaque quos porro qui! Neque et provident adipisci
          minus sint.
        </p>
      </div>
      <div className="authorised-signature">
        <p>Authorised Signature</p>
        <img
          src="https://signaturely.com/wp-content/uploads/2020/04/slanted-signaturely.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default InvoiceFooter;
