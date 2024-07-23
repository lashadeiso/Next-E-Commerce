"use client";

import { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type: "i" | "d") => {
    type === "i" && quantity < stockNumber && setQuantity((item) => item + 1);
    type === "d" && quantity > 1 && setQuantity((item) => item - 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stockNumber} items</span>{" "}
            left! <br /> Dont miss it
          </div>
        </div>
        <button className="disabled:ring-none transition:hover w-36 rounded-3xl px-4 py-2 text-sm ring-1 ring-cPink duration-200 hover:bg-cPink hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white">
          Add a Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
