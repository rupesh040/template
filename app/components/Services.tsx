"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  CookingPot,
  Bath,
  Sofa,
} from "lucide-react";

const services = [
  {
    title: "Home Cleaning",
    description: "A clean and healthy home for a happier you.",
    image: "/services/home-cleaning.png",
    icon: Home,
    darkIcon: true,
  },
  {
    title: "Office Cleaning",
    description: "Bright, clean workspaces boost productivity.",
    image: "/services/office-cleaning.png",
    icon: Building2,
    darkIcon: false,
  },
  {
    title: "Kitchen Cleaning",
    description: "Hygienic and spotless kitchens for safer living.",
    image: "/services/kitchen-cleaning.png",
    icon: CookingPot,
    darkIcon: true,
  },
  {
    title: "Bathroom Cleaning",
    description: "Deep cleaning for a fresh and germ-free bathroom.",
    image: "/services/bathroom-cleaning.png",
    icon: Bath,
    darkIcon: false,
  },
  {
    title: "Carpet & Sofa Cleaning",
    description:
      "Remove dust, stains and allergens for a fresher home.",
    image: "/services/carpet-cleaning.png",
    icon: Sofa,
    darkIcon: true,
  },
];

export default function Services() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* =========================================================
     CHECK SCROLL POSITION
  ========================================================= */

  const checkScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    setCanScrollLeft(slider.scrollLeft > 5);

    setCanScrollRight(
      slider.scrollLeft < maxScroll - 5
    );
  };


  /* =========================================================
     SCROLL LEFT / RIGHT
  ========================================================= */

  const scrollServices = (
    direction: "left" | "right"
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollAmount =
      slider.clientWidth * 0.85;

    slider.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });

    // Check after animation
    setTimeout(checkScroll, 400);
  };


  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-0
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#f4f8f9]
          sm:h-[230px]
          sm:w-[230px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-[130px]
          h-[150px]
          w-[150px]
          rounded-full
          bg-[#f7fafb]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[52%]
          top-[100px]
          h-[100px]
          w-[100px]
          rounded-full
          bg-[#f6fafb]
        "
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto max-w-[950px] text-center">

          <p
            className="
              text-[12px]
              font-bold
              tracking-[4px]
              text-[#12aa3b]
              sm:text-[13px]
              sm:tracking-[5px]
            "
          >
            OUR SERVICES
          </p>

          <h2
            className="
              mt-3
              text-[34px]
              font-extrabold
              leading-tight
              tracking-tight
              text-[#062d4c]
              sm:text-[43px]
              lg:text-[48px]
            "
          >
            Our Popular{" "}

            <span className="text-[#10aa3a]">
              Cleaning Services
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[700px]
              text-[13px]
              leading-6
              text-[#607386]
              sm:text-[14px]
            "
          >
            We offer a wide range of professional cleaning
            services to keep your spaces fresh, healthy and
            spotless.
          </p>

        </div>


        {/* =================================================
            CAROUSEL
        ================================================== */}

        <div className="relative mt-10 sm:mt-12">

          {/* =================================================
              LEFT ARROW
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollServices("left")}
            disabled={!canScrollLeft}
            aria-label="Previous services"
            className="
               absolute
              left-0
              top-1/2
              z-30
              flex
              h-[46px]
              w-[46px]
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#10aa3a]
              shadow-[0_5px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-200
              hover:bg-[#10aa3a]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-30

              sm:h-[52px]
              sm:w-[52px]
            "
          >
            <ChevronLeft
              size={27}
              strokeWidth={2}
            />
          </button>


          {/* =================================================
              SLIDER
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

              /* Hide scrollbar */
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:gap-6
            "
          >

            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}

          </div>


          {/* =================================================
              RIGHT ARROW
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollServices("right")}
            disabled={!canScrollRight}
            aria-label="Next services"
            className="
              absolute
              right-0
              top-1/2
              z-30
              flex
              h-[46px]
              w-[46px]
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#10aa3a]
              shadow-[0_5px_25px_rgba(0,0,0,0.12)]
              transition-all
              duration-200
              hover:bg-[#10aa3a]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-30

              sm:h-[52px]
              sm:w-[52px]
            "
          >
            <ChevronRight
              size={27}
              strokeWidth={2}
            />
          </button>

        </div>


        {/* =================================================
            VIEW ALL SERVICES
        ================================================== */}

        <div className="mt-7 flex justify-center sm:mt-9">

          <Link
            href="/services"
            className="
              group
              inline-flex
              h-[55px]
              items-center
              gap-5
              rounded-full
              bg-[#10ad3b]
              px-8
              text-[14px]
              font-bold
              text-white
              shadow-md
              transition
              hover:bg-[#07952f]
            "
          >

            <span>
              View All Services
            </span>

            <ArrowRight
              size={21}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />

          </Link>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SERVICE CARD
========================================================= */

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  darkIcon: boolean;
}

function ServiceCard({
  title,
  description,
  image,
  icon: Icon,
  darkIcon,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        flex
        min-w-[270px]
        max-w-[270px]
        snap-center
        flex-shrink-0
        flex-col
        overflow-hidden
        rounded-[40px]
        border
        border-[#eef2f3]
        bg-white
        shadow-[0_8px_30px_rgba(8,45,76,0.07)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(8,45,76,0.12)]

        sm:min-w-[290px]
        sm:max-w-[290px]

        lg:min-w-[250px]
        lg:max-w-[250px]

        xl:min-w-[270px]
        xl:max-w-[270px]
      "
    >

      {/* =================================================
          IMAGE
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-4
          aspect-square
          w-[calc(100%-24px)]
          overflow-hidden
          rounded-full
        "
      >

        <Image
          src={image}
          alt={title}
          fill
          sizes="
            (max-width: 640px) 75vw,
            (max-width: 1024px) 35vw,
            20vw
          "
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>


      {/* =================================================
          ICON
      ================================================== */}

      <div
        className={`
          relative
          z-10
          mx-auto
          -mt-8
          flex
          h-[56px]
          w-[56px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-white
          shadow-sm
          ${
            darkIcon
              ? "bg-[#092a43] text-white"
              : "bg-[#12b43c] text-white"
          }
        `}
      >
        <Icon
          size={25}
          strokeWidth={1.8}
        />
      </div>


      {/* =================================================
          CONTENT
      ================================================== */}

      <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-2 text-center">

        <h3
          className="
            text-[16px]
            font-bold
            leading-tight
            text-[#122f48]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            min-h-[48px]
            max-w-[220px]
            text-[12px]
            leading-5
            text-[#65788a]
          "
        >
          {description}
        </p>


        {/* CARD ARROW */}
        <Link
          href={`/services/${title
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("&", "and")}`}
          aria-label={`View ${title}`}
          className="
            mt-3
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            bg-[#12b43c]
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-[#07972f]
          "
        >
          <ArrowRight size={20} />
        </Link>

      </div>

    </article>
  );
}