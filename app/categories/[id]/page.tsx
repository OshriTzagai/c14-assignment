import { getPostsByCategoryId, getCategories } from "@/services";
import PostsLayout from "@/components/PostsLayout";
import CategoriesFilter from "@/components/CategoryFilter";
import { Category } from "@/types";

type Params = Promise<{ id: string }>;

export default async function CategoryPage({ params }: { params: Params }) {
  const { id } = await params;
  const categoryId = Number(id);
  const posts = await getPostsByCategoryId(categoryId);
  const categories = await getCategories();
  const currentCategory = categories.find((cat) => cat.id === categoryId);

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          {currentCategory?.name || "לא נמצאה"}
        </h1>

        <CategoriesFilter
          categories={categories}
          title="Sort By Category"
          currentCategory={currentCategory as Category}
        />

        <PostsLayout
          posts={posts}
          title={`Posts from ${currentCategory?.name}`}
        />
      </section>
    </main>
  );
}
