"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2, X } from "lucide-react";
import { getSearchSuggestions, SearchResult } from "@/lib/wp";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Close dropdown on click outside
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true);
        try {
          const suggestions = await getSearchSuggestions(query);
          setResults(suggestions);
          setIsOpen(true);
        } catch (error) {
          console.error("Search error:", error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-10" ref={wrapperRef}>
      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#ad8f66] transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-12 py-3 bg-white border border-gray-200 rounded-full leading-5 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ad8f66]/20 focus:border-[#ad8f66] transition-all shadow-sm"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
              if (results.length > 0) setIsOpen(true);
          }}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {isLoading ? (
                <Loader2 className="h-5 w-5 text-[#ad8f66] animate-spin" />
            ) : query ? (
                 <button
                    type="button"
                    onClick={clearSearch}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>
            ) : null}
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-2">
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Suggestions
              </h3>
            {results.map((result) => {
              // Extract slug from URL. Assumes URL structure like .../slug/ or .../slug
              // Removing trailing slash if present then popping the last segment
              const slug = result.url.replace(/\/$/, "").split("/").pop();
              
              return (
                <Link
                  key={result.id}
                  href={`/blog/${slug}`} 
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-900 truncate" dangerouslySetInnerHTML={{ __html: result.title }} />
                </Link>
              );
            })}
          </div>
            <button
                onClick={handleSubmit} 
                className="w-full block px-4 py-3 text-center text-sm font-medium text-[#ad8f66] bg-gray-50 hover:bg-gray-100 transition-colors border-t border-gray-100"
            >
                View all results for "{query}"
            </button>
        </div>
      )}
    </div>
  );
}
