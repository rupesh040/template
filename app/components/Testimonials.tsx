"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import content from "../data/content.json";

const { heading, subheading, description, items: testimonials } =
  content.testimonials;

export default function Testimonials() {
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
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollTestimonials = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector<HTMLElement>("[data-testimonial-card]");
    const cardWidth = card?.offsetWidth || 380;
    const gap = typeof window !== "undefined" && window.innerWidth >= 640 ? 24 : 20;
    const scrollAmount = cardWidth + gap;

    slider.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 400);
  };

  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute -left-[70px] -top-[80px] h-[180px] w-[180px] rounded-full bg-[#f4f9f8] sm:h-[230px] sm:w-[230px]" />
      <div className="pointer-events-none absolute -bottom-[100px] -left-[80px] h-[230px] w-[230px] rounded-full bg-[#f5faf9]" />
      <div className="pointer-events-none absolute -bottom-[100px] right-[7%] hidden h-[180px] w-[180px] rounded-full bg-[#f6faf9] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[850px] text-center">
          <Image
            src="/leaf.png"
            alt="leaf"
            width={60}
            height={60}
            className="absolute left-0 top-0 rotate-[240deg]"
          />
          <Image
            src="/leaf.png"
            alt="leaf"
            width={60}
            height={60}
            className="absolute right-0 top-0"
          />

          <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-tight text-[#062d4c] sm:text-[46px] lg:text-[50px]">
            {heading}
          </h2>

          <h3 className="mt-1 text-[34px] font-extrabold leading-[1.05] text-[#10a83a] sm:text-[43px] lg:text-[47px]">
            {subheading}
          </h3>

          <p className="mt-4 text-[14px] leading-6 text-[#536b7e] sm:text-[15px]">
            {description}
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <button
            type="button"
            onClick={() => scrollTestimonials("left")}
            disabled={!canScrollLeft}
            aria-label="Previous testimonials"
            className="absolute -left-2 top-1/2 z-30 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#092f4b] shadow-[0_6px_25px_rgba(8,45,76,0.10)] transition hover:bg-[#10aa3a] hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:-left-5 sm:h-[54px] sm:w-[54px] lg:-left-6"
          >
            <ChevronLeft size={27} strokeWidth={1.8} />
          </button>

          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollTestimonials("right")}
            disabled={!canScrollRight}
            aria-label="Next testimonials"
            className="absolute -right-2 top-1/2 z-30 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#092f4b] shadow-[0_6px_25px_rgba(8,45,76,0.10)] transition hover:bg-[#10aa3a] hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:-right-5 sm:h-[54px] sm:w-[54px] lg:-right-6"
          >
            <ChevronRight size={27} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-5px] right-[-10px] hidden rotate-[-20deg] text-[#d9f0dc] lg:block">
        <LeafDecoration />
      </div>
    </section>
  );
}

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  review: string;
  rating?: number;
}

function TestimonialCard({ name, role, image, review, rating = 5 }: TestimonialProps) {
  return (
    <article
      data-testimonial-card
      className="flex min-w-[calc(100vw-50px)] max-w-[calc(100vw-50px)] shrink-0 snap-start flex-col sm:min-w-[360px] sm:max-w-[360px] md:min-w-[calc((100%-24px)/2)] md:max-w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-48px)/3)] lg:max-w-[calc((100%-48px)/3)]"
    >
      <div className="relative flex min-h-[275px] flex-col rounded-[14px] bg-white px-7 py-6 shadow-[0_5px_25px_rgba(8,45,76,0.07)] sm:min-h-[280px] sm:px-8">
        <div className="text-[48px] font-black leading-[0.7] text-[#10b33c]">
          “
        </div>

        <p className="mt-4 text-[15px] leading-6 text-[#243e56] sm:text-[16px] sm:leading-7">
          {review}
        </p>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div
            className="flex gap-[2px] text-[#ffbd00]"
            aria-label="5 out of 5 stars"
          >
            {"★★★★★".split("").map((_, index) => (
              <span key={index} className="text-[20px]">
                ★
              </span>
            ))}
          </div>
          <div className="text-[65px] font-black leading-[0.45] text-[#d9f1df]">
            ”
          </div>
        </div>

        <div className="absolute -bottom-[14px] left-[35px] h-[28px] w-[28px] rotate-45 bg-white" />
      </div>

      <div className="mt-6 flex items-center gap-4 px-1">
        <div className="relative h-[78px] w-[78px] shrink-0 overflow-hidden rounded-full border-[2px] border-[#bce8c6] p-[3px]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="78px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-bold text-[#092f4b]">{name}</h3>
          <p className="mt-1 text-[14px] text-[#536b7e]">{role}</p>
        </div>
      </div>
    </article>
  );
}

function LeafDecoration() {
  return (
    <svg
      width="100"
      height="130"
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 120C80 80 65 45 25 15"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M57 75C72 78 88 70 96 55C78 52 65 58 57 75Z"
        fill="currentColor"
      />

      <path
        d="M38 52C27 51 14 43 8 30C23 29 34 37 38 52Z"
        fill="currentColor"
      />

      <path
        d="M73 101C83 102 93 97 99 87C87 85 78 91 73 101Z"
        fill="currentColor"
      />
    </svg>
  );
}