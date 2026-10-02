import { notFound } from "next/navigation";
import { blogs, categories } from "../../data/blogData";
import AboutHero from "../../components/AboutHero";
import BlogDetails from "../../components/BlogDetails";
import BlogGrid from "../../components/BlogGrid";

export async function generateStaticParams() {
  return blogs.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);
  if (!blog) return {};
  return {
    title: `${blog.title} | PureShine Blog`,
    description: blog.content[0]?.text.slice(0, 155),
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) notFound();

  // Recent posts = all other blogs (excluding current)
  const recentPosts = blogs.filter((b) => b.id !== id);

  return (
    <>
      <AboutHero
        title={blog.title}
        breadcrumb={blog.category}
        backgroundImage="/about-hero.webp"
      />

      <BlogDetails
        blog={blog}
        recentPosts={recentPosts}
        categories={categories}
      />

      {/* Other articles */}
      <BlogGrid />
    </>
  );
}