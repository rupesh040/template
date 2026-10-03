"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Play,
} from "lucide-react";
import content from "../data/content.json";

type GalleryType = "photo" | "video";

interface GalleryItem {
  id: number;
  type: GalleryType;
  category: string;
  title: string;
  image: string;
}

const {
  badge,
  headingLine1,
  headingLine2,
  description,
  itemsPerPage: rawItemsPerPage,
  categories,
  items: rawItems,
} = content.gallery;

const galleryItems: GalleryItem[] = rawItems as GalleryItem[];
const ITEMS_PER_PAGE = rawItemsPerPage || 9;

export default function Gallery() {
  const [activeType, setActiveType] = useState<GalleryType>("photo");
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const typeMatches = item.type === activeType;

      const categoryMatches =
        activeCategory === "All Photos" || item.category === activeCategory;

      return typeMatches && categoryMatches;
    });
  }, [activeType, activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / ITEMS_PER_PAGE),
  );

  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const changeType = (type: GalleryType) => {
    setActiveType(type);
    setCurrentPage(1);
    setActiveCategory("All Photos");
  };

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5, totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [1, currentPage - 1, currentPage, currentPage + 1, totalPages];
  };

  const pageNumbers = getPageNumbers();

  return (
    <section className="min-h-screen bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <span className="inline-flex rounded-full bg-[#dff7e7] px-4 py-1.5 text-[11px] font-bold text-[#0c9d36] sm:text-[12px]">
            {badge}
          </span>

          <h1 className="mt-3 text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#062d4c] sm:text-[40px] lg:text-[44px]">
            {headingLine1}{" "}
            <span className="text-[#0b9e37]">{headingLine2}</span>
          </h1>

          <div className="mx-auto mt-2 h-[3px] w-[34px] rounded-full bg-[#0b9e37]" />

          <p className="mx-auto mt-4 max-w-[620px] text-[12px] leading-5 text-[#718191] sm:text-[14px] sm:leading-6">
            {description}
          </p>
        </div>
        <div className="mt-7 flex justify-center">
          <div className="inline-flex rounded-full bg-[#edf4f8] p-1">
            <button
              type="button"
              onClick={() => changeType("photo")}
              className={`flex min-w-[120px] items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold transition sm:min-w-[130px] ${
                activeType === "photo"
                  ? "bg-[#07534f] text-white shadow-sm"
                  : "text-[#092f4b]"
              }`}
            >
              <ImageIcon size={17} />
              Photos
            </button>

            <button
              type="button"
              onClick={() => changeType("video")}
              className={`flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-semibold transition sm:min-w-[130px] ${
                activeType === "video"
                  ? "bg-[#07534f] text-white shadow-sm"
                  : "text-[#092f4b]"
              }`}
            >
              <Play size={17} />
              Videos
            </button>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex min-w-max justify-center gap-2 px-1 lg:min-w-0 lg:flex-wrap">
            {categories.map((category) => {
              const active =
                activeCategory === category && activeType === "photo";

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => changeCategory(category)}
                  disabled={activeType === "video"}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-medium transition sm:px-5 sm:text-[12px] ${
                    active
                      ? "border-[#0b9e37] bg-[#0b9e37] text-white"
                      : "border-[#dfe7ed] bg-white text-[#092f4b] hover:border-[#0b9e37] hover:text-[#0b9e37]"
                  } ${
                    activeType === "video"
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        {currentItems.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[1.62] overflow-hidden rounded-[10px] bg-[#edf2f4]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {item.type === "video" && (
                  <div className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#0b9e37] shadow-lg">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-2xl bg-[#f7faf8]">
            <p className="text-sm text-[#718191]">No gallery items found.</p>
          </div>
        )}
        {totalPages > 1 && (
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dfe7ed] text-[#092f4b] transition hover:border-[#0b9e37] hover:text-[#0b9e37] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>

            {pageNumbers.map((page, index) => {
              const previousPage = pageNumbers[index - 1];

              const showDots =
                previousPage !== undefined && page - previousPage > 1;

              return (
                <div key={page} className="flex items-center gap-2">
                  {showDots && (
                    <span className="text-[13px] text-[#82909c]">...</span>
                  )}

                  <button
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-semibold transition ${
                      currentPage === page
                        ? "bg-[#0b9e37] text-white shadow-sm"
                        : "text-[#092f4b] hover:bg-[#e8f7ec] hover:text-[#0b9e37]"
                    }`}
                  >
                    {page}
                  </button>
                </div>
              );
            })}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dfe7ed] text-[#092f4b] transition hover:border-[#0b9e37] hover:text-[#0b9e37] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
