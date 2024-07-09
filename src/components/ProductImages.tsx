"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2237801/pexels-photo-2237801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/250288/pexels-photo-250288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>
      <div className="mt-8 flex justify-between gap-4">
        {images.map((item, i) => (
          <div
            className="relative mt-8 h-32 w-1/4 cursor-pointer gap-4"
            key={item.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.url}
              alt=""
              fill
              sizes="30vw"
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
