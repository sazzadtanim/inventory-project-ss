import React from "react";
import { invoiceData } from "./jsonData/fakeInvoiceData";

export default function SazzadInvoice() {
  return (
    <div className="max-w-2xl mx-auto text-black">
      <CompanyInfo />

      <div className="flex justify-between">
        <CustomerInfo />
        <InvoiceInfo />
      </div>

      <ProductInfo />
      <BalanceTable />
    </div>
  );
}

// functional components
function InvoiceComponent({ name, type, placeholder }) {
  return (
    <div className="flex justify-between">
      <p>{name}</p>
      <input placeholder={placeholder} type={type} />
    </div>
  );
}

function CustomerComponent({ name, type, placeholder }) {
  return (
    <div>
      {/* <p>{name}</p> */}
      <input placeholder={placeholder} type={type} />
    </div>
  );
}

function ProductInfo() {
  return (
    <div className="max-w-full m-5 overflow-hidden border border-gray-200 rounded-lg ">
      <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">productName</th>
            <th className="px-6 py-4 font-medium text-gray-900">
              productQuantity
            </th>
            <th className="px-6 py-4 font-medium text-gray-900">unitProce</th>
            <th className="px-6 py-4 font-medium text-gray-900">size</th>
            <th className="px-6 py-4 font-medium text-gray-900">ammount</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          <ProductInputFieldComponent />
          <ProductInputFieldComponent />
          <ProductInputFieldComponent />
        </tbody>
      </table>
    </div>
  );
}

function ProductInputFieldComponent() {
  return (
    <tr className="px-2 py-2 hover:bg-gray-500">
      <td>
        <input placeholder="Full sleeve shirt" type={"text"} />
      </td>
      <td>
        <input placeholder="5" type={"text"} />
      </td>
      <td>
        <input placeholder="1200" type={"text"} />
      </td>
      <td>
        <input placeholder="L" type={"text"} />
      </td>
      <td>
        <input placeholder="6000" type={"text"} />
      </td>
    </tr>
  );
}

function BalanceTable() {
  return (
    <>
      <div className="flex flex-col justify-start m-5 overflow-hidden border border-gray-200 rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
          <tr class="divide-y divide-gray-100 border-t border-gray-100">
            <th>shipping charge</th>
            <td>60</td>
          </tr>
          <tr class="divide-y divide-gray-100 border-t border-gray-100">
            <th>subtotal</th>
            <td>60</td>
          </tr>
          <tr class="divide-y divide-gray-100 border-t border-gray-100">
            <th>discount</th>
            <td>60</td>
          </tr>
          <tr class="divide-y divide-gray-100 border-t border-gray-100">
            <th>total</th>
            <td>60</td>
          </tr>
        </table>
      </div>
    </>
  );
}

function CompanyInfo() {
  return (
    <div className="max-w-full m-5 overflow-hidden border border-gray-200 rounded-lg ">
      <div>
        {/* logo */}
        <img
          src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/327171505_4281364858654113_6549804838659456499_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Mbc12m0zF10AX9cEyMS&_nc_ht=scontent.fdac5-1.fna&oh=00_AfDRozDsylfM3LTVzwsTk_rP8Gsycsn0rwrJDiGSVqiKpQ&oe=63DCDC6B"
          alt="logo"
          className="w-10 h-10"
        />
      </div>
      <div>
        <p>Company Name</p>
        <p>address</p>
      </div>
    </div>
  );
}

function InvoiceInfo() {
  return (
    <div className="m-5 overflow-hidden border border-gray-200 rounded-lg ">
      {/* invoice no */}
      {/* invoice date */}
      {/* date of export */}
      {invoiceData.invoiceInfo.map((item, index) => (
        <InvoiceComponent
          key={index}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
        />
      ))}
    </div>
  );
}

function CustomerInfo() {
  return (
    <div className="m-5 overflow-hidden border border-gray-200 rounded-lg ">
      <p>customer information</p>
      {invoiceData.customerInfo.map((item, index) => (
        <CustomerComponent
          key={index}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
        />
      ))}
    </div>
  );
}
