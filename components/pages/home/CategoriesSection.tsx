import CategoriesCard from "@/components/ui/CategoriesCard";
import { categoriesData } from "@/constants/categoriesData";
const CategoriesSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 bg-white p-4 ">
      {categoriesData.map((item, index) => (
        <CategoriesCard key={index} image={item.image} title={item.title} />
      ))}
    </section>
  );
};

export default CategoriesSection;
