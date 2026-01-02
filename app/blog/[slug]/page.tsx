import { fetchPostBySlug, fetchPosts } from "@/lib/wp";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronLeft, User, Clock } from "lucide-react";
import { Metadata } from "next";

// Helper to estimate reading time
function getReadingTime(text: string) {
  const wpm = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: {
      absolute: `${post.title.rendered} | BNA Consulting`,
    },
    description: post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
        images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? [post._embedded?.["wp:featuredmedia"]?.[0]?.source_url] : []
    }
  };
}

export default async function SinglePostPage(props: { params: Params }) {
  const params = await props.params;
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name || "BNA Consulting";
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const readingTime = getReadingTime(post.content.rendered.replace(/<[^>]*>/g, ""));

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-gray-900">
        {featuredImage && (
          <>
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full text-center text-white space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Link 
                href="/blog" 
                className="inline-flex items-center text-sm font-medium text-white/80 hover:text-[#ad8f66] transition-colors mb-4"
            >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Blog
            </Link>
            
            <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#ad8f66]" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#ad8f66]" />
                <span>{authorName}</span>
              </div>
               <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#ad8f66]" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div 
            className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#ad8f66] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
        
        {/* Author Bio or Share (Optional) */}
        <div className="mt-16 pt-8 border-t border-gray-100">
             <Link href="/blog" className="text-[#ad8f66] font-semibold hover:text-[#8c7350] transition-colors flex items-center gap-2">
                <ChevronLeft className="w-5 h-5" />
                See all articles
             </Link>
        </div>
      </div>
    </article>
  );
}

// Optional: Generate static params for ISR
export async function generateStaticParams() {
    // Generate params for the first few pages of posts for faster build/initial load
    try {
        const { data: posts } = await fetchPosts(1, 20); // Get recent 20 posts
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (e) {
        return [];
    }
}
