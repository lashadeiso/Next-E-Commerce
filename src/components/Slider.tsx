"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/11034412/pexels-photo-11034412.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-red-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/7494686/pexels-photo-7494686.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/5705639/pexels-photo-5705639.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 1,
    title: "Autemn Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-green-50 to-pink-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex h-full w-max transition-all duration-1000 ease-in-out">
        {slides.map((slide) => {
          return (
            <div
              className={`${slide.bg} flex h-full w-screen flex-col gap-16 xl:flex-row`}
              key={slide.id}
            >
              <div className="w-1/2">
                <h2>{slide.description}</h2>
                <h1>{slide.title}</h1>
                <Link href={slide.url}>
                  <button>SHOP NOW</button>
                </Link>
              </div>
              <div className="relative w-1/2">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
