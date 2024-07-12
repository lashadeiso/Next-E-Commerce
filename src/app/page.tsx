import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";
import NewProducts from "@/components/NewProducts";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="xl:32 mt-24 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"Loading.."}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="xl:32 mb-12 px-4 text-2xl md:px-8 lg:px-16 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="xl:32 mt-24 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <NewProducts />
      </div>
    </div>
  );
};

export default HomePage;
