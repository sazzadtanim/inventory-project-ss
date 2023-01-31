import React from "react";

const AllProductTableRow = (props) => {
  const { id, title, price, rating } = props.product;
  return (
    <tr>
      <td>{title}</td>
      <td>{id}</td>
      <td>{price}</td>
      <td>{price}</td>
      <td>{rating.count}</td>
      <td>yes</td>
      <td>
        <button>edit</button>
      </td>
      <td>
        <button>view purchase</button>
      </td>
    </tr>
  );
};

export default AllProductTableRow;
