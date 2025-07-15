"use client";
import React from "react";

function CommentsBtn() {
  const navigateToComments = () => {
    const commentsContainer = document.getElementById("comments-container");
    if (commentsContainer) {
      commentsContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed top-25 right-4 z-50"
      onClick={navigateToComments}
      id="comments-btn"
    >
      <div className="w-full bg-red-500 h-10 border-1 border-white rounded-md p-5 flex items-center justify-center cursor-pointer hover:bg-red-600 hover:border-red-600 transition-all duration-300">
        <p className="text-white text-sm">אל התגובות לחץ כאן</p>
      </div>
    </div>
  );
}

export default CommentsBtn;
