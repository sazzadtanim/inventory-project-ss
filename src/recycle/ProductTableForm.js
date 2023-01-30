import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductTableHead from "./ProductTableHead";
import ProductTableRow from "./ProductTableRow";

const ProductTableForm = ({
  productName,
  setProductName,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  productList,
  setProductList,
}) => {
  useEffect(() => {
    setAmount((quantity * price).toFixed(2));
  }, [quantity, price, setAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4(),
      productName: productName,
      quantity: quantity,
      price: price,
      amount: amount,
    };

    setProductList([...productList, newProduct]);
    setProductName("");
    setQuantity("");
    setPrice("");
    setAmount("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            className="border border-solid border-gray-300"
            type="text"
            name="productName"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            className="border border-solid border-gray-300"
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            className="border border-solid border-gray-300"
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Amount:</label>

          <p>{amount}</p>
        </div>
        <button type="submit" className="bg-black text-white">
          Save
        </button>
      </form>
      <section>
        <table>
          <ProductTableHead />
          <tbody>
            {productList.map((product, index) => (
              <ProductTableRow key={index} product={product} />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ProductTableForm;
