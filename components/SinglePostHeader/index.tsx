import { Post } from "@/types";
import Image from "next/image";
import React from "react";

interface SinglePostHeaderProps {
  post: Post;
  formattedDate: string;
}
function SinglePostHeader({ post, formattedDate }: SinglePostHeaderProps) {
  if (!post.id) {
    return <div>Post not found</div>;
  }
  return (
    <>
      <section className="flex flex-col justify-center items-center w-1/2 bg-[#03193B] h-100 relative">
        {/* the date top left corjer */}

        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {formattedDate}
          </span>
        </div>

        {/* the date top left corjer */}
        <div
          className="text-4xl font-bold text-white mb-6 text-center"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="text-md text-gray-400 mb-6 text-center"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </section>
      <section className="w-1/2 flex justify-center items-center h-100 ">
        <Image
          src={post.jetpack_featured_media_url || "/images/c14-logo.png"}
          alt={post.title.rendered}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </section>
    </>
  );
}

export default SinglePostHeader;
