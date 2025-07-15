import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PostHeroProps {
  post: Post;
}

export default function PostHero({ post }: PostHeroProps) {
  return (
    <section className="w-full mb-8">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
        <Image
          src={post.jetpack_featured_media_url || "/images/c14-logo.png"}
          alt={post.title.rendered}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 text-white">
          <div className="max-w-4xl mx-auto w-full md:flex flex-col justify-center items-baseline">
            <div className="mb-3 sm:mb-4">
              <span className="bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                חדשות
              </span>
            </div>

            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div
              className="text-sm sm:text-base md:text-lg text-gray-200 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />

            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <span>{new Date(post.date).toLocaleDateString("he-IL")}</span>
              <span>•</span>
              <Link href={`/posts/${post.id}`}>
                <span className="text-white underline cursor-pointer hover:text-gray-200 transition-colors">
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
