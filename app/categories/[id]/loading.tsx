import React from "react";

function CategoryLoading() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <div className="h-8 bg-gray-300 rounded-lg w-64 mx-auto animate-pulse"></div>
        </div>

        <div className="mb-6 w-full max-w-7xl mx-auto px-4 py-8 flex flex-row justify-center items-center gap-3">
          <div className="h-6 bg-gray-300 rounded w-48 animate-pulse"></div>
        </div>
        <div className="mb-6 w-full max-w-7xl mx-auto px-4 py-8 flex flex-row justify-center items-center gap-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-10 bg-gray-300 rounded-lg w-24 animate-pulse"
            ></div>
          ))}
        </div>

        <div className="h-96 bg-gray-300 rounded-lg animate-pulse"></div>
      </section>
    </main>
  );
}

export default CategoryLoading;
