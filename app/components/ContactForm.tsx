"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Headphones,
  LockKeyhole,
  LucideIcon,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import content from "../data/content.json";

const iconMap: Record<string, LucideIcon> = {
  User,
  Phone,
  Mail,
  MessageSquare,
  LockKeyhole,
  Headphones,
  ArrowRight,
};

const formData = content.contact?.form;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
  };

  const PrivacyIcon =
    iconMap[formData?.privacyNote?.icon ?? "LockKeyhole"] ?? LockKeyhole;
  const MessageAreaIcon =
    iconMap[formData?.message?.icon ?? "MessageSquare"] ?? MessageSquare;
  const AssistanceIcon =
    iconMap[formData?.sidebar?.assistance?.icon ?? "Headphones"] ?? Headphones;

  return (
    <section className="overflow-hidden bg-[#07543f]">
      <div className="mx-auto grid min-h-[650px] w-full max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <div className="relative overflow-hidden px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0a634b] opacity-50" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#064b3a] opacity-70" />

          <div className="relative z-10 mx-auto max-w-[570px]">
            <p className="text-[14px] font-bold text-[#ffd95a]">
              {formData?.badge ?? "Send us a Message"}
            </p>

            <h2 className="mt-4 max-w-[440px] text-[40px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[52px]">
              {formData?.headingLine1 ?? "We’re Here"}
              <br />
              {formData?.headingLine2 ?? "to Help!"}
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] leading-7 text-white/80 sm:text-[16px]">
              {formData?.description ??
                "Fill out the form and our team will get back to you as soon as possible."}
            </p>

            <form onSubmit={handleSubmit} className="mt-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {formData?.fields?.map((field) => {
                  const FieldIcon = iconMap[field.icon] ?? User;

                  return (
                    <InputField
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      icon={<FieldIcon size={19} />}
                    />
                  );
                })}
              </div>

              <div className="relative mt-4">
                <MessageAreaIcon
                  size={19}
                  className="absolute left-4 top-4 text-[#119b62]"
                />

                <textarea
                  name={formData?.message?.name ?? "message"}
                  placeholder={formData?.message?.placeholder ?? "Your Message"}
                  rows={formData?.message?.rows ?? 4}
                  required={formData?.message?.required ?? true}
                  className="w-full resize-none rounded-[9px] border border-white/10 bg-white px-11 py-3.5 text-[14px] text-[#263b46] outline-none transition placeholder:text-[#7c8790] focus:ring-2 focus:ring-[#ffd95a]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 flex h-[53px] w-full items-center justify-center gap-3 rounded-full bg-[#ffd958] px-6 text-[14px] font-extrabold text-[#102c22] transition hover:bg-[#ffdf72] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? (formData?.submitButton?.submittingLabel ?? "Sending...")
                  : (formData?.submitButton?.label ?? "Submit Now")}

                {!isSubmitting && <ArrowRight size={18} />}
              </button>

              <div className="mt-5 flex items-center gap-2 text-[12px] text-white/65">
                <PrivacyIcon size={16} className="shrink-0" />

                <span>
                  {formData?.privacyNote?.text ??
                    "Your information is safe with us. We respect your privacy."}
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="relative min-h-[450px] lg:min-h-full">
          <Image
            src={formData?.sidebar?.image ?? "/why-chooseUs.png"}
            alt={formData?.sidebar?.imageAlt ?? "Professional cleaning service"}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/10" />

          <div className="absolute bottom-6 left-1/2 flex w-[calc(100%-32px)] max-w-[430px] -translate-x-1/2 items-center gap-4 rounded-[16px] bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm sm:bottom-8 sm:px-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dff5e8] text-[#079c58]">
              <AssistanceIcon size={27} strokeWidth={2} />
            </div>

            <div>
              <p className="text-[13px] font-extrabold text-[#0b7046] sm:text-[14px]">
                {formData?.sidebar?.assistance?.title ??
                  "Need Immediate Assistance?"}
              </p>

              {formData?.sidebar?.assistance?.phoneHref ? (
                <a
                  href={formData.sidebar.assistance.phoneHref}
                  className="mt-1 block text-[12px] font-semibold text-[#263b46] transition hover:text-[#0b7046] sm:text-[13px]"
                >
                  {formData.sidebar.assistance.subtitle ??
                    `Call us now: ${formData.sidebar.assistance.phone}`}
                </a>
              ) : (
                <p className="mt-1 text-[12px] font-semibold text-[#263b46] sm:text-[13px]">
                  {formData?.sidebar?.assistance?.subtitle ??
                    "Call us now: (+61 3 8376 6284)"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  icon: React.ReactNode;
}

function InputField({
  name,
  type,
  placeholder,
  required = true,
  icon,
}: InputFieldProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#119b62]">
        {icon}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-[50px] w-full rounded-[9px] border border-white/10 bg-white pl-11 pr-4 text-[14px] text-[#263b46] outline-none transition placeholder:text-[#7c8790] focus:ring-2 focus:ring-[#ffd95a]"
      />
    </div>
  );
}