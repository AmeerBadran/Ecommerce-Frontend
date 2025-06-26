import { productsData } from "@/constants/products";
import ProductCard from "../ui/ProductCard";
const ProductLayout = () => {
  return (
    <div className="grid xmobile:grid-cols-2 md:grid-cols-3 2md:grid-cols-4 gap-x-5 md:gap-y-14 p-4 mx-auto">
      {productsData.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductLayout;
