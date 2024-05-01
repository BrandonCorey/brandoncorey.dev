"use client";

import Header from "./ui/header";
import Hero from "./hero";
import DataLoafPreview from "./data-loaf";
import Projects from "./projects-preview";
import Skills from "./skills-preview";
import Footer from "./ui/footer";

export function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <Hero />
      <DataLoafPreview />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
