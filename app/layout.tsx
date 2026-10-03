import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = localFont({
  src: [
    {
      path: "./font/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./font/Roboto-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./font/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/Roboto-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./font/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./font/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PureShine | Professional Cleaning Services",
  description:
    "PureShine provides reliable, affordable, and eco-friendly cleaning services for homes, offices, and commercial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className={`${roboto.className} min-h-full bg-white font-sans`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}