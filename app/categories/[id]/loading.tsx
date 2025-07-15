import React from "react";

function CategoryLoading() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <div className="h-8 bg-gray-300 rounded-lg w-64 mx-auto animate-pulse"></div>
        </div>

        <div className="mb-6 w-full max-w-7xl mx-auto px-4 py-4 sm:py-8 flex flex-wrap sm:flex-row justify-center items-center gap-2 sm:gap-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-8 sm:h-10 bg-gray-300 rounded-lg w-full sm:w-auto min-w-[120px] sm:min-w-[140px] animate-pulse"
            ></div>
          ))}
        </div>

        <div className="h-96 bg-gray-300 rounded-lg animate-pulse"></div>
      </section>
    </main>
  );
}

export default CategoryLoading;
