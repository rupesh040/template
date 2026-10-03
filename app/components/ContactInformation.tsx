import { Mail, MapPin, Phone, LucideIcon } from "lucide-react";
import content from "../data/content.json";

const iconMap: Record<string, LucideIcon> = { MapPin, Phone, Mail };

const { badge, heading, headingHighlight, description, items } = content.contact;

export default function ContactInformation() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rotate-[-25deg] rounded-[60%_40%_60%_40%] bg-[#eaf7ee] opacity-80 sm:h-40 sm:w-40" />

      <div className="pointer-events-none absolute -left-16 top-28 h-24 w-24 rotate-[35deg] rounded-[60%_40%_60%_40%] bg-[#eaf7ee] opacity-70 sm:h-32 sm:w-32" />

      <div className="pointer-events-none absolute -right-10 top-10 h-36 w-36 rotate-[25deg] rounded-[40%_60%_40%_60%] bg-[#e7f5eb] opacity-80 sm:h-44 sm:w-44" />

      <div className="pointer-events-none absolute -right-20 top-28 h-28 w-28 rotate-[-35deg] rounded-[40%_60%_40%_60%] bg-[#dff2e5] opacity-70 sm:h-36 sm:w-36" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="inline-flex rounded-full bg-[#dff6e6] px-4 py-1.5 text-[11px] font-bold text-[#118b38] sm:text-[12px]">
            {badge}
          </span>

          <h2 className="mt-4 text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#062d4c] sm:text-[40px] lg:text-[44px]">
            {heading}{" "}
            <span className="text-[#0a9b38]">{headingHighlight}</span>
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-[#0a9b38]" />

          <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-6 text-[#657789] sm:text-[15px] sm:leading-7">
            {description}
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? MapPin;

            return (
              <div
                key={item.title}
                className="group relative min-h-[210px] overflow-hidden rounded-[16px] border border-[#f0f3f1] bg-white px-7 py-7 shadow-[0_8px_30px_rgba(8,45,76,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(8,45,76,0.08)] sm:min-h-[220px] sm:px-8"
              >
                <div className="absolute right-[-15px] top-[-12px] opacity-[0.07]">
                  <Icon
                    size={100}
                    strokeWidth={1.5}
                    className="text-[#8b9296]"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#dff4e5] text-[#0b9d3b]">
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