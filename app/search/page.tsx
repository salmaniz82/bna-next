import { searchPosts } from "@/lib/wp";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import SearchBar from "@/components/blog/SearchBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results | BNA Consulting",
  description: "Search results for BNA Consulting blog.",
};

export const dynamic = 'force-dynamic';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SearchPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const query = (searchParams.q as string) || "";
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;

  // Fetch search results
  // Note: searchPosts utility returns PaginatedResponse<WPPost[]>
  // The WP API might return different structures for 'search' endpoint vs 'posts?search='
  // In lib/wp.ts I used 'posts?_embed&search=' so it returns full posts which is perfect for reuse.
  
  const { data: posts, totalPages, totalItems } = await searchPosts(query, page, 9);

  return (
    <main className="min-h-screen bg-gray-50/50">
       <div className="bg-[#1a1a1a] text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-serif font-bold mb-6">
                Search Results
            </h1>
            <SearchBar />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">
            {query ? (
                <>
                    Found {totalItems} results for <span className="text-[#ad8f66]">"{query}"</span>
                </>
            ) : (
                "Please enter a search term"
            )}
        </h2>

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
              baseUrl={`/search?q=${encodeURIComponent(query)}`}
            />
          </>
        ) : query ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No results found</h3>
            <p className="text-gray-600">
              We couldn't find any articles matching your search. Try different keywords.
            </p>
          </div>
        ) : null}
      </div>
    </main>
  );
}
