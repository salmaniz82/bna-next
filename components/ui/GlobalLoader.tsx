"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";

export default function GlobalLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // When path or params change, we assume navigation completed
    setIsLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Global click listener to detect internal link clicks
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a");
      if (
        target &&
        target.href &&
        target.href.startsWith(window.location.origin) &&
        target.target !== "_blank" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey &&
        !target.href.includes("#") &&
        target.href !== window.location.href
      ) {
        setIsLoading(true);
      }
    };

    // Also handle form submissions if needed, but for now links are priority
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-24 right-4 z-50 animate-in fade-in duration-200">
      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-100">
        <LoadingSpinner className="h-6 w-6 !p-0" />
      </div>
    </div>
  );
}
