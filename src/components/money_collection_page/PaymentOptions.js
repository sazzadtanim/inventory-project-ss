import React from "react";

const PaymentOptions = () => {
  return (
    <form>
      <h3>Payment options</h3>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="credit card"
          checked=""
        />
        Credit card
      </label>
      <label>
        <input type="radio" name="paymentMethod" value="paypal" checked="" />
        PayPal
      </label>
      <label>
        <input type="radio" name="paymentMethod" value="bank transfer" />
        Bank transfer
      </label>
      <textarea />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentOptions;
