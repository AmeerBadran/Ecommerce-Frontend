import Image from "next/image";

type CategoriesCardProps = {
  image: string;
  title: string;
};

const CategoriesCard = ({ image, title }: CategoriesCardProps) => {
  return (
    <div className=" aspect-[4/2] relative flex items-center overflow-hidden group">
      <div className="relative z-10 text-gray-800 p-4">
        <h1 className="md:text-sm 2md:text-base font-semibold max-w-45">{title}</h1>
        <p className="text-sm font-semibold mt-4 text-gray-600">Discover Now</p>
      </div>
      <div className="absolute top-0 left-0 bg-black/20 z-10"></div>
      <Image
        src={image}
        alt={title}
        className="absolute top-0 left-0 object-cover group-hover:scale-105 transition duration-500"
        fill
      />
    </div>
  );
};

export default CategoriesCard;
