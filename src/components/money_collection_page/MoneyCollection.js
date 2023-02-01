import React from "react";
import ItemInformation from "./ItemInformation";
import PaymentOptions from "./PaymentOptions";

const MoneyCollection = () => {
  const item = {
    name: "Example Item",
    description: "This is an example item for demonstration purposes.",
    quantity: 2,
    price: 10,
  };
  return (
    <div>
      <ItemInformation item={item} />
      <PaymentOptions />
    </div>
  );
};

export default MoneyCollection;
