import React from "react";
import { useStore } from "zustand";
import { productStore } from "./store/productStore";

const AddProduct = () => {
  const getStore = useStore(productStore);
  const { allProducts } = getStore;
  // console.log(allProducts)
  const productCategories = [
    { name: 'Bagg'},{name: 'Computer'}, {name: 'Watch'}
   
  ]
  const productDiscount = [
    {amount: 10 }, {amount: 20}, {amount: 30}
  ]

  const productBrand = [
    {name:'Asus'}, {name:'Dell'}, {name:'Hp'}
  ]

  return (
    <form action="" className="ml-4">
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="product-title">
            <label
              htmlFor="productTitle"
              className="form-label inline-block text-gray-700"
            >
              Product Name
            </label>
            <input
              name="productTitle"
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="productTitle"
            />
          </div>

          <div className="sku">
            <label
              htmlFor="sku"
              className="form-label inline-block text-gray-700"
            >
              SKU
            </label>
            <input
              name="sku"
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="sku"
            />
          </div>

          <div className="unit">
            <label
              htmlFor="unit"
              className="form-label inline-block text-gray-700"
            >
              Unit
            </label>
            <input
              name="unit"
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="unit"
            />
          </div>

          <div className="categories">
            <label
              htmlFor="categories"
              className="form-label inline-block text-gray-700"
            >
              Unit
            </label>
            <div className="relative">
              <input
                name="cetegories"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="categories"
                readOnly
              />
              <select
                className="absolute top-0 left-0 w-full h-full font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
                    px-3 py-1.5"
              >
                
                {
                    productCategories.map(category=> <option>{category.name}</option>)
                }
              </select>
            </div>
          </div>

          <div className="quantity">
            <label
              htmlFor="quantity"
              className="form-label inline-block text-gray-700"
            >
             Quantity
            </label>
            <input
              name="quantity"
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="quantity"
            />
          </div>

          <div className="price">
            <label
              htmlFor="price"
              className="form-label inline-block text-gray-700"
            >
              Price
            </label>
            <input
              name="price"
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="price"
            />
          </div>
          <div className="discount">
            <label
              htmlFor="discount"
              className="form-label inline-block text-gray-700"
            >
              Discount in %
            </label>
            <div className="relative">
              <input
                name="discount"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="discount"
                readOnly
              />
              <select
                className="absolute top-0 left-0 w-full h-full font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
                    px-3 py-1.5"
              >
                
                {
                    productDiscount.map(discount=> <option>{discount.amount}</option>)
                }
              </select>
            </div>
          </div>

          <div className="brand">
            <label
              htmlFor="brand"
              className="form-label inline-block text-gray-700"
            >
              Brand
            </label>
            <div className="relative">
              <input
                name="brand"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="brand"
                readOnly
              />
              <select
                className="absolute top-0 left-0 w-full h-full font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
                    px-3 py-1.5"
              >
                
                {
                    productBrand.map(brand=> <option>{brand.name}</option>)
                }
              </select>
            </div>
          </div>

          <div className="cost">
            <label
              htmlFor="cost"
              className="form-label inline-block text-gray-700"
            >
             Cost
            </label>
            <input
              name="cost"
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="cost"
            />
          </div>

          <div className="status">
            <label
              htmlFor="status"
              className="form-label inline-block text-gray-700"
            >
              Status
            </label>
            <div className="relative">
              <input
                name="status"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="status"
                readOnly
              />
              <select
                className="absolute top-0 left-0 w-full h-full font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
                    px-3 py-1.5"
              >
                
              <option>Available</option>
              <option>Stock Out</option>

              </select>
            </div>
          </div>

          <div className="product-img">
            <label
              htmlFor="product-img"
              className="form-label inline-block text-gray-700"
            >
              Product Image
            </label>
            <input
              name="productImage"
              type="file"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="product-img"
            />
          </div>
          <button class="bg-cyan-900 hover:bg-cyan-700 text-white font-bold py-2 px-2 w-full rounded">
  Submit
</button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
