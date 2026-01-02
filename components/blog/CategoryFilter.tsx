import Link from "next/link";
import { WPCategory } from "@/lib/wp";

interface CategoryFilterProps {
    categories: WPCategory[];
    currentCategoryId?: number;
}

export default function CategoryFilter({ categories, currentCategoryId }: CategoryFilterProps) {
    if (!categories || categories.length === 0) return null;

    return (
        <div className="mb-10 overflow-x-auto pb-2">
            <div className="flex flex-wrap gap-2 justify-center">
                <Link
                    href="/blog"
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        !currentCategoryId
                            ? "bg-[#ad8f66] text-white shadow-md shadow-[#ad8f66]/25"
                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                >
                    All Posts
                </Link>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/blog/category/${category.slug}`}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            currentCategoryId === category.id
                                ? "bg-[#ad8f66] text-white shadow-md shadow-[#ad8f66]/25"
                                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                        }`}
                        dangerouslySetInnerHTML={{ __html: category.name }}
                    />
                ))}
            </div>
        </div>
    );
}
