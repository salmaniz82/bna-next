import { fetchPosts, fetchCategories } from "@/lib/wp";
import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";
import CategoryFilter from "@/components/blog/CategoryFilter";
import SearchBar from "@/components/blog/SearchBar";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Define SearchParams type for Next.js 15+
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
type Params = Promise<{ slug: string }>;

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const params = await props.params;
  const categories = await fetchCategories();
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found | BNA Consulting",
    };
  }

  return {
    title: `${category.name} | Blog | BNA Consulting`,
    description: `Articles in ${category.name} category.`,
  };
}

export default async function CategoryPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const slug = params.slug;

  const categories = await fetchCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  // Fetch posts for this category
  const postsData = await fetchPosts(page, 9, category.id);
  const { data: posts, totalPages } = postsData;

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Header Section */}
      <div className="bg-[#1a1a1a] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            {category.description || `Browse our latest articles in ${category.name}.`}
          </p>
          <SearchBar />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <CategoryFilter categories={categories} currentCategoryId={category.id} />

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
              baseUrl={`/blog/category/${slug}`}
            />
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No posts found</h3>
            <p className="text-gray-600">
              There are no articles in this category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
