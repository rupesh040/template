"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Mail, Menu, Phone, X } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

import content from "../data/content.json";

const iconMap: Record<string, IconType> = {
  Facebook: FaFacebookF,
  Twitter: FaXTwitter,
  X: FaXTwitter,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
};

const {
  socialLinks: rawSocial,
  leftMenu,
  rightMenu,
} = content.navbar;
const { phone, phoneHref, email, emailHref } = content.site;
const mailtoHref = emailHref.startsWith("mailto:")
  ? emailHref
  : `mailto:${emailHref}`;

const socialLinks = rawSocial.map((s) => ({
  ...s,
  icon: iconMap[s.label] ?? FaFacebookF,
}));

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="relative z-50 w-full">
      <div className="relative h-[58px] bg-[#092a43] text-white sm:h-[63px]">
        <div
          className="
            mx-auto flex h-full max-w-[1500px] items-center justify-between
            px-4 sm:px-6 lg:px-12
          "
        >
          <div className="flex items-center">
            <span
              className="
                mr-3 hidden whitespace-nowrap text-sm font-medium
                min-[1025px]:block min-[1025px]:mr-4
              "
            >
              Follow Us:
            </span>

            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                      flex h-8 w-8 items-center justify-center rounded-full
                      border border-white/60 text-white transition duration-200
                      hover:bg-white hover:text-[#092a43]
                      sm:h-9 sm:w-9
                    "
                >
                  <Icon size={15} className="sm:h-[17px] sm:w-[17px]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <a
              href={phoneHref}
              aria-label="Call PureShine"
              className="
                flex items-center gap-2 whitespace-nowrap text-sm
              "
            >
              <Phone size={18} strokeWidth={2.5} className="text-[#62c542]" />

              <span className="hidden md:inline">{phone}</span>
            </a>

            <a
              href={mailtoHref}
              aria-label="Email PureShine"
              className="
                ml-4 flex items-center gap-2 whitespace-nowrap text-sm
                sm:ml-6 lg:ml-10
              "
            >
              <Mail size={18} strokeWidth={2.5} className="text-[#62c542]" />

              <span className="hidden md:inline">{email}</span>
            </a>
          </div>
        </div>
        <div
          className="
            absolute left-1/2 top-0 z-50 hidden h-[120px] w-[260px]
            -translate-x-1/2 bg-white
            min-[1025px]:flex xl:w-[280px]
          "
          style={{
            borderRadius: "0 0 50% 50%",
          }}
        >
          <Link
            href="/"
            className="
              relative z-10 flex h-full w-full items-center justify-center
            "
          >
            <Image
              src="/logo.png"
              alt="PureShine"
              width={190}
              height={110}
              priority
              className="
                mt-1 h-auto w-[155px] object-contain
                sm:w-[175px]
                lg:w-[190px]
              "
            />
          </Link>
          <svg
            className="pointer-events-none absolute -bottom-12 left-1/2 z-0 h-[180px] w-[280px] -translate-x-1/2"
            viewBox="0 0 280 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="140" cy="100" rx="140" ry="100" fill="white" />
          </svg>
        </div>
      </div>
      <div
        className="
          relative hidden h-[69px] bg-white shadow-sm
          min-[1025px]:block
        "
      >
        <div
          className="
            mx-auto flex h-full max-w-[1250px] items-center px-6
          "
        >
          <nav
            className="
              flex h-full items-center gap-6
              min-[1150px]:gap-10 xl:gap-14
            "
          >
            {leftMenu.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative flex h-full items-center whitespace-nowrap
                    text-[14px] font-semibold xl:text-[15px]
                    ${
                      active
                        ? "text-[#42b83c]"
                        : "text-[#17202a] hover:text-[#42b83c]"
                    }
                  `}
                >
                  {item.name}

                  {active && (
                    <span
                      className="
                        absolute bottom-[12px] left-0 h-[2px] w-full
                        bg-[#42b83c]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <nav
            className="
              ml-auto flex h-full items-center gap-6
              min-[1150px]:gap-10 xl:gap-14
            "
          >
            {rightMenu.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative flex h-full items-center gap-1 whitespace-nowrap
                    text-[14px] font-semibold transition duration-200
                    xl:text-[15px]
                    ${
                      active
                        ? "text-[#42b83c]"
                        : "text-[#17202a] hover:text-[#42b83c]"
                    }
                  `}
                >
                  {item.name}
                  {active && (
                    <span
                      className="
                        absolute bottom-[12px] left-0 h-[2px] w-full
                        bg-[#42b83c]
                      "
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          className="
            pointer-events-none absolute bottom-[-5px] left-0
            h-[10px] w-full overflow-hidden
          "
        >
          <div
            className="
              absolute left-1/2 top-[-4px] h-[12px] w-[65%]
              -translate-x-1/2 rounded-[50%] bg-[#f3f7f8]
            "
          />
        </div>
      </div>
      <div
        className="
          relative flex h-[67px] items-center justify-between
          bg-white px-4 shadow-sm
          min-[1025px]:hidden
        "
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          className="
            flex h-10 w-10 items-center justify-center rounded-md
            text-[#092a43] transition hover:bg-[#f1f5f7] cursor-pointer
          "
        >
          {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <Link
          href="/"
          className="
            absolute left-1/2 top-0 flex -translate-x-1/2
            items-center justify-center
          "
        >
          <div
            className="
              flex h-[85px] w-[170px] items-center justify-center
              rounded-b-[50%] bg-white
            "
          >
            <Image
              src="/logo.png"
              alt="PureShine"
              width={150}
              height={85}
              priority
              className="mt-1 w-[135px] object-contain"
            />
          </div>
        </Link>
      </div>
      {mobileMenuOpen && (
        <div
          className="
            border-t border-gray-100 bg-white shadow-lg
            min-[1025px]:hidden
          "
        >
          <nav className="flex flex-col">
            {leftMenu.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    border-b border-gray-100 px-6 py-4
                    text-sm font-semibold
                    ${active ? "bg-[#f4fff5] text-[#42b83c]" : "text-[#17202a]"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            {rightMenu.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    border-b border-gray-100 px-6 py-4
                    text-sm font-semibold
                    ${active ? "bg-[#f4fff5] text-[#42b83c]" : "text-[#17202a]"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2.5 bg-[#f8fafc] px-6 py-4 text-xs text-[#092a43]/70 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={phoneHref}
              className="flex items-center gap-2 hover:text-[#42b83c]"
            >
              <Phone size={14} className="text-[#42b83c]" />
              <span>{phone}</span>
            </a>
            <a
              href={mailtoHref}
              className="flex items-center gap-2 hover:text-[#42b83c]"
            >
              <Mail size={14} className="text-[#42b83c]" />
              <span>{email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
