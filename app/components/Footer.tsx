"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Clock3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import content from "../data/content.json";

const faIconMap: Record<string, typeof FaFacebookF> = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  LinkedIn: FaLinkedinIn,
  YouTube: FaYoutube,
};

const lucideIconMap: Record<string, typeof Leaf> = {
  Leaf,
  Award,
  ShieldCheck,
  Clock3,
};

const footer = content.footer;

const quickLinks = footer.quickLinks.map((link) => [link.name, link.href]);
const serviceLinks = footer.serviceLinks.map((link) => [link.name, link.href]);
const socialLinks = footer.socialLinks.map((social) => ({
  ...social,
  icon: faIconMap[social.label] ?? FaFacebookF,
}));
const trustBadges = footer.trustBadges.map((badge) => ({
  ...badge,
  icon: lucideIconMap[badge.icon] ?? Leaf,
}));
const paymentMethods = footer.paymentMethods.map((payment) =>
  typeof payment === "string" ? payment : payment.label,
);
const legalLinks = footer.legalLinks;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#032e47] text-white">
      <div className="pointer-events-none absolute right-[-20px] top-[-20px] hidden h-[220px] w-[150px] opacity-[0.08] lg:block">
        <LeafDecoration />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-8 pb-4 sm:px-8 sm:pt-10 sm:pb-4 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_0.8fr_1.05fr_1.3fr] lg:gap-6 xl:gap-8">
          <div>
            <Link href={footer.logoHref} className="inline-block">
              <Image
                src={footer.logo}
                alt={footer.logoAlt}
                width={200}
                height={115}
                priority
                className="h-auto w-[165px] object-contain"
              />
            </Link>

            <p className="mt-2 max-w-[280px] text-[13px] leading-5 text-white/70 sm:text-[13.5px]">
              {footer.description}
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-200 hover:border-[#17b83c] hover:bg-[#17b83c] hover:text-white"
                >
                  <Icon size={13} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>{footer.quickLinksTitle}</FooterHeading>

            <ul className="mt-4 space-y-2.5">
              {quickLinks.map(([name, href]) => (
                <FooterLink key={name} name={name} href={href} />
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>{footer.servicesTitle}</FooterHeading>

            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map(([name, href]) => (
                <FooterLink key={name} name={name} href={href} />
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>{footer.contactTitle}</FooterHeading>

            <ContactItem
              icon={<Phone size={17} />}
              title={footer.contact.phone}
              subtitle={footer.contact.phoneHours}
              href={footer.contact.phoneHref}
            />

            <ContactItem
              icon={<Mail size={17} />}
              title={footer.contact.email}
              subtitle={footer.contact.emailNote}
              href={footer.contact.emailHref}
            />

            <ContactItem
              icon={<MapPin size={17} />}
              title={footer.contact.address}
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <FooterHeading>{footer.newsletter.title}</FooterHeading>

            <p className="mt-2 text-[12.5px] leading-5 text-white/65">
              {footer.newsletter.description}
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-3.5 flex h-10 w-full overflow-hidden rounded-md border border-white/20 bg-white/[0.04]"
            >
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="min-w-0 flex-1 bg-transparent px-3 text-[12.5px] text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                aria-label={footer.newsletter.submitLabel}
                className="flex w-10 shrink-0 items-center justify-center bg-[#12b63a] transition hover:bg-[#0c9c30]"
              >
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </form>

            <div className="mt-4 pt-3.5 border-t border-white/10">
              <div className="grid grid-cols-4 gap-2">
                {trustBadges.map((badge) => (
                  <TrustBadge
                    key={badge.title}
                    icon={<badge.icon size={16} />}
                    title={badge.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 h-px w-full bg-white/15" />

        <div className="flex flex-col gap-4 pt-4 pb-1 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-center text-[12px] text-white/60 lg:text-left lg:text-[13px]">
            {footer.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] text-white/60 lg:text-[13px]">
            {legalLinks.map((link, index) => (
              <Fragment key={link.name}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>

                {index < legalLinks.length - 1 && (
                  <span className="text-white/25">|</span>
                )}
              </Fragment>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 lg:justify-end">
            {paymentMethods.map((payment) => (
              <PaymentBadge key={payment} type={payment}>
                {payment}
              </PaymentBadge>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[15px] font-bold leading-5 text-white sm:text-[16px] mb-2">
        {children}
      </h3>

      <span className="mt-2 block h-[2.5px] w-8 rounded-full bg-[#12b83b]" />
    </div>
  );
}

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-[13px] leading-5 text-white/65 transition-colors hover:text-[#18bb40] sm:text-[13.5px]"
      >
        <span className="text-[18px] leading-4 text-white/70 transition-transform duration-200 group-hover:translate-x-1">
          ›
        </span>

        <span>{name}</span>
      </Link>
    </li>
  );
}

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
    <div className="flex w-full items-start gap-2.5 mb-6">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#075f4e] text-white">
        {icon}
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        <div className="break-words text-[13px] font-medium leading-4 text-white sm:text-[13.5px]">
          {title}
        </div>

        {subtitle && (
          <p className="mt-0.5 text-[11px] leading-3 text-white/50 sm:text-[11.5px]">
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
        className="mt-3.5 block transition-opacity hover:opacity-80"
      >
        {content}
      </Link>
    );
  }

  return <div className="mt-3.5">{content}</div>;
}

function TrustBadge({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#075f4e] text-white">
        {icon}
      </div>

      <p className="mt-1.5 text-[10px] font-medium leading-tight text-white/80 sm:text-[10.5px]">
        {title}
      </p>
    </div>
  );
}

function PaymentBadge({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) {
  const styles: Record<string, string> = {
    VISA: "text-[#1a4fa3]",
    Mastercard: "text-[#111]",
    Paytm: "text-[#0879d1]",
    UPI: "text-[#273746]",
  };

  return (
    <div className="flex h-7 min-w-[43px] items-center justify-center rounded-[3px] bg-white px-2 text-[10px] font-bold">
      {type === "Mastercard" ? (
        <span className="relative h-4 w-7">
          <span className="absolute left-0 top-0 h-4 w-4 rounded-full bg-[#eb001b]" />
          <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-[#f79e1b] mix-blend-multiply" />
        </span>
      ) : (
        <span className={styles[type] ?? "text-[#273746]"}>{children}</span>
      )}
    </div>
  );
}

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
