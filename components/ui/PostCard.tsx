import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  id: string;
  image: string;
  title: string;
  author: string;
  createdAt: string;
  excerpt: string;
}

const PostCard = ({
  id,
  image,
  title,
  author,
  createdAt,
  excerpt,
}: PostCardProps) => {
  return (
    <div className="bg-white rounded overflow-hidden mx-auto w-full max-w-[400px] md:px-0 px-3">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="py-5 px-2">
        <h3 className="text-base font-medium text-gray-700 mb-2">{title}</h3>
        <div className="text-sm text-[#6e6e6e] mb-3">
          By <span className="text-secondary font-medium">{author}</span> /{" "}
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </div>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <Link
          href={`/blog/post/${id}`}
          className=" relative flex border mt-2 border-black w-fit px-6 py-3 text-sm group"
        >
          <div className="w-0 absolute -top-1 -left-1 group-hover:w-full transition-all duration-500 h-full bg-secondary">
            <div className="w-full group-hover:border-t group-hover:border-l border-white border-0 absolute top-[3px] z-10 left-[3px] h-full "></div>
          </div>
          <p className="z-10">
            <span className="text-secondary-100 group-hover:text-white transition-all delay-200 ease-out duration-300">
              Read More
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
