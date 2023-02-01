import React from "react";

const ItemInformation = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Unit price: {item.price}</p>
      <p>Total price: {item.quantity * item.price}</p>
    </div>
  );
};

export default ItemInformation;
