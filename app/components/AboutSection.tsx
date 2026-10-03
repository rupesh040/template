"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import content from "../data/content.json";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Leaf,
  ShieldCheck,
};

export default function AboutSection() {
  const {
    badge,
    headingLine1,
    headingLine2,
    image,
    imageAlt,
    paragraphs,
    features,
    button,
  } = content.about;

  return (
    <section className="w-full overflow-hidden bg-white py-12">
      <div className="mx-auto flex w-full max-w-[1550px] flex-col items-center gap-12 px-6 sm:gap-14 sm:px-8 md:gap-16 md:px-10 lg:flex-row lg:gap-14 lg:px-14 xl:gap-20 xl:px-20 2xl:px-24">
        <div className="relative w-full lg:w-[51%] xl:w-[52%]">
          <div className="absolute left-[4%] top-[-20px] h-[72%] w-[52%] bg-[#092a43] sm:left-[5%] sm:top-[-25px] lg:left-[5%] lg:top-[-28px]" />

          <div className="relative z-10 ml-[8%] w-[84%] overflow-hidden bg-white shadow-[0_8px_30px_rgba(8,45,76,0.08)] sm:ml-[9%] sm:w-[82%] lg:ml-[8%] lg:w-[84%]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 84vw, (max-width: 1024px) 75vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[-25px] left-0 z-0 h-[100px] w-[55%] opacity-90 sm:bottom-[-32px] sm:h-[125px] lg:bottom-[-40px] lg:h-[145px] xl:bottom-[-45px] xl:h-[155px]">
            <DotPattern />
          </div>
        </div>

        <div className="w-full p-6 lg:w-[49%] lg:pr-4 xl:pr-6 2xl:pr-8">
          <p className="mb-3 text-[11px] font-bold tracking-[3px] text-[#12a83a] sm:text-[12px] sm:tracking-[4px] lg:text-[13px] lg:tracking-[5px]">
            {badge}
          </p>

          <h2 className="max-w-[650px] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#062d4c] sm:text-[43px] md:text-[48px] lg:text-[50px] xl:text-[56px]">
            {headingLine1}

            <span className="block text-[#12a83a]">
              {headingLine2}
            </span>
          </h2>

          <div className="mt-5 max-w-[650px] space-y-4 text-[12px] leading-6 text-[#526679] sm:text-[14px] sm:leading-7 lg:text-[15px] xl:text-[16px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-4 lg:gap-5 xl:gap-6">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.label}
                  className="flex min-w-0 items-center gap-3"
                >
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#eaf9ef] text-[#10ae3a] sm:h-[53px] sm:w-[53px] lg:h-[55px] lg:w-[55px]">
                    {Icon && <Icon size={23} strokeWidth={1.8} />}
                  </div>

                  <div className="text-[11px] font-semibold leading-[1.45] text-[#243e54] sm:text-[11px] lg:text-[12px] xl:text-[13px]">
                    {feature.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href={button.href}
              className="group inline-flex h-[52px] items-center gap-4 rounded-full bg-[#10ae3a] pl-7 pr-2 text-[14px] font-bold text-white shadow-[0_6px_18px_rgba(16,174,58,0.20)] transition-all duration-300 hover:bg-[#07972e] hover:shadow-[0_8px_22px_rgba(16,174,58,0.28)] sm:h-[55px] sm:gap-5 sm:pl-8 sm:text-[15px]"
            >
              <span>{button.label}</span>

              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#10ae3a] transition-transform duration-300 group-hover:translate-x-1 sm:h-[43px] sm:w-[43px]">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DotPattern() {
  return (
    <div className="h-full w-full bg-[radial-gradient(circle,#16b84a_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
  );
}