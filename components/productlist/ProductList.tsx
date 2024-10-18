import { addProduct } from "@/redux/reducers";
import React from "react";
import { useDispatch } from "react-redux";

const ProductList = ({ item }) => {
  const dispatch = useDispatch()

  const handleBuy = (idx) => {
    dispatch(addProduct(idx))
  }
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto flex flex-col justify-between">
          <img
            src={item.image}
            alt={item.description}
            className="w-64 mx-auto h-64 rounded-t-lg object-cover"
          />
        <div className="flex flex-col">
          <p className="text-black font-bold">{item.title}</p>
        <p className="text-gray-700 mt-4 text-sm">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-900">${item.price}</p>
          <p className="text-yellow-500 text-sm font-medium">
            {item.rating.rate} ★
          </p>
        </div>
        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300" onClick={() => handleBuy(item)}>
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
