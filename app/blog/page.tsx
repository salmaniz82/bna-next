import { fetchPosts, fetchCategories } from "@/lib/wp";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import CategoryFilter from "@/components/blog/CategoryFilter";
import SearchBar from "@/components/blog/SearchBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BNA Consulting",
  description: "Insights, news, and updates from BNA Consulting.",
};

// Define SearchParams type for Next.js 15+
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const categoryId = searchParams.category
    ? parseInt(searchParams.category as string)
    : undefined;

  // Fetch data in parallel
  const [postsData, categories] = await Promise.all([
    fetchPosts(page, 9, categoryId),
    fetchCategories(),
  ]);

  const { data: posts, totalPages } = postsData;

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <div className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Latest Insights
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Expert analysis, industry news, and financial advice to help you navigate the complex world of business and finance.
          </p>
          <SearchBar />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <CategoryFilter categories={categories} currentCategoryId={categoryId} />

        {posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              baseUrl={categoryId ? `/blog?category=${categoryId}` : "/blog"}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h3>
            <p className="text-gray-600">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
