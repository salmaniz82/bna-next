
export const WP_API_URL = "https://bnaconsulting.co.uk/wp-json/wp/v2";

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      link: string;
    }>;
    "wp:term"?: Array<Array<{
        id: number;
        name: string;
        slug: string;
    }>>;
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
}

export type SearchResult = {
  id: number;
  title: string;
  url: string;
  type: string;
  subtype: string;
};

// Response wrapper for paginated results
export interface PaginatedResponse<T> {
  data: T;
  totalPages: number;
  totalItems: number;
}

export async function fetchPosts(page = 1, perPage = 10, categoryId?: number): Promise<PaginatedResponse<WPPost[]>> {
  let url = `${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`;
  
  if (categoryId) {
    url += `&categories=${categoryId}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    // Handle 400 Bad Request (e.g., page out of bounds) gracefully
    if (res.status === 400) {
        return { data: [], totalPages: 0, totalItems: 0 };
    }
    throw new Error("Failed to fetch posts");
  }

  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0");
  const totalItems = parseInt(res.headers.get("X-WP-Total") || "0");
  const data = await res.json();

  return { data, totalPages, totalItems };
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_API_URL}/posts?_embed&slug=${slug}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function fetchCategories(): Promise<WPCategory[]> {
  // Fetch all categories (up to 100 per page to be safe, loops if needed but for now 100 is likely enough)
  const res = await fetch(`${WP_API_URL}/categories?per_page=100&hide_empty=true`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export async function searchPosts(query: string, page = 1, perPage = 10): Promise<PaginatedResponse<WPPost[]>> {
  // We use the posts endpoint with search parameter to get full post data including _embed
  const res = await fetch(`${WP_API_URL}/posts?_embed&search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`);

  if (!res.ok) {
    return { data: [], totalPages: 0, totalItems: 0 };
  }

  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0");
  const totalItems = parseInt(res.headers.get("X-WP-Total") || "0");
  const data = await res.json();

  return { data, totalPages, totalItems };
}

export async function getSearchSuggestions(query: string): Promise<SearchResult[]> {
    const res = await fetch(`${WP_API_URL}/search?search=${encodeURIComponent(query)}&per_page=5&type=post&subtype=post`);
    if(!res.ok) return [];
    return res.json();
}

export async function fetchPageBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${WP_API_URL}/pages?slug=${slug}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const pages = await res.json();
  return pages.length > 0 ? pages[0] : null;
}
