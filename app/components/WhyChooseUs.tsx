"use client";

import Image from "next/image";

import {
  Users,
  Leaf,
  ShieldCheck,
  Coins,
  Sparkles,
  Home,
  Clock3,
  Target,
} from "lucide-react";


/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: Users,
    title: "Trained Professionals",
    description: "Skilled and background checked team.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe for you, your family and the environment.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & On-Time",
    description: "We value your time and always arrive on schedule.",
  },
  {
    icon: Coins,
    title: "Affordable Pricing",
    description: "High-quality cleaning at competitive rates.",
  },
];


/* =========================================================
   FLOATING HIGHLIGHTS
========================================================= */

const highlights = [
  {
    icon: Sparkles,
    title: "100% Satisfaction",
    description: "Your happiness is our priority.",
  },
  {
    icon: Home,
    title: "Customized Solutions",
    description: "Cleaning plans as per your needs.",
  },
  {
    icon: Clock3,
    title: "Easy Booking",
    description: "Quick, simple and hassle-free process.",
  },
];


export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white

        py-14
        sm:py-18
        lg:py-24
      "
    >

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Large top-left circle */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[90px]
          -top-[50px]
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#f3f9f6]

          sm:h-[230px]
          sm:w-[230px]

          lg:h-[270px]
          lg:w-[270px]
        "
      />


      {/* Small circle */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[55px]
          h-[55px]
          w-[55px]
          rounded-full
          bg-[#f5faf8]

          sm:h-[75px]
          sm:w-[75px]
        "
      />


      {/* Center decorative circle */}

      <div
        className="
          pointer-events-none
          absolute
          left-[28%]
          -top-[60px]
          hidden
          h-[150px]
          w-[150px]
          rounded-full
          bg-[#f5faf8]

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
          flex
          w-full
          max-w-[1450px]
          flex-col
          gap-12

          px-5

          sm:px-8

          md:px-10

          lg:flex-row
          lg:items-center
          lg:gap-12
          lg:px-12

          xl:gap-16
          xl:px-16
        "
      >


        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className="
            w-full

            lg:w-[51%]
          "
        >

          {/* Small heading */}

          <p
            className="
              text-[11px]
              font-bold
              tracking-[3px]
              text-[#12aa3b]

              sm:text-[13px]
              sm:tracking-[4px]

              lg:text-[14px]
              lg:tracking-[5px]
            "
          >
            WHY CHOOSE US
          </p>


          {/* Main heading */}

          <h2
            className="
              mt-3
              max-w-[680px]
              text-[34px]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#062d4c]

              sm:text-[42px]

              md:text-[46px]

              lg:text-[48px]

              xl:text-[53px]
            "
          >
            More Than Cleaning,

            <span className="block text-[#10a83a]">
              A Healthier Tomorrow
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-5
              max-w-[650px]
              text-[14px]
              leading-6
              text-[#526679]

              sm:text-[15px]
              sm:leading-7

              lg:text-[16px]
            "
          >
            We are committed to delivering high-quality cleaning
            services that make your home or workplace cleaner,
            healthier and more comfortable. Here's why our clients
            trust us.
          </p>


          {/* =================================================
              BENEFITS
          ================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-1
              gap-5

              sm:grid-cols-2
              sm:gap-x-8
              sm:gap-y-6
            "
          >

            {benefits.map((benefit) => (
              <BenefitItem
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}

          </div>


          {/* =================================================
              MISSION BOX
          ================================================== */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-3
              rounded-[18px]
              bg-[#ddf8d5]
              px-4
              py-5

              sm:mt-9
              sm:gap-4
              sm:px-7
              sm:py-6
            "
          >

            {/* Target */}

            <div
              className="
                flex
                h-[50px]
                w-[50px]
                shrink-0
                items-center
                justify-center
                text-[#062d4c]

                sm:h-[62px]
                sm:w-[62px]
              "
            >
              <Target
                size={44}
                strokeWidth={1.6}
                className="sm:h-12 sm:w-12"
              />
            </div>


            {/* Divider */}

            <div
              className="
                h-[48px]
                w-[2px]
                shrink-0
                bg-[#8edc81]

                sm:h-[58px]
              "
            />


            {/* Mission text */}

            <p
              className="
                text-[13px]
                font-semibold
                leading-5
                text-[#092f4b]

                sm:text-[16px]
                sm:leading-7

                lg:text-[17px]
              "
            >
              Our Mission: Creating Cleaner,
              <br className="hidden sm:block" />
              Healthier Spaces for Happier Lives.
            </p>

          </div>

        </div>


        {/* ===================================================
            RIGHT IMAGE AREA
        ==================================================== */}

        <div
          className="
            relative
            w-full

            lg:w-[49%]
          "
        >

          {/* =================================================
              IMAGE CONTAINER
          ================================================== */}

          <div
            className="
              relative
              min-h-[430px]
              w-full
              overflow-hidden

              rounded-[30px]

              /* Mobile */
              sm:min-h-[520px]
              sm:rounded-[35px]

              /* Desktop */
              lg:min-h-[600px]

              lg:rounded-l-[130px]
              lg:rounded-r-[30px]

              xl:min-h-[660px]
              xl:rounded-l-[160px]
            "
          >

            {/* IMAGE */}

            <Image
              src="/why-chooseUs.png"
              alt="PureShine professional cleaning service"
              fill
              priority
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                50vw
              "
              className="
                object-cover
                object-center

                sm:object-[55%_center]

                lg:object-right
              "
            />


            {/* Soft image overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#062d4c]/10
                via-transparent
                to-transparent
              "
            />

          </div>


          {/* =================================================
              FLOATING CARDS
              ABOVE IMAGE
          ================================================== */}

          <div
            className="
              absolute
              z-30

              /* Mobile */
              right-3
              top-[8%]
              flex
              w-[185px]
              flex-col
              gap-2

              /* Small */
              sm:right-4
              sm:top-[10%]
              sm:w-[220px]
              sm:gap-3

              /* Tablet */
              md:right-5
              md:w-[235px]

              /* Desktop */
              lg:-right-4
              lg:top-[12%]
              lg:w-[230px]
              lg:gap-4

              xl:-right-5
              xl:w-[245px]
            "
          >

            {highlights.map((item) => (
              <HighlightCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}

          </div>


          {/* =================================================
              BOTTOM CTA
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              right-0
              z-40
              flex
              h-[75px]
              w-[175px]
              items-center
              justify-center
              rounded-tl-[38px]
              bg-[#062d4c]
              px-4

              sm:h-[88px]
              sm:w-[205px]
              sm:rounded-tl-[45px]

              lg:h-[100px]
              lg:w-[235px]

              xl:h-[108px]
              xl:w-[250px]
            "
          >

            <p
              className="
                text-[12px]
                font-semibold
                leading-5
                text-white

                sm:text-[14px]

                lg:text-[15px]
              "
            >
              Let's Make
              <br />
              Life Cleaner
            </p>


            <span
              className="
                ml-2
                h-[2px]
                w-[25px]
                bg-[#18bd3e]

                sm:ml-3
                sm:w-[32px]
              "
            />

          </div>


          {/* =================================================
              LEFT DOT PATTERN
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-20px]
              left-[-45px]
              z-0
              hidden
              h-[180px]
              w-[180px]
              opacity-70

              lg:block
            "
          >
            <DotPattern />
          </div>


          {/* =================================================
              LEFT CURVE DECORATION
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-[-25px]
              top-[12%]
              z-20
              hidden
              h-[150px]
              w-[50px]
              overflow-hidden

              lg:block
            "
          >

            <div
              className="
                absolute
                -left-[100px]
                top-0
                h-[150px]
                w-[150px]
                rounded-full
                border-[35px]
                border-[#e9f8ed]
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   BENEFIT ITEM
========================================================= */

function BenefitItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-3
      "
    >

      {/* Icon */}

      <div
        className="
          flex
          h-[52px]
          w-[52px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#e7f9e9]
          text-[#10aa3a]

          sm:h-[56px]
          sm:w-[56px]
        "
      >
        <Icon
          size={24}
          strokeWidth={1.8}
        />
      </div>


      {/* Text */}

      <div className="pt-1">

        <h3
          className="
            text-[13px]
            font-bold
            leading-5
            text-[#102f49]

            sm:text-[15px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            max-w-[230px]
            text-[11px]
            leading-5
            text-[#627487]

            sm:text-[13px]
          "
        >
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   HIGHLIGHT CARD
========================================================= */

function HighlightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        min-h-[82px]
        w-full
        items-center
        gap-2.5
        rounded-[15px]
        border
        border-white/80
        bg-white
        px-3
        py-2.5
        shadow-[0_10px_35px_rgba(8,45,76,0.16)]
        backdrop-blur-sm

        sm:min-h-[94px]
        sm:gap-3
        sm:rounded-[17px]
        sm:px-4
        sm:py-3
      "
    >

      {/* Icon */}

      <div
        className="
          flex
          h-[42px]
          w-[42px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#e3f9e6]
          text-[#10a83a]

          sm:h-[48px]
          sm:w-[48px]
        "
      >
        <Icon
          size={21}
          strokeWidth={1.8}
          className="sm:h-6 sm:w-6"
        />
      </div>


      {/* Text */}

      <div className="min-w-0">

        <h3
          className="
            text-[10px]
            font-bold
            leading-4
            text-[#102f49]

            sm:text-[12px]
            sm:leading-5
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-0.5
            text-[9px]
            leading-[1.4]
            text-[#68798a]

            sm:text-[10px]
            sm:leading-4
          "
        >
          {description}
        </p>

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
        bg-[radial-gradient(circle,#16b84a_1.5px,transparent_1.5px)]
        [background-size:14px_14px]
      "
    />
  );
}