import { Category } from "@/types";
import Link from "next/link";
import React from "react";

function CategoriesFilter({
  categories,
  title,
  currentCategory,
}: {
  categories: Category[];
  title: string;
  currentCategory: Category;
}) {
  if (!categories || categories.length === 0) {
    return null;
  }
  return (
    <>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right w-full max-w-7xl mx-auto px-4">
          {title}
        </h2>
      )}
      <div className="flex flex-row justify-center items-center gap-3 w-full max-w-7xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <Link
            href={`/categories/${category.id}`}
            key={category.id}
            className="flex flex-row justify-center items-center text-sm text-gray-600 cursor-pointer hover:text-white w-full text-center h-10 border border-gray-300 hover:bg-[#03193B] hover:border-[#03193B    ] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            style={{
              backgroundColor:
                currentCategory?.id === category.id ? "#03193B" : "white",
              color: currentCategory?.id === category.id ? "white" : "gray",
            }}
          >
            <div key={category.id}>
              <h6 className="text-sm font-medium">{category.name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CategoriesFilter;
