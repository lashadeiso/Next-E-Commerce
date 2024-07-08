"use client";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        <select
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
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
        />
        <input
          type="number"
          name="max"
          placeholder="max price"
          className="w-24 rounded-2xl pl-3 text-xs ring-1 ring-gray-400"
        />
        <select
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
        </select>
        <select
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-[#EBEDED] px-4 py-2 text-xs font-medium"
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
          name="type"
          id=""
          className="cursor-pointer rounded-2xl bg-white px-4 py-2 text-xs font-medium ring-1 ring-gray-400"
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
