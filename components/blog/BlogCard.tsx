"use client";

import Link from "next/link";
import Image from "next/image";
import { WPPost } from "@/lib/wp";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/placeholder-blog.jpg"; // You might want to add a real placeholder
  const authorName = post._embedded?.author?.[0]?.name || "BNA Consulting";
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden">
        <Image
          src={featuredImage}
          alt={post.title.rendered}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#ad8f66]" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          {/* Optional: Add Author if needed */}
          {/* <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#ad8f66]" />
            <span>{authorName}</span>
          </div> */}
        </div>

        <Link href={`/blog/${post.slug}`} className="block mb-3">
          <h2
            className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#ad8f66] transition-colors line-clamp-2"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
        
        <div
          className="text-gray-600 line-clamp-3 mb-6 flex-grow"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />

        <div className="mt-auto pt-4 border-t border-gray-100">
             <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-[#ad8f66] font-semibold hover:text-[#8c7350] transition-colors"
                >
                Read Article 
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
        </div>
      </div>
    </article>
  );
}
