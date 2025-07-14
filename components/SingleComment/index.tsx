import Image from "next/image";
import React from "react";
import { Comment, Post } from "../../types/index";

function SingleComment({ comment }: { comment: Comment }) {
  return (
    <div
      key={comment.id}
      className="rounded-md p-2 border-b-gray-200 border-b-1 w-full flex flex-col items-end justify-center"
    >
      <div className="flex flex-col items-end gap-2 bg-gray-100 w-full justify-end">
        <div className="flex flex-row items-center gap-2">
          <section className="flex flex-col items-end gap-2">
            <p className="text-sm font-bold">{comment.author_name}</p>
            <div className="text-sm text-gray-500">{comment.content}</div>
          </section>
          <section className="border-1 border-black-200 rounded-lg p-1">
            <Image
              src={comment.author_image || "/images/c14-logo.png"}
              alt={comment.author_name}
              width={70}
              height={70}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default SingleComment;
