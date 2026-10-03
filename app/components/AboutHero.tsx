import Link from "next/link";
import { ArrowRight } from "lucide-react";

type AboutHeroProps = {
  title: string;
  breadcrumb: string;
  backgroundImage: string;
};

export default function AboutHero({
  title,
  breadcrumb,
  backgroundImage,
}: AboutHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="
          relative flex min-h-[320px] w-full items-end
          bg-cover bg-center bg-no-repeat
          sm:min-h-[360px]
          md:min-h-[400px]
          lg:min-h-[430px]
          xl:min-h-[460px]
        "
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/70
            via-black/40
            to-black/10
          "
        />

        <div
          className="
            relative z-10 mx-auto flex w-full max-w-[1400px]
            items-end px-5 pb-12
            sm:px-8 sm:pb-14
            md:px-10 md:pb-16
            lg:px-14 lg:pb-20
            xl:px-20
          "
        >
          <div className="w-full max-w-[700px]">
            <h1
              className="
                text-4xl font-extrabold leading-none
                tracking-tight text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[64px]
                xl:text-[68px]
              "
            >
              {title}
            </h1>

            <div
              className="
                mt-5 inline-flex items-center rounded-full
                border border-white/30 bg-black/20
                px-5 py-2.5 backdrop-blur-sm
                sm:mt-6 sm:px-6 sm:py-3
              "
            >
              <Link
                href="/"
                className="
                  text-sm font-medium text-white
                  transition-colors hover:text-[#42c943]
                  sm:text-[15px]
                "
              >
                Home
              </Link>

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="mx-3 text-white/80"
              />

              <span
                className="
                  text-sm font-medium text-[#f4c430]
                  sm:text-[15px]
                "
              >
                {breadcrumb}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
