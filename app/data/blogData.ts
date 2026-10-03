import content from "./content.json";

export interface BlogSection {
  heading?: string;
  text: string;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  shortDate: string;
  day: string;
  month: string;
  author: string;
  role: string;
  image: string;
  comments: number;
  content: BlogSection[];
}

export interface Category {
  name: string;
  count: string;
}

// All blog data now lives in content.json → "blogs" and "categories"
export const blogs: Blog[] = content.blogs as Blog[];
export const categories: Category[] = content.categories as Category[];
