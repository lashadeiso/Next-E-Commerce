import Image from "next/image";
import Filter from "../../components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products",
  );

  return (
    <div className="xl:32 relative px-4 md:px-8 lg:px-16 2xl:px-64">
      <div className="hidden h-64 justify-between bg-pink-50 px-4 sm:flex">
        <div className="flex w-2/3 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="w-max rounded-3xl bg-cPink px-5 py-3 text-sm text-white">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />

      {/* Product List */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>
      <Suspense fallback={"Loading..."}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
