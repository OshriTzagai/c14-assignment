import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full flex-shrink-0 cursor-pointer sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
      <div className="relative h-48 md:h-20 lg:h-48 w-full">
        <Image
          src={post.jetpack_featured_media_url || "/images/c14-logo.png"}
          alt={post.title.rendered}
          width={300}
          height={300}
          className="object-cover w-full h-full hover:scale-125 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            חדשות
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-lg font-bold mb-3 line-clamp-2 text-gray-900 hover:text-red-600 transition-colors duration-200"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="text-sm text-gray-600 mb-4 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{new Date(post.date).toLocaleDateString("he-IL")}</span>
          <Link
            href={`/posts/${post.id}`}
            className="text-red-600 font-semibold underline hover:text-red-800 transition-colors duration-200"
          >
            מעבר לפוסט
          </Link>
        </div>
      </div>
    </article>
  );
}
