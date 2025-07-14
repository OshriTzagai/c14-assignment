import Image from "next/image";
import React from "react";
import { Comment } from "../../types/index";

function SingleComment({
  comment,
  handleDelete,
}: {
  comment: Comment;
  handleDelete: (id: number) => void;
}) {
  return (
    <div
      key={comment.id}
      className="relative rounded-md p-2 border-b-gray-200 border-b-1 w-full flex flex-col items-end justify-center"
    >
      <div className="relative flex flex-col items-end gap-2 bg-gray-100 w-full justify-end z-10">
        {comment.author_name === "את/ה הגבת" && (
          <button
            className="absolute top-2 left-5  bg-red-500 z-10 p-2 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
            onClick={() => {
              handleDelete(comment.id);
            }}
          >
            X
          </button>
        )}
        <div className="flex flex-row items-center gap-2">
          <section className="flex flex-col items-end gap-2">
            <p className="text-sm font-bold">
              {comment.author_name} | {comment.author_email}
            </p>
            <p className="text-sm text-gray-500">{comment.date}</p>
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
