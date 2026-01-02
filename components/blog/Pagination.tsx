"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    // If baseUrl already has query params, append page param
    if (baseUrl.includes("?")) {
      return `${baseUrl}&page=${page}`;
    }
    return `${baseUrl}?page=${page}`;
  };

  const pages = [];
  // Logic to show a window of pages (e.g., 1, 2, ... 5, 6, 7 ... 10) can be complex.
  // For simplicity: show prev, next, and current. Or strict range.
  // Let's implement a simple range of 5 pages around current.
  
  const range = 2; // Neighbours on each side
  
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - range && i <= currentPage + range)
    ) {
        pages.push(i);
    }
  }

  // Insert ellipses
  const pagesWithEllipsis: (number | string)[] = [];
  let prev: number | null = null;
  
  for (const p of pages) {
      if (prev) {
          if (p - prev === 2) {
              pagesWithEllipsis.push(prev + 1);
          } else if (p - prev !== 1) {
              pagesWithEllipsis.push("...");
          }
      }
      pagesWithEllipsis.push(p);
      prev = p;
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-12 mb-8">
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
      )}

      {pagesWithEllipsis.map((page, index) => (
        <div key={index}>
            {page === "..." ? (
                <span className="px-3 py-2 text-gray-400">...</span>
            ) : (
                <Link
                href={createPageUrl(page as number)}
                className={`flex items-center justify-center min-w-[40px] h-10 px-3 rounded-lg border text-sm font-medium transition-colors ${
                    currentPage === page
                    ? "bg-[#ad8f66] border-[#ad8f66] text-white shadow-md shadow-[#ad8f66]/20"
                    : "border-gray-200 hover:bg-gray-50 text-gray-600"
                }`}
                >
                {page}
                </Link>
            )}
        </div>
      ))}

      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors"
          aria-label="Next Page"
        >
          <ChevronRight className="w-5 h-5" />
        </Link>
      )}
    </nav>
  );
}
