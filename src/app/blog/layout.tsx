"use client";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="flex min-h-dvh flex-col justify-between bg-white dark:bg-zinc-950">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
