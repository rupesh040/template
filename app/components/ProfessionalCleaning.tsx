import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import content from "../data/content.json";

// Default data comes from content.json → "professionalCleaning"
const defaultData = content.professionalCleaning;

interface ProfessionalCleaningProps {
  /** Pass the service id (e.g. "home-cleaning") to show that service's data */
  serviceId?: string;
}

export default function ProfessionalCleaning({
  serviceId,
}: ProfessionalCleaningProps) {
  const service = serviceId
    ? content.services.find((s) => s.id === serviceId)
    : undefined;

  const title = service ? service.title : defaultData.titleLine1;
  const titleLine2 = service ? service.tagline : defaultData.titleLine2;
  const highlight = service ? "" : defaultData.highlight;
  const image = service ? service.image : defaultData.image;
  const imageAlt = service ? service.title : defaultData.imageAlt;
  const paragraphs = service ? [service.longDescription] : defaultData.paragraphs;
  const features = service ? service.features.slice(0, 3) : defaultData.features;
  const footer = service
    ? `Whether it's your ${service.title.toLowerCase()} area, our trained experts go beyond regular cleaning to deliver a deeper, healthier result that you can see and feel. We use only safe, eco-friendly products that protect your family and the environment.`
    : defaultData.footer;
  const linkHref = service ? `/serviceDetail/${service.id}` : null;

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative w-full">
            <div className="absolute bottom-5 left-0 h-[calc(100%-20px)] w-[calc(100%-20px)] rounded-[14px] bg-[#11952b] sm:bottom-6 sm:h-[calc(100%-24px)] sm:w-[calc(100%-24px)]" />
            <div className="relative ml-5 overflow-hidden rounded-[14px] border-[6px] border-white sm:ml-6">
              <Image
                src={image}
                alt={imageAlt}
                width={700}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full">
            {service && (
              <span className="inline-block rounded-full bg-[#e8f9ed] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#11952b]">
                Our Services
              </span>
            )}

            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.15] text-[#092a43] sm:text-4xl lg:text-[46px]">
              {title}
              {titleLine2 && (
                <>
                  <br />
                  {service ? (
                    <span className="text-[#11952b]">{titleLine2}</span>
                  ) : (
                    <>
                      {titleLine2}
                      <br />
                      <span className="text-[#11952b]">{highlight}</span>
                    </>
                  )}
                </>
              )}
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#667085] sm:text-base">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-7 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm font-medium text-[#17202a] sm:text-base"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#11952b] text-white">
                    <Check size={17} strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm leading-7 text-[#667085] sm:mt-12 sm:text-base">
          {footer}
        </p>
      </div>
    </section>
  );
}