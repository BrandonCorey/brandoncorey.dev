import Link from "next/link";
import scrollToSection from "@/lib/smooth-scroll";

export default function Hero(): JSX.Element {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48"
      id="about"
    >
      <div className="container space-y-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Brandon Corey
          </h1>
          <p className="mx-auto max-w-[700px] py-2  text-gray-500 md:text-xl dark:text-gray-400">
            Software Engineer | Full-Stack Developer
          </p>
          <p className="mx-auto max-w-[700px] py-5 text-gray-500 md:text-xl dark:text-gray-400">
            I am a software engineer with a background in analytics. I enjoy
            working with large amounts of data, and I&apos;m always eager to
            jump into new problem domains and techonologies.
          </p>
        </div>
        <div className="space-x-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#projects"
            onClick={(e) => scrollToSection(e, "projects")}
          >
            View Projects
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
