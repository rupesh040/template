"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Home,
  CalendarDays,
  Leaf,
  Coins,
  SprayCan,
  Clock3,
  ShieldCheck,
  Headphones,
  ChevronDown,
} from "lucide-react";
const faqs = [
  {
    question: "What cleaning services do you offer?",
    answer:
      "We provide home cleaning, office cleaning, kitchen cleaning, bathroom cleaning, carpet and sofa cleaning, deep cleaning and other customized cleaning services.",
    icon: Home,
  },
  {
    question: "How do I book a cleaning service?",
    answer:
      "You can book a cleaning service through our online booking form or contact our team directly. Simply select your preferred service, date and time.",
    icon: CalendarDays,
  },
  {
    question: "Are your cleaning products safe?",
    answer:
      "Yes. We use carefully selected cleaning products that are safe for homes, workplaces and everyday environments.",
    icon: Leaf,
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the type of cleaning, property size and cleaning requirements. Contact us for a customized quote.",
    icon: Coins,
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. Our professional team generally brings the required cleaning equipment and products. If you have any specific product preference, you can let us know.",
    icon: SprayCan,
  },
  {
    question: "How long does a cleaning session take?",
    answer:
      "The duration depends on the size of the property and the type of cleaning service selected. Our team can provide an estimated duration during booking.",
    icon: Clock3,
  },
  {
    question: "Do you offer same-day cleaning?",
    answer:
      "Same-day cleaning may be available depending on our team's schedule and your location. Contact us to check availability.",
    icon: Clock3,
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "Customer satisfaction is important to us. If there is an issue with the service, contact our support team and we will discuss the appropriate solution.",
    icon: ShieldCheck,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) => {
      if (currentIndex === index) {
        return null;
      }

      return index;
    });
  };

  const leftFaqs = faqs.filter(
    (_, index) => index % 2 === 0
  );

  const rightFaqs = faqs.filter(
    (_, index) => index % 2 !== 0
  );

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
      {/* TOP LEFT */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[75px]
          -top-[75px]
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#f2f8f5]

          sm:h-[230px]
          sm:w-[230px]
        "
      />

      {/* TOP RIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[80px]
          -top-[80px]
          h-[180px]
          w-[180px]
          rounded-full
          bg-[#f2f8f5]

          sm:h-[240px]
          sm:w-[240px]
        "
      />

      {/* BOTTOM LEFT */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[80px]
          -left-[90px]
          h-[190px]
          w-[190px]
          rounded-full
          bg-[#f5faf8]
        "
      />

      {/* BOTTOM RIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[100px]
          -right-[60px]
          h-[200px]
          w-[200px]
          rounded-full
          bg-[#f5faf8]
        "
      />
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
        <div
          className="
            mx-auto
            max-w-[950px]
            text-center
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4

              sm:gap-5
            "
          >
            

            <span
              className="
                hidden
                h-[2px]
                w-[55px]
                bg-[#13aa3b]

                sm:block
              "
            />

            <span
              className="
                text-[13px]
                font-bold
                tracking-[3px]
                text-[#10a83a]

                sm:text-[14px]
                sm:tracking-[4px]
              "
            >
              FAQ
            </span>

            <span
              className="
                hidden
                h-[2px]
                w-[55px]
                bg-[#13aa3b]

                sm:block
              "
            />

          </div>


          {/* MAIN HEADING */}

          <h2
            className="
              mt-4
              text-[34px]
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-[#062d4c]

              sm:text-[44px]

              lg:text-[48px]
            "
          >
            Frequently Asked{" "}

            <span className="text-[#10a83a]">
              Questions
            </span>
          </h2>
          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-[13px]
              leading-6
              text-[#5c7182]

              sm:text-[15px]
              sm:leading-7
            "
          >
            Find quick answers to common questions about our
            cleaning services.

            <br className="hidden sm:block" />

            If you need more information, feel free to contact
            our team.
          </p>

        </div>
        <div
          className="
            mt-10
            hidden
            gap-5

            lg:flex
          "
        >
          <div
            className="
              flex
              min-w-0
              flex-1
              flex-col
              gap-4
            "
          >

            {leftFaqs.map((faq) => {
              const originalIndex =
                faqs.indexOf(faq);

              return (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={
                    openIndex === originalIndex
                  }
                  onToggle={() =>
                    toggleFAQ(originalIndex)
                  }
                />
              );
            })}

          </div>
          <div
            className="
              flex
              min-w-0
              flex-1
              flex-col
              gap-4
            "
          >

            {rightFaqs.map((faq) => {
              const originalIndex =
                faqs.indexOf(faq);

              return (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={
                    openIndex === originalIndex
                  }
                  onToggle={() =>
                    toggleFAQ(originalIndex)
                  }
                />
              );
            })}

          </div>

        </div>
        <div
          className="
            mt-10
            flex
            flex-col
            gap-4

            lg:hidden
          "
        >

          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}

        </div>
        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-[885px]
            flex-col
            gap-5
            rounded-[18px]
            bg-[#e8f8ed]
            px-5
            py-5

            sm:mt-10
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-7

            lg:px-8
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <div
              className="
                flex
                h-[58px]
                w-[58px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                border-[#13ad3c]
                bg-white
                text-[#092f4b]
              "
            >
              <Headphones
                size={30}
                strokeWidth={1.7}
              />
            </div>
            <div
              className="
                hidden
                h-[52px]
                w-[2px]
                bg-[#b9dfc3]

                sm:block
              "
            />


            <div>

              <h3
                className="
                  text-[16px]
                  font-bold
                  text-[#092f4b]

                  sm:text-[18px]
                "
              >
                Still have questions?
              </h3>

              <p
                className="
                  mt-1
                  text-[12px]
                  leading-5
                  text-[#607689]

                  sm:text-[13px]
                "
              >
                We're here to help! Contact our support team
                anytime.
              </p>

            </div>

          </div>
          <Link
            href="/contact"
            className="
              group
              flex
              h-[50px]
              shrink-0
              items-center
              justify-center
              gap-5
              rounded-full
              bg-[#10ad3b]
              px-8
              text-[14px]
              font-bold
              text-white
              transition
              hover:bg-[#07972f]

              sm:min-w-[185px]
            "
          >

            <span>
              Contact Us
            </span>

            <span
              className="
                text-[22px]
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
    icon: React.ElementType;
  };

  isOpen: boolean;

  onToggle: () => void;
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: FAQItemProps) {

  const Icon = faq.icon;

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-[16px]
        bg-white
        shadow-[0_5px_25px_rgba(8,45,76,0.06)]
        transition-shadow
        duration-300

        hover:shadow-[0_8px_30px_rgba(8,45,76,0.09)]
      "
    >

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          flex
          w-full
          items-center
          gap-4
          px-4
          py-3
          text-left

          sm:px-5
          sm:py-4
        "
      >
        <span
          className="
            flex
            h-[54px]
            w-[54px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#e5f7e9]
            text-[#0aaa3a]

            sm:h-[58px]
            sm:w-[58px]
          "
        >
          <Icon
            size={27}
            strokeWidth={1.8}
          />
        </span>
        <span
          className="
            flex-1
            text-[14px]
            font-bold
            leading-5
            text-[#092f4b]

            sm:text-[16px]
          "
        >
          {faq.question}
        </span>
        <span
          className={`
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            text-[#092f4b]
            transition-transform
            duration-300

            ${
              isOpen
                ? "rotate-180"
                : "rotate-0"
            }
          `}
        >
          <ChevronDown
            size={21}
            strokeWidth={2}
          />
        </span>

      </button>
      <div
        className={`
          grid
          transition-[grid-template-rows]
          duration-300
          ease-in-out

          ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >

        <div className="min-h-0 overflow-hidden">

          <div
            className="
              border-t
              border-[#edf3ef]
              px-5
              pb-5
              pt-4
              pl-[72px]

              sm:pl-[83px]
            "
          >

            <p
              className="
                max-w-[560px]
                text-[13px]
                leading-6
                text-[#637789]

                sm:text-[14px]
              "
            >
              {faq.answer}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}