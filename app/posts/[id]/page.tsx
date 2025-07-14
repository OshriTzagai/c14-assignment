import CommentsBtn from "@/components/CommentsBtn";
import SinglePostComments from "@/components/SinglePostComments";
import SinglePostContent from "@/components/SinglePostContent";
import SinglePostHeader from "@/components/SinglePostHeader";
import { getPost } from "@/services";
import { Post } from "@/types";
import React from "react";
interface SinglePostProps {
  params: {
    id: string;
  };
}
async function SinglePost({ params }: SinglePostProps) {
  const { id } = params;
  const post: Post = await getPost(id);

  if (!post.id) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString("he-IL");

  return (
    <>
      <article className="flex flex-row items-center justify-between flex-wrap w-full max-w-7xl mx-auto px-4 py-8 relative">
        <CommentsBtn />
        <SinglePostHeader post={post} formattedDate={formattedDate} />
      </article>
      <SinglePostContent post={post} />
      <SinglePostComments post={post} />
    </>
  );
}

export default SinglePost;
