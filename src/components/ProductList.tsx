import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative h-80 w-full">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="object-fit easy absolute z-10 rounded-md transition-opacity duration-500 hover:opacity-0"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="object-fit absolute rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price?.price}</span>
          </div>
          <div
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                product.additionalInfoSections?.find(
                  (section: any) => section.title === "Short Description",
                )?.description || "lasha",
              ),
            }}
          ></div>
          <button className="transition:hover w-max rounded-2xl px-4 py-2 text-xs text-cPink ring-1 ring-cPink duration-500 hover:bg-cPink hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
