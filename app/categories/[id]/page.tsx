import { getPostsByCategoryId, getCategories } from "@/services";
import PostsLayout from "@/components/PostsLayout";
import CategoriesFilter from "@/components/CategoryFilter";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryId = Number(params.id);
  const posts = await getPostsByCategoryId(categoryId);
  const categories = await getCategories();
  const currentCategory = categories.find((cat) => cat.id === categoryId);

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
          title={`פוסטים מקטגוריית ${currentCategory?.name}`}
        />
      </section>
    </main>
  );
}
