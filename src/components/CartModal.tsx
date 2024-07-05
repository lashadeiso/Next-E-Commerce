"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {cartItems ? (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* Top */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="rounded-sm bg-gray-50 p-1">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">Description</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            {/* ------------ */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/370472/pexels-photo-370472.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* Top */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="rounded-sm bg-gray-50 p-1">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">Description</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$78</span>
            </div>
            <p className="mb-4 mt-2 text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md bg-black px-4 py-3 text-white">
                Chekout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default CartModal;
