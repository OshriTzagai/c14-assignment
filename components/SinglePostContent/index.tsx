import { Post } from "@/types";
import React from "react";
interface SinglePostContentProps {
  post: Post;
}
function SinglePostContent({ post }: SinglePostContentProps) {
  return (
    <div
      className="max-w-5xl mx-auto px-4 py-6"
      dangerouslySetInnerHTML={{ __html: post.content.rendered }}
    />
  );
}

export default SinglePostContent;
