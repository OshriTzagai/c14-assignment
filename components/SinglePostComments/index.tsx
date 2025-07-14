"use client";
import { Comment } from "@/types";
import React, { useState } from "react";
import SingleComment from "../SingleComment";

function SinglePostComments() {
  const initialDummyComments: Comment[] = [
    {
      id: 1,
      author_name: "ינון מגל",
      author_email: "yinon@gmail.com",
      content: "הפוסט מעולה",
      date: "2021-01-01",
      author_image: "/images/c14-logo.png",
    },

    {
      id: 2,
      author_name: "אלעד שמואלי",
      author_email: "al@gmail.com",
      content: "הפוסט מעולה מאוד",
      date: "2025-01-01",
      author_image: "/images/c14-logo.png",
    },
    {
      id: 3,
      author_name: "אורי בן שמואל",
      author_email: "ori@gmail.com",
      content: "הפוסט מעולה מאוד",
      date: "2025-01-01",
      author_image: "/images/c14-logo.png",
    },

    {
      id: 4,
      author_name: "אורי בן שמואל",
      author_image: "/images/c14-logo.png",
      author_email: "ori@gmail.com",
      content: "הפוסט מעולה מאוד",
      date: "2025-01-01",
    },
  ];
  const [comments, setComments] = useState<Comment[]>(initialDummyComments);
  const [comment, setComment] = useState<string>("");

  const handleDelete = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  return (
    <div
      className="flex flex-col items-end justify-center w-full max-w-7xl mx-auto px-4 py-8 relative comments-container"
      id="comments-container"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-right w-full bg-[#03193B] rounded-md p-2">
        תגובות - <span className="text-white">({comments.length})</span>
      </h2>

      {/* // add comments sectionnn heree */}

      <div className="flex flex-col items-end justify-center w-full max-w-7xl mx-auto px-4 py-8 relative comments-container gap-4">
        <input
          type="text"
          value={comment}
          placeholder="הוסף תגובה"
          className="w-full h-20 text-right rounded-md p-2 border-b-gray-200 border-b-1"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="bg-[#03193B] text-white rounded-md p-2"
          onClick={(e) => {
            e.preventDefault();
            setComments([
              {
                id: comments.length + 1,
                content: comment,
                author_name: "את/ה הגבת",
                author_email: "youyou@gmail.com",
                date: "2025-01-01",
                author_image: "/images/c14-logo.png",
              },
              ...comments,
            ]);
            setComment("");
          }}
        >
          שליחה
        </button>
      </div>
      <div className="flex flex-col items-end justify-center w-full max-w-7xl mx-auto px-4 py-8 relative comments-container gap-4">
        {comments.map((comment) => (
          <SingleComment
            key={comment.id}
            comment={comment}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default SinglePostComments;
