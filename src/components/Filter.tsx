"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="pysical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input
          type="number"
          name="min"
          placeholder="min price"
          className="w-24 rounded-2xl pl-3 text-xs ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="max"
          placeholder="max price"
          className="w-24 rounded-2xl pl-3 text-xs ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        {/* <select
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
        >
          <option>Size</option>
          <option value="pysical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
        >
          <option>Color</option>
          <option value="pysical">Physical</option>
          <option value="digital">Digital</option>
        </select> */}
        <select
          name="category"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="pysical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
        >
          <option>All Filters</option>
          <option value="pysical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>

      <div className="">
        <select
          name="sort"
          id=""
          className="cursor-pointer rounded-2xl bg-white px-4 py-2 text-xs font-medium ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="pysical">Price (low to high)</option>
          <option value="digital">Price (high to low)</option>
          <option value="digital">Newest</option>
          <option value="digital">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
