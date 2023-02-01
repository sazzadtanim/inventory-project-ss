import React from "react";
import { FaBeer } from "react-icons/fa";

const PopUp = () => {
  return (
    <div className="success-popup w-96 h-96 bg-white shadow-lg rounded-md p-8 relative">
      <div className="mx-auto border-2 border-solid border-gray rounded-full h-28 w-28 flex justify-center items-center">
        <FaBeer className="w-16 h-16 text-green-500" />
      </div>
      <h1 className="text-center text-3xl font-bold mt-8 text-gray-800 ">
        Success
      </h1>
      <p className="text-center text-gray-600 mt-2">Your data was saved!</p>

      <button className="bg-green-500 text-white px-8 mx-auto rounded py-1 absolute bottom-0 right-0 mr-8 mb-8">
        {" "}
        OK
      </button>
    </div>
  );
};

export default PopUp;
