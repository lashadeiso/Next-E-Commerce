"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchInputValue = formData.get("search-bar") as string;

    if (searchInputValue) {
      router.push(`/list?name=${searchInputValue}`);
    }
  };

  return (
    <form
      className="flex flex-1 justify-between gap-4 rounded-md bg-gray-100 p-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        name="search-bar"
      />
      <button className="cursor-pointer" type="submit">
        <Image src="/search.png" alt="Search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
