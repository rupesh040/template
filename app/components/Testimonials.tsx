"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Delhi",
    image: "/testimonials/priya.png",
    review:
      "Excellent service! The team was punctual, professional and left our home spotlessly clean. I’m really impressed with their attention to detail. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    role: "Business Owner, Noida",
    image: "/testimonials/rahul.png",
    review:
      "We hired them for office cleaning and the results are amazing. The workspace feels fresher, cleaner and more productive. Great team and very reliable service.",
  },
  {
    name: "Anjali Verma",
    role: "Apartment Resident, Gurgaon",
    image: "/testimonials/anjali.png",
    review:
      "Very professional and trustworthy cleaning service. They cleaned my apartment thoroughly and used eco-friendly products, which I really appreciate. Will definitely book again!",
  },
  {
    name: "Amit Kapoor",
    role: "Homeowner, Noida",
    image: "/testimonials/amit.jpg",
    review:
      "The cleaning team arrived on time and did an excellent job. Everything looked fresh and spotless after the service.",
  },
  {
    name: "Neha Singh",
    role: "Working Professional, Delhi",
    image: "/testimonials/neha.jpg",
    review:
      "Very smooth booking process and excellent cleaning quality. The staff was polite, careful and professional throughout.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);


  /* =========================================================
     CHECK SCROLL POSITION
  ========================================================= */

  const checkScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    setCanScrollLeft(
      slider.scrollLeft > 5
    );

    setCanScrollRight(
      slider.scrollLeft < maxScroll - 5
    );
  };


  /* =========================================================
     SCROLL CAROUSEL
  ========================================================= */

  const scrollTestimonials = (
    direction: "left" | "right"
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card =
      slider.querySelector<HTMLElement>(
        "[data-testimonial-card]"
      );

    const cardWidth =
      card?.offsetWidth || 400;

    const gap = 24;

    slider.scrollBy({
      left:
        direction === "right"
          ? cardWidth + gap
          : -(cardWidth + gap),
      behavior: "smooth",
    });

    setTimeout(checkScroll, 450);
  };


  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Top-left circle */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[70px]
          -top-[80px]
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#f4f9f8]

          sm:h-[230px]
          sm:w-[230px]
        "
      />


      {/* Bottom-left circle */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[100px]
          -left-[80px]
          h-[230px]
          w-[230px]
          rounded-full
          bg-[#f5faf9]
        "
      />


      {/* Bottom-right circle */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[100px]
          right-[7%]
          hidden
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#f6faf9]

          lg:block
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-5

          sm:px-8

          lg:px-12
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="
            mx-auto
            max-w-[850px]
            text-center
            relative
          "
        >
              <Image src="/leaf.png" alt="leaf" width={80} height={80} className="absolute top-0 left-0 rotate-[240deg]"/>
                <Image src="/leaf.png" alt="leaf" width={80} height={80} className="absolute top-0 right-0"/>
              

          <h2
            className="
              text-[36px]
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-[#062d4c]

              sm:text-[46px]

              lg:text-[50px]
            "
          >
            Our Happy Clients
          </h2>

          <h3
            className="
              mt-1
              text-[34px]
              font-extrabold
              leading-[1.05]
              text-[#10a83a]

              sm:text-[43px]

              lg:text-[47px]
            "
          >
            Say It Best
          </h3>


          <p
            className="
              mt-4
              text-[14px]
              leading-6
              text-[#536b7e]

              sm:text-[15px]
            "
          >
            Here's what our valued clients have to say
            about our cleaning services.
          </p>

        </div>


        {/* ===================================================
            CAROUSEL
        ==================================================== */}

        <div className="relative mt-10 sm:mt-12">

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={() =>
              scrollTestimonials("left")
            }
            disabled={!canScrollLeft}
            aria-label="Previous testimonials"
            className="
              absolute
              left-0
              top-1/2
              z-30
              flex
              h-[48px]
              w-[48px]
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#092f4b]
              shadow-[0_6px_25px_rgba(8,45,76,0.10)]
              transition

              hover:bg-[#10aa3a]
              hover:text-white

              disabled:pointer-events-none
              disabled:opacity-30

              sm:h-[54px]
              sm:w-[54px]
            "
          >
            <ChevronLeft
              size={27}
              strokeWidth={1.8}
            />
          </button>


          {/* =================================================
              TESTIMONIAL LIST
          ================================================== */}

          <div
            ref={sliderRef}
            onScroll={checkScroll}
            className="
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              scroll-smooth
              pb-5

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:gap-6

              lg:grid
              lg:grid-cols-3
              lg:overflow-visible
              lg:pb-0
            "
          >

            {testimonials
              .slice(0, 3)
              .map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                />
              ))}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={() =>
              scrollTestimonials("right")
            }
            disabled={!canScrollRight}
            aria-label="Next testimonials"
            className="
              absolute
              right-0
              top-1/2
              z-30
              flex
              h-[48px]
              w-[48px]
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#092f4b]
              shadow-[0_6px_25px_rgba(8,45,76,0.10)]
              transition

              hover:bg-[#10aa3a]
              hover:text-white

              disabled:pointer-events-none
              disabled:opacity-30

              sm:h-[54px]
              sm:w-[54px]
            "
          >
            <ChevronRight
              size={27}
              strokeWidth={1.8}
            />
          </button>

        </div>


        {/* ===================================================
            MOBILE / TABLET EXTRA CARDS
        ==================================================== */}

        <div className="mt-6 lg:hidden">

          <div
            ref={undefined}
            className="
              flex
              gap-5
              overflow-hidden
            "
          >

            {/* Additional testimonials are available
                through the data structure and can be
                enabled when you want a larger carousel. */}

          </div>

        </div>

      </div>


      {/* =====================================================
          DECORATIVE LEAF
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-5px]
          right-[-10px]
          hidden
          rotate-[-20deg]
          text-[#d9f0dc]

          lg:block
        "
      >
        <LeafDecoration />
      </div>

    </section>
  );
}


/* =========================================================
   TESTIMONIAL CARD
========================================================= */

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

function TestimonialCard({
  name,
  role,
  image,
  review,
}: TestimonialProps) {
  return (
    <article
      data-testimonial-card
      className="
        flex
        min-w-[calc(100vw-40px)]
        max-w-[calc(100vw-40px)]
        snap-center
        flex-shrink-0
        flex-col

        sm:min-w-[430px]
        sm:max-w-[430px]

        lg:min-w-0
        lg:max-w-none
      "
    >

      {/* =================================================
          REVIEW BOX
      ================================================== */}

      <div
        className="
          relative
          flex
          min-h-[275px]
          flex-col
          rounded-[14px]
          bg-white
          px-7
          py-6
          shadow-[0_5px_25px_rgba(8,45,76,0.07)]

          sm:min-h-[280px]
          sm:px-8
        "
      >

        {/* Green opening quote */}
        <div
          className="
            text-[48px]
            font-black
            leading-[0.7]
            text-[#10b33c]
          "
        >
          “
        </div>


        {/* Review */}
        <p
          className="
            mt-4
            text-[15px]
            leading-6
            text-[#243e56]

            sm:text-[16px]
            sm:leading-7
          "
        >
          {review}
        </p>


        {/* Bottom row */}
        <div
          className="
            mt-auto
            flex
            items-end
            justify-between
            pt-5
          "
        >

          {/* Stars */}
          <div
            className="
              flex
              gap-[2px]
              text-[#ffbd00]
            "
            aria-label="5 out of 5 stars"
          >
            {"★★★★★".split("").map(
              (_, index) => (
                <span
                  key={index}
                  className="text-[20px]"
                >
                  ★
                </span>
              )
            )}
          </div>


          {/* Closing quote */}
          <div
            className="
              text-[65px]
              font-black
              leading-[0.45]
              text-[#d9f1df]
            "
          >
            ”
          </div>

        </div>


        {/* Little speech tail */}
        <div
          className="
            absolute
            -bottom-[14px]
            left-[35px]
            h-[28px]
            w-[28px]
            rotate-45
            bg-white
          "
        />

      </div>


      {/* =================================================
          CLIENT INFO
      ================================================== */}

      <div
        className="
          mt-6
          flex
          items-center
          gap-4
          px-1
        "
      >

        {/* Avatar */}
        <div
          className="
            relative
            h-[78px]
            w-[78px]
            shrink-0
            overflow-hidden
            rounded-full
            border-[2px]
            border-[#bce8c6]
            p-[3px]
          "
        >

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


        {/* Name */}
        <div>

          <h3
            className="
              text-[18px]
              font-bold
              text-[#092f4b]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-1
              text-[14px]
              text-[#536b7e]
            "
          >
            {role}
          </p>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   DECORATIVE LEAF
========================================================= */

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