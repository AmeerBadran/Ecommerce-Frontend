interface Title {
  title: string;
  description: string;
}

export default function TitleWithDescription({ title, description }: Title) {
  return (
    <div className="text-center my-12">
      <div className="flex items-center justify-center mb-2">
        <hr className="flex-grow border-gray-300 mx-4" />
        <h2 className="md:text-4xl text-2xl text-gray-800 whitespace-nowrap">{title}</h2>
        <hr className="flex-grow border-gray-300 mx-4" />
      </div>
      <p className="text-gray-500 text-sm px-1">{description}</p>
    </div>
  );
}
