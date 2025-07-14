import { getCategories, getPosts } from "@/services";
import { Category, Post } from "@/types";
import PostHero from "@/components/PostHero";
import PostsLayout from "@/components/PostsLayout";
import CategoriesFilter from "@/components/CategoryFilter";

export default async function Home() {
  let posts: Post[] = [];
  let categories: Category[] = [];
  try {
    posts = await getPosts();
    categories = await getCategories();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  const heroPost = posts[0];

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        {heroPost ? (
          <PostHero post={heroPost} />
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">טוען פוסטים...</p>
          </div>
        )}
      </section>

      <CategoriesFilter
        categories={categories}
        title="קטגוריות"
        currentCategory={null as unknown as Category}
      />

      <PostsLayout posts={posts} title="חדשות אחרונות" />
    </main>
  );
}
