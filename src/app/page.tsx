"use client";

import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import CategoryList from "@/components/CategoryList";
import NewProducts from "@/components/NewProducts";
import { useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";

const HomePage = () => {
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };
    getProducts();
  }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="xl:32 mt-24 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
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
