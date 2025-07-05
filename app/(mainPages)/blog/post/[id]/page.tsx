"use client";
import UpperPageTitle from "@/components/ui/UpperPageTitle";
import React from "react";
import Image from "next/image";
import upperImage from "@/public/images/Blog-image.jpg";

import { postsData } from "@/constants/posts";
import { useParams } from "next/navigation";

const PostById = () => {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === id);
  const examplePost = post || postsData[0];
  return (
    <div>
      <UpperPageTitle
        image={upperImage}
        title={examplePost.title}
        subtitle=""
        link="Blog"
        textColor="text-white"
      />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Image
          src={examplePost.image}
          alt={examplePost.title}
          width={800}
          height={400}
          className="w-full h-auto mt-4 rounded-lg"
        />
        <h1 className="text-3xl font-medium mt-10">{examplePost.title}</h1>
        <p className="text-gray-600 mt-2">
          By{" "}
          <span className="text-secondary font-medium">
            {examplePost.author}
          </span>{" "}
          on {new Date(examplePost.createdAt).toLocaleDateString()}
        </p>
        <p className="mt-5 mb-15 text-gray-500 italic">{examplePost.excerpt}</p>
      </div>
    </div>
  );
};

export default PostById;
