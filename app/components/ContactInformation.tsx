"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import content from "../data/content.json";

const iconMap: Record<string, LucideIcon> = { MapPin, Phone, Mail };

const { badge, heading, headingHighlight, description, items } = content.contact;

export default function ContactInformation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => setIsVisible(true), 60);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-5 py-6"
    >
      <div
        className={`pointer-events-none absolute -left-8 top-8 h-32 w-32 rotate-[-25deg] rounded-[60%_40%_60%_40%] bg-[#eaf7ee] transition-all duration-700 sm:h-40 sm:w-40 ${
          isVisible ? "scale-100 opacity-80" : "scale-75 opacity-0"
        }`}
      />

      <div
        className={`pointer-events-none absolute -left-16 top-28 h-24 w-24 rotate-[35deg] rounded-[60%_40%_60%_40%] bg-[#eaf7ee] transition-all duration-700 sm:h-32 sm:w-32 ${
          isVisible ? "scale-100 opacity-70" : "scale-75 opacity-0"
        }`}
      />

      <div
        className={`pointer-events-none absolute -right-10 top-10 h-36 w-36 rotate-[25deg] rounded-[40%_60%_40%_60%] bg-[#e7f5eb] transition-all duration-700 sm:h-44 sm:w-44 ${
          isVisible ? "scale-100 opacity-80" : "scale-75 opacity-0"
        }`}
      />

      <div
        className={`pointer-events-none absolute -right-20 top-28 h-28 w-28 rotate-[-35deg] rounded-[40%_60%_40%_60%] bg-[#dff2e5] transition-all duration-700 sm:h-36 sm:w-36 ${
          isVisible ? "scale-100 opacity-70" : "scale-75 opacity-0"
        }`}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[760px] text-center">
          <span
            style={{ animationDelay: "150ms" }}
            className={`inline-flex rounded-full bg-[#dff6e6] px-4 py-1.5 text-[11px] font-bold text-[#118b38] sm:text-[12px] ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {badge}
          </span>

          <h2
            style={{ animationDelay: "260ms" }}
            className={`mt-4 text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#062d4c] sm:text-[40px] lg:text-[44px] ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {heading}{" "}
            <span className="text-[#0a9b38]">{headingHighlight}</span>
          </h2>

          <div
            style={{ animationDelay: "340ms" }}
            className={`mx-auto mt-3 h-[3px] w-12 rounded-full bg-[#0a9b38] ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          />

          <p
            style={{ animationDelay: "420ms" }}
            className={`mx-auto mt-4 max-w-[700px] text-[13px] leading-6 text-[#657789] sm:text-[15px] sm:leading-7 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {description}
          </p>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? MapPin;

            return (
              <div
                key={item.title}
                style={{ animationDelay: `${500 + idx * 100}ms` }}
                className={`group relative min-h-[210px] overflow-hidden rounded-[16px] border border-[#f0f3f1] bg-white px-7 py-7 shadow-[0_8px_30px_rgba(8,45,76,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(8,45,76,0.10)] sm:min-h-[220px] sm:px-8 ${
                  isVisible ? "animate-fade-in-scale" : "opacity-0"
                }`}
              >
                <div className="absolute right-[-15px] top-[-12px] opacity-[0.07] transition-transform duration-500 group-hover:scale-110">
                  <Icon
                    size={100}
                    strokeWidth={1.5}
                    className="text-[#8b9296]"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#dff4e5] text-[#0b9d3b] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={36} strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 text-[19px] font-extrabold text-[#092f4b] sm:text-[20px]">
                    {item.title}
                  </h3>

                  <div className="mt-2 text-[14px] leading-6 text-[#637789] sm:text-[15px]">
                    {item.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}