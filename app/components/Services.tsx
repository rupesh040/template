"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import content from "../data/content.json";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  CookingPot,
  Bath,
  Sofa,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  CookingPot,
  Bath,
  Sofa,
};

interface ServicesProps {
  limit?: number;
  showViewAll?: boolean;
  layout?: "slider" | "grid";
}

export default function Services({
  limit,
  showViewAll,
  layout,
}: ServicesProps = {}) {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services";
  const effectiveLayout = layout ?? (isServicesPage ? "grid" : "slider");
  const {
    badge,
    heading,
    headingHighlight,
    description,
    leafImage = "/leaf.png",
    viewAllButton,
  } = content.servicesSection;

  const allServices = content.services;

  const cardLimit = limit !== undefined ? limit : isServicesPage ? 0 : 6;
  const displayedServices =
    cardLimit > 0 ? allServices.slice(0, cardLimit) : allServices;
  const shouldShowViewAll =
    showViewAll !== undefined ? showViewAll : !isServicesPage;

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    setCanScrollLeft(slider.scrollLeft > 5);
    setCanScrollRight(slider.scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    if (effectiveLayout === "slider") {
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => window.removeEventListener("resize", checkScroll);
    }
  }, [effectiveLayout, displayedServices.length]);

  const scrollServices = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = slider.clientWidth * 0.85;
    slider.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute -left-20 top-0 h-[180px] w-[180px] rounded-full bg-[#f4f8f9] sm:h-[230px] sm:w-[230px]" />
      <div className="pointer-events-none absolute -right-16 top-[130px] h-[150px] w-[150px] rounded-full bg-[#f7fafb]" />
      <div className="pointer-events-none absolute left-[52%] top-[100px] h-[100px] w-[100px] rounded-full bg-[#f6fafb]" />

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[950px] text-center">
          <Image
            src={leafImage}
            alt="leaf"
            width={80}
            height={80}
            className="pointer-events-none absolute left-0 top-0 rotate-[240deg]"
          />

          <p className="text-[12px] font-bold tracking-[4px] text-[#12aa3b] sm:text-[13px] sm:tracking-[5px]">
            {badge}
          </p>

          <h2 className="mt-3 text-[34px] font-extrabold leading-tight tracking-tight text-[#062d4c] sm:text-[43px] lg:text-[48px]">
            {heading}{" "}
            <span className="text-[#10aa3a]">{headingHighlight}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-[13px] leading-6 text-[#607386] sm:text-[14px]">
            {description}
          </p>

          <Image
            src={leafImage}
            alt="leaf"
            width={80}
            height={80}
            className="pointer-events-none absolute right-0 top-0"
          />
        </div>

        {effectiveLayout === "grid" ? (
          <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {displayedServices.map((service) => {
              const Icon = iconMap[service.icon] ?? Home;
              return (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  icon={Icon}
                  darkIcon={service.darkIcon}
                  isGrid={true}
                />
              );
            })}
          </div>
        ) : (
          <div className="relative mt-10 sm:mt-12">
            <button
              type="button"
              onClick={() => scrollServices("left")}
              disabled={!canScrollLeft}
              aria-label="Previous services"
              className="absolute -left-2 top-[calc(50%-10px)] z-30 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#10aa3a] shadow-[0_5px_25px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#10aa3a] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:-left-5 sm:h-[52px] sm:w-[52px] lg:-left-6"
            >
              <ChevronLeft size={26} strokeWidth={2.2} className="-ml-0.5" />
            </button>

            <div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
            >
              {displayedServices.map((service) => {
                const Icon = iconMap[service.icon] ?? Home;
                return (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    icon={Icon}
                    darkIcon={service.darkIcon}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollServices("right")}
              disabled={!canScrollRight}
              aria-label="Next services"
              className="absolute -right-2 top-[calc(50%-10px)] z-30 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#10aa3a] shadow-[0_5px_25px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#10aa3a] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:-right-5 sm:h-[52px] sm:w-[52px] lg:-right-6"
            >
              <ChevronRight size={26} strokeWidth={2.2} className="ml-0.5" />
            </button>
          </div>
        )}

        {shouldShowViewAll && (
          <div className="mt-8 flex justify-center sm:mt-10">
            <Link
              href={viewAllButton.href}
              className="group inline-flex h-[54px] items-center gap-4 rounded-full bg-[#10ad3b] px-8 text-[14px] font-bold text-white shadow-md transition hover:bg-[#07952f]"
            >
              <span>{viewAllButton.label}</span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  darkIcon: boolean;
  isGrid?: boolean;
}

function ServiceCard({
  id,
  title,
  description,
  image,
  icon: Icon,
  darkIcon,
  isGrid = false,
}: ServiceCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[40px] border border-[#eef2f3] bg-white shadow-[0_8px_30px_rgba(8,45,76,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(8,45,76,0.12)] ${
        isGrid
          ? "w-full max-w-[320px]"
          : "min-w-[270px] max-w-[270px] flex-shrink-0 snap-center sm:min-w-[290px] sm:max-w-[290px] lg:min-w-[250px] lg:max-w-[250px] xl:min-w-[270px] xl:max-w-[270px]"
      }`}
    >
      <Link
        href={`/serviceDetail/${id}`}
        aria-label={`View details for ${title}`}
        className="relative mx-auto mt-4 block aspect-square w-[calc(100%-24px)] overflow-hidden rounded-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 35vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div
        className={`relative z-10 mx-auto -mt-8 flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border-[3px] border-white shadow-sm ${
          darkIcon ? "bg-[#092a43] text-white" : "bg-[#12b43c] text-white"
        }`}
      >
        <Icon size={25} strokeWidth={1.8} />
      </div>

      <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-2 text-center">
        <h3 className="text-[16px] font-bold leading-tight text-[#122f48]">
          <Link
            href={`/serviceDetail/${id}`}
            className="transition-colors hover:text-[#12b43c]"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-2 min-h-[48px] max-w-[220px] text-[12px] leading-5 text-[#65788a]">
          {description}
        </p>

        <div className="mt-auto flex w-full justify-center pt-3">
          <Link
            href={`/serviceDetail/${id}`}
            aria-label={`View ${title}`}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#12b43c] text-white transition-all duration-300 hover:scale-110 hover:bg-[#07972f]"
          >
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </article>
  );
}