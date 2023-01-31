import React from "react";

const OrderTableRow = (props) => {
  const { address, id, email, username, name, phone, password } =
    props.information;
  return (
    <tr>
      <td>{phone}</td>
      <td>{id}</td>
      <td>{name.firstname + " " + name.lastname}</td>
      <td>{username}</td>
      <td>{name.firstname + " " + name.lastname}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address.city}</td>
      <td>{address.number}</td>
      <td>{username}</td>
      <td>{address.number}</td>
      <td>{address.number}</td>
      <td>{address.number}</td>
      <td>{name.lastname}</td>
      <td>{password}</td>
    </tr>
  );
};

export default OrderTableRow;
