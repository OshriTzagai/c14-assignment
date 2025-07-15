import { Post } from "@/types";
import PostCard from "@/components/PostCard";

interface PostsLayoutProps {
  posts: Post[];
  title?: string;
}

export default function PostsLayout({ posts, title }: PostsLayoutProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">אין פוסטים זמינים</p>
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl text-center font-bold text-gray-900 mb-6 ">
          {title}
        </h2>
      )}
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
