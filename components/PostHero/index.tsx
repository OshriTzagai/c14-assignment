import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PostHeroProps {
  post: Post;
}

export default function PostHero({ post }: PostHeroProps) {
  return (
    <section className="w-full mb-8">
      <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={post.jetpack_featured_media_url || "/images/c14-logo.png"}
          alt={post.title.rendered}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                חדשות
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div
              className="text-lg md:text-xl text-gray-200 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />

            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>{new Date(post.date).toLocaleDateString("he-IL")}</span>
              <span>•</span>
              <Link href={`/posts/${post.id}`}>
                <span className="text-white underline cursor-pointer">
                  מעבר לפוסט
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
