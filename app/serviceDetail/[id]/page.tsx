import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, PhoneCall } from "lucide-react";
import content from "../../data/content.json";
import AboutHero from "../../components/AboutHero";
import ProfessionalCleaning from "../../components/ProfessionalCleaning";
import Services from "../../components/Services";

export async function generateStaticParams() {
  return content.services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = content.services.find((s) => s.id === id);
  if (!service) return {};
  return {
    title: `${service.title} | PureShine`,
    description: service.longDescription.slice(0, 155),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = content.services.find((s) => s.id === id);

  if (!service) notFound();


  return (
    <>
      {/* ── Hero ── */}
      <AboutHero
        title={service.title}
        breadcrumb={service.title}
        backgroundImage="/about-hero.webp"
      />

      {/* ── Intro Section (data fetched by id from serviceData.ts) ── */}
      <ProfessionalCleaning serviceId={id} />

      {/* ── What's Included + All Features ── */}
      <section className="w-full bg-[#f7fbf8] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

            {/* All Features */}
            <div>
              <span className="inline-block rounded-full bg-[#e8f9ed] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#11952b]">
                Everything We Cover
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-[#092a43] sm:text-3xl">
                Full List of Features
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Every clean is performed to the highest standard. Here is exactly
                what is included when you book {service.title} with PureShine.
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[#17202a]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#11952b] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes cards */}
            <div>
              <span className="inline-block rounded-full bg-[#e8f9ed] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#11952b]">
                Areas Covered
              </span>
              <h3 className="mt-3 text-2xl font-extrabold text-[#092a43] sm:text-3xl">
                What&apos;s Included
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#667085]">
                We make sure no corner is missed. Our thorough checklist covers
                all the following areas.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-2xl border border-[#dff0e4] bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f9ed] text-[#11952b]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[13px] font-semibold text-[#122f48]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="w-full bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#e8f9ed] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#11952b]">
              How It Works
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-[#092a43] sm:text-3xl lg:text-4xl">
              Our Simple 4-Step Process
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
              Booking and getting a professional clean has never been easier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-3xl border border-[#eef2f3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                {/* connector line for desktop */}
                {idx < service.process.length - 1 && (
                  <span className="absolute right-0 top-8 hidden h-px w-6 translate-x-full bg-[#c9ebd4] lg:block" />
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#11952b] text-lg font-bold text-white">
                  {step.step}
                </span>
                <h4 className="mt-4 text-[15px] font-bold text-[#092a43]">
                  {step.title}
                </h4>
                <p className="mt-2 text-[13px] leading-5 text-[#667085]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-[#092a43] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Ready for a Spotless Clean?
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
            Book your {service.title} today and experience the PureShine
            difference. Fast response, professional team, guaranteed results.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-[#11952b] px-8 text-[14px] font-bold text-white shadow transition hover:bg-[#0c7d24]"
            >
              <PhoneCall size={18} />
              Book Now
            </Link>
            <Link
              href="/services"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <Services />
    </>
  );
}