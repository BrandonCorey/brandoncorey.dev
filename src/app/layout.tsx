import type { Metadata } from "next";
import { Chivo, Work_Sans } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work_sans",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work_sans",
});

export const metadata: Metadata = {
  title: "Brandon Corey",
  description: "Brandon Corey Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <meta property="og:title" content="Brandon Corey" />
      <body className={chivo.variable + work_sans.variable}>{children}</body>
    </html>
  );
}
