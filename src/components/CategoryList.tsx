import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/3786211/pexels-photo-3786211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/22609043/pexels-photo-22609043/free-photo-of-back-view-of-person-in-helmet-and-jacket-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/22065649/pexels-photo-22065649/free-photo-of-portrait-of-a-woman-wearing-gloves-holding-a-papaya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="catList"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="text-cl mt-8 font-light tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
