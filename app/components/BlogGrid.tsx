"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import content from "../data/content.json";

const blogs = content.blogs;
const blogsPerPage = 6;

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;

  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + blogsPerPage,
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            >
              <Link
                href={`/blogs/${blog.id}`}
                aria-label={`Read ${blog.title}`}
                className="relative block h-[210px] w-full overflow-hidden"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-3 flex h-[58px] w-[58px] flex-col items-center justify-center rounded-xl bg-[#11952b] text-white shadow-md">
                  <span className="text-lg font-bold leading-5">
                    {blog.day}
                  </span>

                  <span className="text-sm font-medium">
                    {blog.month}
                  </span>
                </div>
              </Link>

              <div className="p-5 sm:p-6">
                <span className="inline-flex rounded-full bg-[#e7f8eb] px-4 py-1.5 text-xs font-semibold text-[#11952b]">
                  {blog.category}
                </span>

                <h2 className="mt-4 line-clamp-2 min-h-[58px] text-xl font-bold leading-7 text-[#092a43]">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="transition-colors hover:text-[#11952b]"
                  >
                    {blog.title}
                  </Link>
                </h2>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#11952b] transition-colors hover:text-[#08751f]"
                >
                  Read More

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2 sm:mt-12">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#092a43] transition-all hover:border-[#11952b] hover:text-[#11952b] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1,
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  currentPage === page
                    ? "bg-[#11952b] text-white shadow-md"
                    : "border border-gray-200 bg-white text-[#092a43] hover:border-[#11952b] hover:text-[#11952b]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#092a43] transition-all hover:border-[#11952b] hover:text-[#11952b] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}