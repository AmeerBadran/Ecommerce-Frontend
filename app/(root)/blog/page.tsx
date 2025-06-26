import PostCard from "@/components/ui/PostCard";
import UpperPageTitle from "@/components/ui/UpperPageTitle";
import { postsData } from "@/constants/posts";
import upperImage from "@/public/images/productsbackground.jpg";
import React from "react";

const Blog = () => {
  return (
    <div>
      <UpperPageTitle
        image={upperImage}
        title="Blog"
        subtitle=""
        link="Blog"
        textColor="text-white"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-20 max-w-[1400px] mx-auto">
        {postsData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
        {postsData.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      
    </div>
  );
};

export default Blog;
