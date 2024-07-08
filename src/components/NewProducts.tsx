"use server";

import Image from "next/image";
import Link from "next/link";

const NewProducts = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/1822845/pexels-photo-1822845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="object-fit easy absolute z-10 rounded-md transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/2774292/pexels-photo-2774292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="object-fit absolute rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
        <button className="transition:hover w-max rounded-2xl px-4 py-2 text-xs text-cPink ring-1 ring-cPink duration-500 hover:bg-cPink hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="object-fit easy absolute z-10 rounded-md transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="object-fit absolute rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
        <button className="transition:hover w-max rounded-2xl px-4 py-2 text-xs text-cPink ring-1 ring-cPink duration-500 hover:bg-cPink hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="object-fit easy absolute z-10 rounded-md transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
            alt=""
            fill
            sizes="25vw"
            className="object-fit absolute rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
        <button className="transition:hover w-max rounded-2xl px-4 py-2 text-xs text-cPink ring-1 ring-cPink duration-500 hover:bg-cPink hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="object-fit easy absolute z-10 rounded-md transition-opacity duration-500 hover:opacity-0"
          />
          <Image
            src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="object-fit absolute rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
        <button className="transition:hover w-max rounded-2xl px-4 py-2 text-xs text-cPink ring-1 ring-cPink duration-500 hover:bg-cPink hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default NewProducts;
