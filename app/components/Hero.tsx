"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import {
  ArrowRight,
  Leaf,
  Users,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* =====================================================
          MOBILE / TABLET IMAGE
          Image stays at the top.
      ====================================================== */}

      <div
        className="
          relative
          block
          h-[360px]
          w-full
          overflow-hidden

          sm:h-[430px]

          md:h-[500px]

          lg:hidden
        "
      >

        {/* IMAGE */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-no-repeat

            bg-[position:65%_center]

            min-[480px]:bg-[position:63%_center]

            sm:bg-[position:60%_center]

            md:bg-[position:58%_center]
          "
          style={{
            backgroundImage: "url('/heroBanner.png')",
          }}
        />

        {/* =================================================
            IMAGE FADE

            Top = transparent
            Bottom = white
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-transparent
            via-white/10
            to-white
          "
        />

        {/* Additional soft bottom fade */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[180px]
            w-full
            bg-gradient-to-t
            from-white
            via-white/65
            to-transparent
          "
        />

      </div>


      {/* =====================================================
          DESKTOP BACKGROUND IMAGE
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          hidden
          bg-cover
          bg-center
          bg-no-repeat

          lg:block
        "
        style={{
          backgroundImage: "url('/heroBanner.png')",
        }}
      />


      {/* =====================================================
          DESKTOP WHITE GRADIENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          hidden
          w-[72%]

          bg-gradient-to-r
          from-white/20
          via-white/95
          to-transparent

          lg:block
        "
      />


      {/* =====================================================
          DESKTOP SOFT GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          hidden
          w-[65%]

          bg-[radial-gradient(
            ellipse_at_35%_50%,
            rgba(255,255,255,0.96)_0%,
            rgba(255,255,255,0.75)_42%,
            rgba(255,255,255,0)_78%
          )]

          lg:block
        "
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]

          /* Mobile */
          px-5
          pb-12
          pt-0

          /* 480px */
          min-[480px]:px-7

          /* Tablet */
          sm:px-8
          sm:pb-14

          md:px-10

          /* Desktop */
          lg:flex
          lg:min-h-[560px]
          lg:items-center
          lg:px-12
          lg:py-16

          xl:px-16
        "
      >

        {/* =================================================
            CONTENT WRAPPER
        ================================================== */}

        <div
          className="
            w-full

            /* Mobile */
            -mt-[55px]

            /* 480 */
            min-[480px]:-mt-[65px]

            /* Tablet */
            sm:-mt-[75px]

            /* Desktop */
            lg:mt-0
            lg:max-w-[650px]

            xl:max-w-[680px]
          "
        >

          {/* =================================================
              CONTENT WHITE BACKGROUND
          ================================================== */}

          <div
            className="
              relative

              /* Mobile */
              rounded-[24px]
              bg-white/90
              px-4
              py-7
              shadow-[0_-8px_35px_rgba(255,255,255,0.8)]
              backdrop-blur-[2px]

              /* Small */
              min-[380px]:px-5

              /* Tablet */
              sm:px-7
              sm:py-8

              /* Desktop */
              lg:bg-transparent
              lg:px-0
              lg:py-0
              lg:shadow-none
              lg:backdrop-blur-0
            "
          >

            {/* =================================================
                SMALL HEADING
            ================================================== */}

            <p
              className="
                mb-3
                font-semibold
                uppercase
                leading-5
                tracking-[2.5px]
                text-[#234762]

                text-[10px]

                min-[380px]:text-[11px]

                sm:text-[12px]
                sm:tracking-[3.5px]

                md:text-[13px]

                lg:text-[14px]
                lg:tracking-[5px]
              "
            >
              PROFESSIONAL CLEANING SERVICES
            </p>


            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <h1
              className="
                font-extrabold
                leading-[1.03]
                tracking-[-1.5px]
                text-[#062d4c]

                text-[clamp(2.2rem,8vw,3.1rem)]

                sm:text-[clamp(3rem,7vw,3.7rem)]

                md:text-[clamp(3.2rem,6vw,4rem)]

                lg:text-[clamp(3.5rem,5vw,4.35rem)]

                xl:text-[62px]
              "
            >
              A Cleaner Space

              <span
                className="
                  block
                  text-[#20ae35]
                "
              >
                A Happier You
              </span>
            </h1>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-4
                max-w-[570px]
                text-[13px]
                leading-[1.65]
                text-[#24435b]

                min-[380px]:text-[14px]

                sm:mt-5
                sm:text-[15px]
                sm:leading-6

                lg:text-[16px]
              "
            >
              We provide reliable, affordable, and eco-friendly
              cleaning services for homes, offices, and commercial
              spaces.
            </p>


            {/* =================================================
                FEATURES
            ================================================== */}

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-x-3
                gap-y-5

                min-[380px]:gap-x-5

                sm:flex
                sm:flex-wrap
                sm:gap-x-6
                sm:gap-y-4

                lg:gap-x-7
              "
            >

              <Feature
                icon={<Leaf />}
                title="Eco-Friendly"
                subtitle="Products"
              />

              <Feature
                icon={<Users />}
                title="Trained"
                subtitle="Professionals"
              />

              <Feature
                icon={<ShieldCheck />}
                title="100%"
                subtitle="Satisfaction"
              />

              <Feature
                icon={<Clock3 />}
                title="On-Time"
                subtitle="Service"
              />

            </div>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-7
                grid
                grid-cols-1
                gap-3

                min-[430px]:grid-cols-2
                min-[430px]:gap-4

                sm:flex
                sm:flex-wrap
              "
            >

              {/* BOOK CLEANING */}

              <Link
                href="/booking"
                className="
                  group
                  flex
                  h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#16b532]
                  px-5
                  text-[14px]
                  font-bold
                  text-white
                  shadow-[0_7px_20px_rgba(22,181,50,0.2)]
                  transition-all
                  duration-200

                  hover:bg-[#119728]
                  hover:shadow-[0_9px_24px_rgba(22,181,50,0.28)]

                  active:scale-[0.98]

                  min-[430px]:px-3

                  sm:h-[51px]
                  sm:w-auto
                  sm:min-w-[180px]
                  sm:px-7
                  sm:text-[15px]

                  lg:text-[16px]
                "
              >
                <span>
                  Book a Cleaning
                </span>

                <ArrowRight
                  size={20}
                  className="
                    shrink-0
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>


              {/* OUR SERVICES */}

              <Link
                href="/services"
                className="
                  group
                  flex
                  h-[50px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border-2
                  border-[#8ca0af]
                  bg-white
                  px-5
                  text-[14px]
                  font-bold
                  text-[#173b55]
                  transition-all
                  duration-200

                  hover:border-[#173b55]
                  hover:bg-white

                  active:scale-[0.98]

                  min-[430px]:px-3

                  sm:h-[51px]
                  sm:w-auto
                  sm:min-w-[170px]
                  sm:px-7
                  sm:text-[15px]

                  lg:bg-white/80
                  lg:text-[16px]
                "
              >
                <span>
                  Our Services
                </span>

                <ArrowRight
                  size={20}
                  className="
                    shrink-0
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        flex
        min-w-0
        items-center
        gap-2

        sm:gap-2.5
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-[43px]
          w-[43px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#b8e8c1]
          bg-[#f1fff4]
          text-[#18ad32]

          min-[380px]:h-[46px]
          min-[380px]:w-[46px]

          sm:h-[50px]
          sm:w-[50px]

          lg:h-[55px]
          lg:w-[55px]
        "
      >
        {icon}
      </div>


      {/* TEXT */}

      <div
        className="
          min-w-0
          leading-tight
        "
      >

        <p
          className="
            truncate
            text-[10px]
            font-semibold
            text-[#24435b]

            min-[380px]:text-[11px]

            sm:text-[12px]

            lg:text-[13px]
          "
        >
          {title}
        </p>

        <p
          className="
            truncate
            text-[10px]
            text-[#24435b]

            min-[380px]:text-[11px]

            sm:text-[12px]

            lg:text-[13px]
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );
}