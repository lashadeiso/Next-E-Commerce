"use server";

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="xl:32 relative h-20 px-4 md:px-8 lg:px-16 2xl:px-64">
      {/* Mobile */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">E-Com</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* Left */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" height={24} width={24} />
            <div className="text-2xl tracking-wide">E-Com</div>
          </Link>
          <div className="hidden gap-4 xl:flex">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="flex w-2/3 items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
