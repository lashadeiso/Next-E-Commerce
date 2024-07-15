import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative h-96 w-full bg-slate-100">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt="catList"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="text-cl mt-8 font-light tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
