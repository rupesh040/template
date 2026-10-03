"use client";

import Image from "next/image";
import type { ElementType } from "react";
import {
  Users,
  Leaf,
  ShieldCheck,
  Coins,
  Sparkles,
  Home,
  Clock3,
  Target,
  type LucideIcon,
} from "lucide-react";
import content from "../data/content.json";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Leaf,
  ShieldCheck,
  Coins,
  Sparkles,
  Home,
  Clock3,
  Target,
};

const {
  badge,
  headingLine1,
  headingLine2,
  description,
  image,
  imageAlt,
  mission,
  benefits,
  highlights,
  banner,
} = content.whyChooseUs;

const MissionIcon = iconMap[mission.icon] ?? Target;

const benefitsWithIcons = benefits.map((b) => ({
  ...b,
  icon: iconMap[b.icon] ?? Users,
}));

const highlightsWithIcons = highlights.map((h) => ({
  ...h,
  icon: iconMap[h.icon] ?? Sparkles,
}));

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute -left-[90px] -top-[50px] h-[180px] w-[180px] rounded-full bg-[#f3f9f6] sm:h-[230px] sm:w-[230px] lg:h-[270px] lg:w-[270px]" />
      <div className="pointer-events-none absolute left-[8%] top-[55px] h-[55px] w-[55px] rounded-full bg-[#f5faf8] sm:h-[75px] sm:w-[75px]" />
      <div className="pointer-events-none absolute -top-[60px] left-[28%] hidden h-[150px] w-[150px] rounded-full bg-[#f5faf8] lg:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] flex-col gap-12 px-5 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-12 xl:gap-16 xl:px-16">
        <div className="w-full lg:w-[51%]">
          <p className="text-[11px] font-bold tracking-[3px] text-[#12aa3b] sm:text-[13px] sm:tracking-[4px] lg:text-[14px] lg:tracking-[5px]">
            {badge}
          </p>

          <h2 className="mt-3 max-w-[680px] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#062d4c] sm:text-[42px] md:text-[46px] lg:text-[48px] xl:text-[53px]">
            {headingLine1}
            <span className="block text-[#10a83a]">{headingLine2}</span>
          </h2>

          <p className="mt-5 max-w-[650px] text-[14px] leading-6 text-[#526679] sm:text-[15px] sm:leading-7 lg:text-[16px]">
            {description}
          </p>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
            {benefitsWithIcons.map((benefit) => (
              <BenefitItem
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-[18px] bg-[#ddf8d5] px-4 py-5 sm:mt-9 sm:gap-4 sm:px-7 sm:py-6">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center text-[#062d4c] sm:h-[62px] sm:w-[62px]">
              <MissionIcon size={44} strokeWidth={1.6} className="sm:h-12 sm:w-12" />
            </div>
            <div className="h-[48px] w-[2px] shrink-0 bg-[#8edc81] sm:h-[58px]" />
            <p className="text-[13px] font-semibold leading-5 text-[#092f4b] sm:text-[16px] sm:leading-7 lg:text-[17px]">
              {mission.text}
            </p>
          </div>
        </div>
        <div className="relative w-full lg:w-[49%]">
          <div className="relative min-h-[430px] w-full overflow-hidden rounded-[30px] sm:min-h-[520px] sm:rounded-[35px] lg:min-h-[600px] lg:rounded-l-[130px] lg:rounded-r-[30px] xl:min-h-[660px] xl:rounded-l-[160px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
              className="object-cover object-center sm:object-[55%_center] lg:object-right"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062d4c]/10 via-transparent to-transparent" />
          </div>
          <div className="absolute right-2.5 bottom-[18%] z-30 flex w-[124px] flex-col gap-1.5 min-[380px]:right-3 min-[380px]:w-[138px] min-[440px]:w-[155px] sm:right-4 sm:top-[10%] sm:w-[195px] sm:gap-2.5 md:right-5 md:w-[208px] lg:-right-3 lg:top-[12%] lg:w-[205px] lg:gap-3 xl:-right-4 xl:w-[218px]">
            {highlightsWithIcons.map((item) => (
              <HighlightCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="absolute bottom-0 right-0 z-40 flex h-[75px] w-[175px] items-center justify-center rounded-tl-[38px] bg-[#062d4c] px-4 sm:h-[88px] sm:w-[205px] sm:rounded-tl-[45px] lg:h-[100px] lg:w-[235px] xl:h-[108px] xl:w-[250px]">
            <p className="text-[12px] font-semibold leading-5 text-white sm:text-[14px] lg:text-[15px]">
              {banner.line1}
              <br />
              {banner.line2}
            </p>
            <span className="ml-2 h-[2px] w-[25px] bg-[#18bd3e] sm:ml-3 sm:w-[32px]" />
          </div>
          <div className="pointer-events-none absolute bottom-[-20px] left-[-45px] z-0 hidden h-[180px] w-[180px] opacity-70 lg:block">
            <DotPattern />
          </div>
          <div className="pointer-events-none absolute left-[-25px] top-[12%] z-20 hidden h-[150px] w-[50px] overflow-hidden lg:block">
            <div className="absolute -left-[100px] top-0 h-[150px] w-[150px] rounded-full border-[35px] border-[#e9f8ed]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e7f9e9] text-[#10aa3a] sm:h-[56px] sm:w-[56px]">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <div className="pt-1">
        <h3 className="text-[13px] font-bold leading-5 text-[#102f49] sm:text-[15px]">
          {title}
        </h3>
        <p className="mt-1 max-w-[230px] text-[11px] leading-5 text-[#627487] sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function HighlightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[42px] w-full items-center gap-1.5 rounded-[8px] border border-white/80 bg-white/95 px-1.5 py-1 shadow-[0_4px_16px_rgba(8,45,76,0.12)] backdrop-blur-sm min-[380px]:min-h-[46px] min-[380px]:gap-2 min-[380px]:rounded-[10px] min-[380px]:px-2 min-[380px]:py-1.5 sm:min-h-[72px] sm:gap-2.5 sm:rounded-[14px] sm:bg-white sm:px-3 sm:py-2.5 sm:shadow-[0_8px_28px_rgba(8,45,76,0.14)]">
      {/* Icon Circle */}
      <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#e3f9e6] text-[#10a83a] min-[380px]:h-[26px] min-[380px]:w-[26px] sm:h-[38px] sm:w-[38px]">
        <Icon
          className="h-2.5 w-2.5 min-[380px]:h-3 min-[380px]:w-3 sm:h-[18px] sm:w-[18px]"
          strokeWidth={1.8}
        />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h3 className="truncate text-[7.5px] font-bold leading-tight text-[#102f49] min-[380px]:text-[8.5px] sm:text-[11px] sm:leading-tight">
          {title}
        </h3>
        <p className="truncate text-[6.5px] leading-tight text-[#68798a] min-[380px]:text-[7.5px] sm:text-[9.5px] sm:leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
}

function DotPattern() {
  return (
    <div className="h-full w-full bg-[radial-gradient(circle,#16b84a_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
  );
}
