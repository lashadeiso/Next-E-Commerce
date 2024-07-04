"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu icon"
        height={28}
        width={28}
        className="cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      />
      {open && (
        <div className="absolute left-0 top-20 z-10 flex h-[calc(100vh-80px)] w-full flex-col items-center gap-8 bg-black text-xl text-white">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/details">Details</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="">Logout</Link>
          <Link href="">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
