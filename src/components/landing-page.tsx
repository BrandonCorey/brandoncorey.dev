"use client";

import Header from "./ui/header";
import Hero from "./hero";
import DataLoafPreview from "./data-loaf";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./ui/footer";

export function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <Hero />
      <DataLoafPreview />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
