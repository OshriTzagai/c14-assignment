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
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center w-full max-w-7xl mx-auto px-4">
          {title}
        </h2>
      )}
      <div className="flex flex-wrap sm:flex-row justify-center items-center gap-2 sm:gap-3 w-full max-w-7xl mx-auto px-4 py-4 sm:py-8">
        {categories.map((category) => (
          <Link
            href={`/categories/${category.id}`}
            key={category.id}
 className="flex flex-row justify-center items-center text-xs sm:text-sm text-gray-600 cursor-pointer hover:text-white w-full sm:w-auto min-w-[120px] sm:min-w-[140px] text-center h-8 sm:h-10 border border-gray-300 hover:bg-[#03193B] hover:border-[#03193B] rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg transform hover:scale-105 px-2 sm:px-4"

            style={{
              backgroundColor:
                currentCategory?.id === category.id ? "#03193B" : "white",
              color: currentCategory?.id === category.id ? "white" : "gray",
            }}
          >
            <div key={category.id}>
              <h6 className="text-xs sm:text-sm font-medium truncate">
                {category.name}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CategoriesFilter;
