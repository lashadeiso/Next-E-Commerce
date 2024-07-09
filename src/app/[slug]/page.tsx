import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div className="xl:32 relative flex flex-col gap-16 px-4 md:mt-10 md:px-8 lg:flex-row lg:px-16 xl:mt-20 2xl:px-64">
      {/* Image */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages />
      </div>

      {/* Text */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos beatae
          dolore dolores tenetur dolor labore, neque blanditiis eos eius ipsam
          possimus eaque aspernatur atque iusto aliquam officiis nisi
          consequuntur in.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus
            voluptates totam quisquam est quod quia amet similique odit
            cupiditate nobis omnis consectetur, cumque accusamus magni! Magni
            autem enim molestias.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus
            voluptates totam quisquam est quod quia amet similique odit
            cupiditate nobis omnis consectetur, cumque accusamus magni! Magni
            autem enim molestias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
