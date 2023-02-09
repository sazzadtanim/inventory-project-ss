import React from "react";

const Cost = () => {
  return (
    <div>
      <form action="" className="cost-input-form">
        <div>
          <label htmlFor="cost-description">Cost Desceiption</label>
          <input
            className="block"
            type="text"
            name=""
            id="cost-description"
            placeholder="Cost Description"
          />
        </div>
        <div>
          <label htmlFor="cost-purpose">Cost Purpose</label>
          <input
            type="text"
            name=""
            id="cost-purpose"
            placeholder="Cost Purpose"
          />
        </div>
        <div>
          <label htmlFor="amount">Cost Amount</label>
          <input type="number" name="" id="amount" placeholder="Amount" />
        </div>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default Cost;
