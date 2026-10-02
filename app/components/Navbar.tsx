"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";


/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
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
   LEFT MENU
========================================================= */

const leftMenu = [
  {
    name: "HOME",
    href: "#",
    active: true,
  },
  {
    name: "ABOUT US",
    href: "#about",
  },
  {
    name: "SERVICES",
    href: "#services",
  },
];


/* =========================================================
   RIGHT MENU
========================================================= */

const rightMenu = [
  {
    name: "GALLERY",
    href: "#gallery",
  },
  {
    name: "BLOGS",
    href: "#blogs",
    dropdown: true,
  },
  {
    name: "CONTACT US",
    href: "#contact",
  },
];


/* =========================================================
   BLOG SUB LINKS
========================================================= */

const blogLinks = [
  {
    name: "Latest Blogs",
    href: "#blogs",
  },
  {
    name: "Articles",
    href: "#articles",
  },
];


/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [blogsOpen, setBlogsOpen] =
    useState(false);


  return (
    <header className="relative z-50 w-full">


      {/* =====================================================
          TOP BLUE BAR
      ====================================================== */}

      <div
        className="
          relative
          h-[58px]
          bg-[#092a43]
          text-white

          sm:h-[63px]
        "
      >

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-[1500px]
            items-center
            justify-between

            px-4

            sm:px-6

            lg:px-12
          "
        >


          {/* =================================================
              SOCIAL
          ================================================== */}

          <div className="flex items-center">

            {/* Follow Us */}

            <span
              className="
                mr-3
                hidden
                whitespace-nowrap
                text-sm
                font-medium

                sm:block

                lg:mr-4
              "
            >
              Follow Us:
            </span>


            {/* Social Icons */}

            <div
              className="
                flex
                items-center
                gap-1.5

                sm:gap-2.5
              "
            >

              {socialLinks.map(
                ({
                  icon: Icon,
                  href,
                  label,
                }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/60
                      text-white
                      transition
                      duration-200

                      hover:bg-white
                      hover:text-[#092a43]

                      sm:h-9
                      sm:w-9
                    "
                  >

                    <Icon
                      size={15}
                      className="
                        sm:h-[17px]
                        sm:w-[17px]
                      "
                    />

                  </Link>
                )
              )}

            </div>

          </div>


          {/* =================================================
              CONTACT INFO
          ================================================== */}

          <div className="flex items-center">


            {/* PHONE */}

            <a
              href="tel:+919876543210"
              aria-label="Call PureShine"
              className="
                flex
                items-center
                gap-2
                whitespace-nowrap
                text-sm
              "
            >

              <Phone
                size={18}
                strokeWidth={2.5}
                className="text-[#62c542]"
              />

              {/* Hide number on mobile */}

              <span className="hidden md:inline">
                +91 98765 43210
              </span>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:info@pureshine.com"
              aria-label="Email PureShine"
              className="
                ml-4
                flex
                items-center
                gap-2
                whitespace-nowrap
                text-sm

                lg:ml-10
              "
            >

              <Mail
                size={18}
                strokeWidth={2.5}
                className="text-[#62c542]"
              />

              {/* Hide email on mobile */}

              <span className="hidden md:inline">
                info@pureshine.com
              </span>

            </a>

          </div>

        </div>


        {/* =================================================
            CENTER LOGO
        ================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-0
            z-50
            hidden
            h-[120px]
            w-[280px]
            -translate-x-1/2
            bg-white

            sm:flex
            sm:h-[128px]
            sm:w-[310px]

            lg:h-[132px]
            lg:w-[330px]
          "
          style={{
            borderRadius: "0 0 50% 50%",
          }}
        >

          <Link
            href="/"
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
            "
          >

            <Image
              src="/logo.png"
              alt="PureShine"
              width={190}
              height={110}
              priority
              className="
                mt-1
                h-auto
                w-[155px]
                object-contain

                sm:w-[175px]

                lg:w-[190px]
              "
            />

          </Link>

        </div>

      </div>


      {/* =====================================================
          DESKTOP NAVIGATION
      ====================================================== */}

      <div
        className="
          relative
          hidden
          h-[69px]
          bg-white
          shadow-sm

          md:block
        "
      >

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-[1250px]
            items-center
            px-6
          "
        >


          {/* =================================================
              LEFT MENU
          ================================================== */}

          <nav
            className="
              flex
              h-full
              items-center
              gap-10

              lg:gap-14
            "
          >

            {leftMenu.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative
                  flex
                  h-full
                  items-center
                  whitespace-nowrap
                  text-[14px]
                  font-semibold

                  lg:text-[15px]

                  ${
                    item.active
                      ? "text-[#42b83c]"
                      : "text-[#17202a] hover:text-[#42b83c]"
                  }
                `}
              >

                {item.name}


                {/* Active underline */}

                {item.active && (
                  <span
                    className="
                      absolute
                      bottom-[10px]
                      left-0
                      h-[2px]
                      w-full
                      bg-[#42b83c]
                    "
                  />
                )}

              </Link>

            ))}

          </nav>


          {/* =================================================
              RIGHT MENU
          ================================================== */}

          <nav
            className="
              ml-auto
              flex
              h-full
              items-center
              gap-10

              lg:gap-14
            "
          >

            {rightMenu.map((item) => {


              /* =============================================
                 BLOGS WITH DESKTOP HOVER DROPDOWN
              ============================================== */

              if (item.dropdown) {

                return (
                  <div
                    key={item.name}
                    className="
                      group
                      relative
                      flex
                      h-full
                      items-center
                    "
                  >

                    {/* BLOGS */}

                    <Link
                      href={item.href}
                      className="
                        flex
                        h-full
                        items-center
                        gap-1
                        whitespace-nowrap
                        text-[14px]
                        font-semibold
                        text-[#17202a]
                        transition-colors
                        duration-200

                        hover:text-[#42b83c]

                        lg:text-[15px]

                        focus:outline-none
                        focus-visible:text-[#42b83c]
                      "
                    >

                      BLOGS

                      <ChevronDown
                        size={13}
                        strokeWidth={2.5}
                        className="
                          transition-transform
                          duration-200

                          group-hover:rotate-180
                          group-focus-within:rotate-180
                        "
                      />

                    </Link>


                    {/* =======================================
                        DROPDOWN
                    ======================================== */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-[69px]
                        z-[100]
                        w-[195px]
                        -translate-x-1/2
                        translate-y-2
                        rounded-xl
                        border
                        border-gray-100
                        bg-white
                        p-2
                        opacity-0
                        shadow-[0_12px_35px_rgba(0,0,0,0.14)]
                        transition-all
                        duration-200

                        group-hover:pointer-events-auto
                        group-hover:translate-y-0
                        group-hover:opacity-100

                        group-focus-within:pointer-events-auto
                        group-focus-within:translate-y-0
                        group-focus-within:opacity-100
                      "
                    >


                      {/* Dropdown arrow */}

                      <span
                        className="
                          absolute
                          -top-[6px]
                          left-1/2
                          h-3
                          w-3
                          -translate-x-1/2
                          rotate-45
                          border-l
                          border-t
                          border-gray-100
                          bg-white
                        "
                      />


                      {/* Blog Links */}

                      {blogLinks.map((blog) => (

                        <Link
                          key={blog.name}
                          href={blog.href}
                          className="
                            relative
                            z-10
                            flex
                            items-center
                            rounded-lg
                            px-4
                            py-3
                            text-[14px]
                            font-medium
                            text-[#263c4d]
                            transition-all
                            duration-200

                            hover:bg-[#f0fbf2]
                            hover:pl-5
                            hover:text-[#42b83c]

                            focus:bg-[#f0fbf2]
                            focus:text-[#42b83c]
                            focus:outline-none
                          "
                        >
                          {blog.name}
                        </Link>

                      ))}

                    </div>

                  </div>
                );
              }


              /* =============================================
                 NORMAL RIGHT MENU ITEM
              ============================================== */

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    flex
                    h-full
                    items-center
                    gap-1
                    whitespace-nowrap
                    text-[14px]
                    font-semibold
                    text-[#17202a]
                    transition
                    duration-200

                    hover:text-[#42b83c]

                    lg:text-[15px]
                  "
                >

                  {item.name}

                </Link>
              );

            })}

          </nav>

        </div>


        {/* =================================================
            BOTTOM CURVE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-5px]
            left-0
            h-[10px]
            w-full
            overflow-hidden
          "
        >

          <div
            className="
              absolute
              left-1/2
              top-[-4px]
              h-[12px]
              w-[65%]
              -translate-x-1/2
              rounded-[50%]
              bg-[#f3f7f8]
            "
          />

        </div>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION BAR
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-[67px]
          items-center
          justify-between
          bg-white
          px-4
          shadow-sm

          md:hidden
        "
      >


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            text-[#092a43]
            transition

            hover:bg-[#f1f5f7]
          "
        >

          {mobileMenuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}

        </button>


        {/* MOBILE LOGO */}

        <Link
          href="/"
          className="
            absolute
            left-1/2
            top-0
            flex
            -translate-x-1/2
            items-center
            justify-center
          "
        >

          <div
            className="
              flex
              h-[78px]
              w-[170px]
              items-center
              justify-center
              rounded-b-[50%]
              bg-white
            "
          >

            <Image
              src="/logo.png"
              alt="PureShine"
              width={150}
              height={85}
              priority
              className="
                mt-1
                w-[135px]
                object-contain
              "
            />

          </div>

        </Link>

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileMenuOpen && (

        <div
          className="
            border-t
            border-gray-100
            bg-white
            shadow-lg

            md:hidden
          "
        >

          <nav className="flex flex-col">


            {/* =================================================
                HOME / ABOUT / SERVICES
            ================================================== */}

            {leftMenu.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className={`
                  border-b
                  border-gray-100
                  px-6
                  py-4
                  text-sm
                  font-semibold

                  ${
                    item.active
                      ? "bg-[#f4fff5] text-[#42b83c]"
                      : "text-[#17202a]"
                  }
                `}
              >

                {item.name}

              </Link>

            ))}


            {/* =================================================
                GALLERY
            ================================================== */}

            <Link
              href="#gallery"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                border-b
                border-gray-100
                px-6
                py-4
                text-sm
                font-semibold
                text-[#17202a]
              "
            >
              GALLERY
            </Link>


            {/* =================================================
                MOBILE BLOGS BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setBlogsOpen(!blogsOpen)
              }
              className="
                flex
                w-full
                items-center
                justify-between
                border-b
                border-gray-100
                px-6
                py-4
                text-left
                text-sm
                font-semibold
                text-[#17202a]
              "
            >

              BLOGS

              <ChevronDown
                size={17}
                className={`
                  transition-transform
                  duration-200

                  ${
                    blogsOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

            </button>


            {/* =================================================
                MOBILE BLOG SUBMENU
            ================================================== */}

            {blogsOpen && (

              <div
                className="
                  bg-[#f7fafb]
                "
              >

                {blogLinks.map((blog) => (

                  <Link
                    key={blog.name}
                    href={blog.href}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className="
                      block
                      border-b
                      border-gray-100
                      px-10
                      py-3
                      text-sm
                      text-[#405565]
                      transition-colors

                      hover:bg-[#eefaf0]
                      hover:text-[#42b83c]
                    "
                  >

                    {blog.name}

                  </Link>

                ))}

              </div>

            )}


            {/* =================================================
                CONTACT
            ================================================== */}

            <Link
              href="#contact"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                px-6
                py-4
                text-sm
                font-semibold
                text-[#17202a]
              "
            >
              CONTACT US
            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}