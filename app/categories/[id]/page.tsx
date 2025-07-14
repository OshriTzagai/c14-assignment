// app/category/[id]/page.tsx
import { getPostsByCategoryId, getCategories } from "@/services";
import PostsLayout from "@/components/PostsLayout";
import CategoriesFilter from "@/components/CategoryFilter";
import React from "react";

async function PostsByCategory({ params }: { params: { id: number } }) {
  const { id } = params;
  const posts = await getPostsByCategoryId(Number(id));
  const categories = await getCategories();
  const currentCategory = categories.find((cat) => cat.id === Number(id));

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          קטגוריה: {currentCategory?.name || "לא נמצאה"}
        </h1>

        <CategoriesFilter
          categories={categories}
          title="סנן לפי קטגוריה"
          currentCategory={currentCategory}
        />

        <PostsLayout
          posts={posts}
          title={`${currentCategory?.name} פוסטים מקטגוריית `}
        />
      </section>
    </main>
  );
}

export default PostsByCategory;
