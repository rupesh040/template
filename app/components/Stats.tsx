"use client";

import { useEffect, useRef, useState } from "react";
import { Users, SprayCan, UserRound, Award, LucideIcon } from "lucide-react";
import content from "../data/content.json";

const iconMap: Record<string, LucideIcon> = {
  Users,
  SprayCan,
  UserRound,
  Award,
};

const stats = content.stats.map((s) => ({
  ...s,
  icon: iconMap[s.icon] ?? Users,
}));

export default function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12">
      <div className="pointer-events-none absolute -left-[90px] -top-[100px] h-[210px] w-[210px] rounded-full bg-[#f2f8f5] sm:-left-[70px] sm:h-[240px] sm:w-[240px]" />
      <div className="pointer-events-none absolute -right-[80px] -top-[110px] h-[200px] w-[200px] rounded-full bg-[#f1f8f4] sm:-right-[50px] sm:h-[240px] sm:w-[240px]" />

      <div className="relative z-10 mx-auto w-[calc(100%-24px)] max-w-[1500px] overflow-hidden rounded-[18px] bg-[#effaf2] px-4 py-6 sm:w-[calc(100%-40px)] sm:px-6 sm:py-7 md:px-8 md:py-8 lg:w-[calc(100%-70px)] lg:px-8 lg:py-7 xl:px-12">
        <LeafDecoration
          position="left"
          className="absolute bottom-[-15px] left-[-15px] h-[100px] w-[150px] rotate-[-10deg] text-[#bce8c8] opacity-70 sm:h-[120px] sm:w-[180px]"
        />

        <LeafDecoration
          position="right"
          className="absolute right-[-20px] top-[-30px] h-[120px] w-[160px] rotate-[25deg] text-[#c5ebcf] opacity-70 sm:h-[150px] sm:w-[200px]"
        />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.title}
              {...stat}
              isLast={index === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  title,
  description,
  icon: Icon,
  progress,
  isLast,
}: {
  value: string;
  title: string;
  description: string;
  icon: React.ElementType;
  progress: number;
  isLast: boolean;
}) {
  return (
    <div
      className={`relative flex items-center gap-4 px-3 py-5 sm:px-5 sm:py-6 lg:px-5 lg:py-2 xl:px-7 ${
        !isLast
          ? "lg:after:absolute lg:after:right-0 lg:after:top-[12%] lg:after:h-[76%] lg:after:w-px lg:after:bg-[#d6e9dc]"
          : ""
      }`}
    >
      <ProgressCircle value={progress} Icon={Icon} />

      <div className="min-w-0 flex-1">
        <AnimatedNumber value={value} />

        <p className="mt-2 text-[13px] font-semibold leading-5 text-[#263f55] sm:text-[14px] lg:text-[15px]">
          {title}
        </p>

        <span className="mt-2.5 block h-[2px] w-[38px] rounded-full bg-[#0bab3c] sm:w-[42px]" />

        <p className="mt-2.5 max-w-[220px] text-[10px] leading-[1.55] text-[#5e7180] sm:text-[11px] lg:text-[12px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const match = value.match(/^([^0-9]*)([\d,.]+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const target = Number(match[2].replace(/,/g, ""));
    const suffix = match[3];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1,
          );

          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(target * easedProgress);

          setDisplayValue(
            `${prefix}${currentValue.toLocaleString()}${suffix}`,
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(
              `${prefix}${target.toLocaleString()}${suffix}`,
            );
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <h3
      ref={ref}
      className="text-[28px] font-extrabold leading-none tracking-tight text-[#092f4b] min-[380px]:text-[30px] sm:text-[33px] lg:text-[35px]"
    >
      {displayValue}
    </h3>
  );
}

function ProgressCircle({
  value,
  Icon,
}: {
  value: number;
  Icon: React.ElementType;
}) {
  const size = 88;
  const strokeWidth = 3.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-[70px] w-[70px] shrink-0 rounded-full bg-white shadow-[0_6px_20px_rgba(8,45,76,0.08),0_0_12px_rgba(11,171,60,0.12)] min-[380px]:h-[76px] min-[380px]:w-[76px] sm:h-[84px] sm:w-[84px] lg:h-[88px] lg:w-[88px]">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 h-full w-full -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="white"
          stroke="#d9eee0"
          strokeWidth={strokeWidth}
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0bab3c"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="progress-ring"
        />
      </svg>

      <div className="absolute inset-[7px] flex items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(8,80,40,0.08)]">
        <Icon
          className="h-[27px] w-[27px] text-[#08aa3b] sm:h-[32px] sm:w-[32px]"
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}

function LeafDecoration({
  className,
  position,
}: {
  className?: string;
  position: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d={
          position === "left"
            ? "M15 105C55 88 83 57 100 15"
            : "M165 105C125 88 97 57 80 15"
        }
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M56 74C34 75 19 62 13 44C35 42 51 52 56 74Z"
        fill="currentColor"
      />

      <path
        d="M92 43C111 46 126 36 133 18C112 16 98 25 92 43Z"
        fill="currentColor"
      />

      <path
        d="M35 98C52 101 67 94 74 79C55 77 42 84 35 98Z"
        fill="currentColor"
      />
    </svg>
  );
}