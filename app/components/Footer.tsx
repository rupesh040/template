"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Leaf,
  Award,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   DATA
========================================================= */

const quickLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Our Services", "/services"],
  ["Pricing / Packages", "/pricing"],
  ["Gallery", "/gallery"],
  ["FAQ", "/faq"],
  ["Contact Us", "/contact"],
];

const services = [
  ["House Cleaning", "/services/house-cleaning"],
  ["Office Cleaning", "/services/office-cleaning"],
  ["Deep Cleaning", "/services/deep-cleaning"],
  ["Carpet Cleaning", "/services/carpet-cleaning"],
  ["Window Cleaning", "/services/window-cleaning"],
  ["Move-in / Move-out Cleaning", "/services/move-in-move-out"],
  ["Customized Cleaning", "/services/customized-cleaning"],
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#032e47] text-white">

      {/* Decorative leaf */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[-20px]
          hidden
          h-[220px]
          w-[150px]
          opacity-[0.08]

          lg:block
        "
      >
        <LeafDecoration />
      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-6
          py-12

          sm:px-8
          sm:py-14

          lg:px-10
          lg:py-12

          xl:px-14
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2

            lg:grid-cols-[1.05fr_0.8fr_0.9fr_1.1fr]

            lg:gap-10

            xl:gap-14
          "
        >

          {/* =================================================
              COLUMN 1
          ================================================== */}

          <div className="min-w-0">

            {/* LOGO */}

            <Link
              href="/"
              className="inline-block"
            >
              <Image
                src="/footer-logo.png"
                alt="PureShine"
                width={200}
                height={115}
                priority
                className="
                  h-auto
                  w-[175px]
                  object-contain
                "
              />
            </Link>


            {/* DESCRIPTION */}

            <p
              className="
                mt-2
                max-w-[305px]
                text-[13px]
                leading-[1.8]
                text-white/75

                sm:text-[14px]
              "
            >
              We provide professional, reliable, and
              eco-friendly cleaning services for homes,
              offices, and commercial spaces.
              Your cleanliness is our priority.
            </p>


            {/* SOCIAL */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >

              {socialLinks.map(
                ({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex
                      h-[39px]
                      w-[39px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/45
                      text-white
                      transition-all
                      duration-200

                      hover:border-[#17b83c]
                      hover:bg-[#17b83c]
                    "
                  >
                    <Icon size={15} />
                  </Link>
                )
              )}

            </div>

          </div>


          {/* =================================================
              COLUMN 2
          ================================================== */}

          <div>

            <FooterHeading>
              Quick Links
            </FooterHeading>

            <ul className="mt-5 space-y-3">

              {quickLinks.map(([name, href]) => (
                <FooterLink
                  key={name}
                  name={name}
                  href={href}
                />
              ))}

            </ul>

          </div>


          {/* =================================================
              COLUMN 3
          ================================================== */}

          <div>

            <FooterHeading>
              Our Services
            </FooterHeading>

            <ul className="mt-5 space-y-3">

              {services.map(([name, href]) => (
                <FooterLink
                  key={name}
                  name={name}
                  href={href}
                />
              ))}

            </ul>

          </div>


          {/* =================================================
              COLUMN 4
          ================================================== */}

          <div className="min-w-0">

            <FooterHeading>
              Contact Information
            </FooterHeading>


            {/* PHONE */}

            <ContactItem
              icon={<Phone size={21} />}
              title="+91 98765 43210"
              subtitle="Mon - Sat, 9:00 AM - 7:00 PM"
              href="tel:+919876543210"
            />


            {/* EMAIL */}

            <ContactItem
              icon={<Mail size={21} />}
              title="info@pureshine.com"
              subtitle="We reply within 24 hours"
              href="mailto:info@pureshine.com"
            />


            {/* ADDRESS */}

            <ContactItem
              icon={<MapPin size={21} />}
              title={
                <>
                  123, Green Park, New Delhi,
                  <br />
                  Delhi - 110016, India
                </>
              }
            />


            {/* =================================================
                NEWSLETTER
            ================================================== */}

            <div className="mt-7">

              <FooterHeading>
                Newsletter
              </FooterHeading>

              <p
                className="
                  mt-2
                  max-w-[330px]
                  text-[13px]
                  leading-5
                  text-white/70
                "
              >
                Subscribe to our newsletter for updates,
                tips and special offers.
              </p>


              {/* INPUT */}

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="
                  mt-4
                  flex
                  h-[49px]
                  w-full
                  max-w-[360px]
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-white/25
                  bg-white/[0.04]
                "
              >

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-4
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-white/45
                  "
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="
                    flex
                    w-[49px]
                    shrink-0
                    items-center
                    justify-center
                    bg-[#12b63a]
                    transition
                    hover:bg-[#0c9c30]
                  "
                >
                  <ArrowRight
                    size={22}
                    strokeWidth={2.5}
                  />
                </button>

              </form>

            </div>

          </div>

        </div>


        {/* =====================================================
            TRUST BADGES
        ====================================================== */}

        <div
          className="
            mt-10
            border-t
            border-white/15
            pt-8
          "
        >

          <div
            className="
              grid
              grid-cols-2
              gap-y-8

              sm:grid-cols-4
              sm:gap-y-0
            "
          >

            <TrustBadge
              icon={<Leaf size={23} />}
              title="Eco-Friendly"
              subtitle="Products"
            />

            <TrustBadge
              icon={<Award size={23} />}
              title="Trusted"
              subtitle="Professionals"
            />

            <TrustBadge
              icon={<ShieldCheck size={23} />}
              title="Satisfaction"
              subtitle="Guaranteed"
            />

            <TrustBadge
              icon={<Clock3 size={23} />}
              title="On-Time"
              subtitle="Service"
            />

          </div>

        </div>


        {/* =====================================================
            BOTTOM DIVIDER
        ====================================================== */}

        <div
          className="
            mt-8
            h-px
            w-full
            bg-white/20
          "
        />


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* COPYRIGHT */}

          <p
            className="
              text-center
              text-[12px]
              text-white/70

              lg:text-left
              lg:text-[13px]
            "
          >
            © 2026 PureShine. All Rights Reserved.
          </p>


          {/* LEGAL */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-3
              gap-y-2
              text-[12px]
              text-white/70

              lg:text-[13px]
            "
          >

            <Link
              href="/privacy-policy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-white/30">
              |
            </span>

            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms & Conditions
            </Link>

            <span className="text-white/30">
              |
            </span>

            <Link
              href="/sitemap"
              className="hover:text-white"
            >
              Sitemap
            </Link>

          </div>


          {/* PAYMENT METHODS */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2

              lg:justify-end
            "
          >

            <PaymentBadge>
              VISA
            </PaymentBadge>

            <PaymentBadge>
              <span className="relative h-4 w-7">

                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-4
                    w-4
                    rounded-full
                    bg-[#eb001b]
                  "
                />

                <span
                  className="
                    absolute
                    right-0
                    top-0
                    h-4
                    w-4
                    rounded-full
                    bg-[#f79e1b]
                  "
                />

              </span>
            </PaymentBadge>

            <PaymentBadge>
              <span className="text-[#0879d1]">
                Paytm
              </span>
            </PaymentBadge>

            <PaymentBadge>
              UPI
            </PaymentBadge>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

      <h3
        className="
          text-[17px]
          font-bold
          leading-6
          text-white

          sm:text-[18px]
        "
      >
        {children}
      </h3>

      <span
        className="
          mt-3
          block
          h-[3px]
          w-[37px]
          rounded-full
          bg-[#12b83b]
        "
      />

    </div>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <li>

      <Link
        href={href}
        className="
          group
          flex
          items-center
          gap-2
          text-[13px]
          leading-5
          text-white/72
          transition-colors

          sm:text-[14px]

          hover:text-[#18bb40]
        "
      >

        <span
          className="
            text-[20px]
            leading-4
            text-white/80
            transition-transform
            duration-200

            group-hover:translate-x-1
          "
        >
          ›
        </span>

        <span>
          {name}
        </span>

      </Link>

    </li>
  );
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  title,
  subtitle,
  href,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  href?: string;
}) {
  const content = (
    <div
      className="
        flex
        w-full
        items-start
        gap-3
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
          bg-[#075f4e]
          text-white
        "
      >
        {icon}
      </div>


      {/* TEXT */}

      <div
        className="
          min-w-0
          flex-1
          pt-1
        "
      >

        <div
          className="
            break-words
            text-[13px]
            font-medium
            leading-5
            text-white

            sm:text-[14px]
          "
        >
          {title}
        </div>

        {subtitle && (
          <p
            className="
              mt-0.5
              text-[11px]
              leading-4
              text-white/55

              sm:text-[12px]
            "
          >
            {subtitle}
          </p>
        )}

      </div>

    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="
          mt-5
          block
          transition-opacity
          hover:opacity-80
        "
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="mt-5">
      {content}
    </div>
  );
}


/* =========================================================
   TRUST BADGE
========================================================= */

function TrustBadge({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center

        sm:border-r
        sm:border-white/10

        sm:last:border-r-0
      "
    >

      <div
        className="
          flex
          h-[53px]
          w-[53px]
          items-center
          justify-center
          rounded-full
          bg-[#075f4e]
          text-white
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-2
          text-[11px]
          font-semibold
          leading-4
          text-white

          sm:text-[12px]
        "
      >
        {title}
      </p>

      <p
        className="
          text-[10px]
          leading-4
          text-white/55

          sm:text-[11px]
        "
      >
        {subtitle}
      </p>

    </div>
  );
}


/* =========================================================
   PAYMENT BADGE
========================================================= */

function PaymentBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        h-[30px]
        min-w-[43px]
        items-center
        justify-center
        rounded-[3px]
        bg-white
        px-2
        text-[10px]
        font-bold
        text-[#273746]
      "
    >
      {children}
    </div>
  );
}


/* =========================================================
   DECORATIVE LEAF
========================================================= */

function LeafDecoration() {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >

      <path
        d="M80 215C80 150 77 82 38 15"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M75 168C38 170 17 147 11 117C42 117 65 135 75 168Z"
        fill="currentColor"
      />

      <path
        d="M73 125C109 125 133 103 140 73C109 73 87 92 73 125Z"
        fill="currentColor"
      />

      <path
        d="M59 80C32 78 15 60 12 37C36 39 54 53 59 80Z"
        fill="currentColor"
      />

      <path
        d="M83 52C107 52 124 37 128 14C104 16 89 29 83 52Z"
        fill="currentColor"
      />

    </svg>
  );
}