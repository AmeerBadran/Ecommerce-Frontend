import PostsSlider from "@/components/features/PostsSlider";
import PostCard from "@/components/ui/PostCard";
import TitleWithDescription from "@/components/ui/TitleWithDescription";
import { postsData } from "@/constants/posts";
import React from "react";

const PostsSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto mb-20 mt-32">
      <TitleWithDescription
        title="Our Blog Posts"
        description="Mirum est notare quam littera gothica quam nunc putamus parum claram!"
      />
      <PostsSlider>
        {postsData.map((product) => (
          <PostCard key={product.id} {...product} />
        ))}
      </PostsSlider>
    </section>
  );
};

export default PostsSection;
