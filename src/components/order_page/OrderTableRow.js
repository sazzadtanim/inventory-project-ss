import React from "react";

const OrderTableRow = (props) => {
  const { address, id, email, username, name, phone, password } =
    props.information;
  return (
    <tr className="text-gray-800">
      <td className="px-4 py-2 border border-gray-400">{phone}</td>
      <td className="px-4 py-2 border border-gray-400">{id}</td>
      <td className="px-4 py-2 border border-gray-400">
        {name.firstname + " " + name.lastname}
      </td>
      <td className="px-4 py-2 border border-gray-400">{username}</td>
      <td className="px-4 py-2 border border-gray-400">
        {name.firstname + " " + name.lastname}
      </td>
      <td className="px-4 py-2 border border-gray-400">{phone}</td>
      <td className="px-4 py-2 border border-gray-400">{email}</td>
      <td className="px-4 py-2 border border-gray-400">{address.city}</td>
      <td className="px-4 py-2 border border-gray-400">{address.number}</td>
      <td className="px-4 py-2 border border-gray-400">{username}</td>
      <td className="px-4 py-2 border border-gray-400">{address.number}</td>
      <td className="px-4 py-2 border border-gray-400">{address.number}</td>
      <td className="px-4 py-2 border border-gray-400">{address.number}</td>
      <td className="px-4 py-2 border border-gray-400">{name.lastname}</td>
      <td className="px-4 py-2 border border-gray-400">{password}</td>
    </tr>
  );
};

export default OrderTableRow;
