import ProductLayout from "@/components/features/ProductsLayout";
import TitleWithDescription from "@/components/ui/TitleWithDescription";
import Link from "next/link";

const ProductsSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto">
      <TitleWithDescription
        title="Trending Products"
        description="Mirum est notare quam littera gothica quam nunc putamus parum claram!"
      />
      <ProductLayout />
      <div className="flex justify-center items-center mt-8">
        <Link
          href={`/shop`}
          className=" relative flex border mt-2 border-black px-6 py-4 text-lg group"
        >
          <div className="w-0 absolute -top-1 -left-1 group-hover:w-full transition-all duration-500 h-full bg-secondary">
            <div className="w-full group-hover:border-t group-hover:border-l border-white border-0 absolute top-[3px] z-10 left-[3px] h-full "></div>
          </div>
          <p className="z-10 group-hover:text-white transition-all delay-100 duration-300">View All Products</p>
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
