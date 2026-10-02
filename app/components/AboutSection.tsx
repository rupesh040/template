"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Users,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white

        py-14

        sm:py-18

        md:py-20

        lg:py-24

        xl:py-28
      "
    >

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1450px]
          flex-col
          items-center

          gap-12

          px-6

          sm:px-8
          sm:gap-14

          md:px-10
          md:gap-16

          lg:flex-row
          lg:gap-14
          lg:px-14

          xl:gap-20
          xl:px-20

          2xl:px-24
        "
      >

        {/* =====================================================
            LEFT IMAGE
        ====================================================== */}

        <div
          className="
            relative
            w-full

            lg:w-[51%]

            xl:w-[52%]
          "
        >

          {/* =================================================
              NAVY BACKGROUND SHAPE
          ================================================== */}

          <div
            className="
              absolute
              left-[4%]
              top-[-20px]
              h-[72%]
              w-[52%]
              bg-[#092a43]

              sm:left-[5%]
              sm:top-[-25px]

              lg:left-[5%]
              lg:top-[-28px]
            "
          />


          {/* =================================================
              IMAGE
          ================================================== */}

          <div
            className="
              relative
              z-10
              ml-[8%]
              w-[84%]
              overflow-hidden
              bg-white
              shadow-[0_8px_30px_rgba(8,45,76,0.08)]

              sm:ml-[9%]
              sm:w-[82%]

              lg:ml-[8%]
              lg:w-[84%]
            "
          >

            <div
              className="
                relative
                aspect-[4/3]
                w-full
              "
            >

              <Image
                src="/about-cleaning.png"
                alt="Professional PureShine cleaning service"
                fill
                sizes="
                  (max-width: 640px) 84vw,
                  (max-width: 1024px) 75vw,
                  45vw
                "
                className="
                  object-cover
                  object-center
                "
              />

            </div>

          </div>


          {/* =================================================
              GREEN DOT PATTERN
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-25px]
              left-0
              z-0
              h-[100px]
              w-[55%]
              opacity-90

              sm:bottom-[-32px]
              sm:h-[125px]

              lg:bottom-[-40px]
              lg:h-[145px]

              xl:bottom-[-45px]
              xl:h-[155px]
            "
          >
            <DotPattern />
          </div>

        </div>


        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <div
          className="
            w-full

            lg:w-[49%]

            lg:pr-4

            xl:pr-6

            2xl:pr-8
          "
        >

          {/* =================================================
              SMALL HEADING
          ================================================== */}

          <p
            className="
              mb-3
              text-[11px]
              font-bold
              tracking-[3px]
              text-[#12a83a]

              sm:text-[12px]
              sm:tracking-[4px]

              lg:text-[13px]
              lg:tracking-[5px]
            "
          >
            WELCOME TO PURESHINE
          </p>


          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h2
            className="
              max-w-[650px]
              text-[34px]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#062d4c]

              sm:text-[43px]

              md:text-[48px]

              lg:text-[50px]

              xl:text-[56px]
            "
          >
            Professional

            <span className="block text-[#12a83a]">
              Cleaning Service
            </span>
          </h2>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-5
              max-w-[650px]
              text-[13px]
              leading-6
              text-[#526679]

              sm:text-[14px]
              sm:leading-7

              lg:text-[15px]

              xl:text-[16px]
            "
          >
            At PureShine, we believe a clean space creates a healthier,
            happier and more productive life. We provide reliable,
            high-quality cleaning services for homes, offices, and
            commercial spaces with trained professionals and
            eco-friendly products.
          </p>


          {/* =================================================
              FEATURES
          ================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-5

              sm:grid-cols-3
              sm:gap-4

              lg:gap-5

              xl:gap-6
            "
          >

            <Feature
              icon={<Users />}
              title={
                <>
                  Trusted &
                  <br />
                  Experienced
                </>
              }
            />

            <Feature
              icon={<Leaf />}
              title={
                <>
                  Safe & Eco-
                  <br />
                  Friendly Products
                </>
              }
            />

            <Feature
              icon={<ShieldCheck />}
              title={
                <>
                  100%
                  <br />
                  Customer Satisfaction
                </>
              }
            />

          </div>


          {/* =================================================
              CONTACT BUTTON
          ================================================== */}

          <div className="mt-8">

            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-[52px]
                items-center
                gap-4
                rounded-full
                bg-[#10ae3a]
                pl-7
                pr-2
                text-[14px]
                font-bold
                text-white
                shadow-[0_6px_18px_rgba(16,174,58,0.20)]
                transition-all
                duration-300

                hover:bg-[#07972e]
                hover:shadow-[0_8px_22px_rgba(16,174,58,0.28)]

                sm:h-[55px]
                sm:gap-5
                sm:pl-8
                sm:text-[15px]
              "
            >

              <span>
                CONTACT NOW
              </span>

              <span
                className="
                  flex
                  h-[40px]
                  w-[40px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#10ae3a]
                  transition-transform
                  duration-300

                  sm:h-[43px]
                  sm:w-[43px]

                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={20} />
              </span>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FEATURE
========================================================= */

function Feature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        min-w-0
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-[50px]
          w-[50px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#eaf9ef]
          text-[#10ae3a]

          sm:h-[53px]
          sm:w-[53px]

          lg:h-[55px]
          lg:w-[55px]
        "
      >
        {icon}
      </div>


      {/* TEXT */}

      <div
        className="
          text-[11px]
          font-semibold
          leading-[1.45]
          text-[#243e54]

          sm:text-[11px]

          lg:text-[12px]

          xl:text-[13px]
        "
      >
        {title}
      </div>

    </div>
  );
}


/* =========================================================
   DOT PATTERN
========================================================= */

function DotPattern() {
  return (
    <div
      className="
        h-full
        w-full
        bg-[radial-gradient(
          circle,
          #16b84a_1.5px,
          transparent_1.5px
        )]
        [background-size:14px_14px]
      "
    />
  );
}