import Carousel from "@/components/features/Carousel";
import CategoriesSection from "@/components/pages/home/CategoriesSection";
import CollectionsSection from "@/components/pages/home/CollectionsSection";
import PostsSection from "@/components/pages/home/PostsSection";
import ProductsSection from "@/components/pages/home/ProductsSection";
import SaleOffSection from "@/components/pages/home/SaleOffSection";

export default function Home() {
  return (
    <div className="space-y-32">
      <Carousel />
      <CategoriesSection />
      <ProductsSection />
      <CollectionsSection />
      <SaleOffSection />
      <PostsSection />
    </div>
  );
}
