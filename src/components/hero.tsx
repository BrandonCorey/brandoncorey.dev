import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/lib/smooth-scroll";

export default function Hero(): JSX.Element {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48"
      id="about"
    >
      <div className="container animate-fadeIn space-y-4 px-4 text-center ease-in md:px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Brandon Corey
          </h1>
          <p className="mx-auto max-w-[700px] py-2  text-gray-500 md:text-xl dark:text-gray-400">
            Software Engineer | Full-Stack Developer
          </p>
          <p className="mx-auto max-w-[700px] py-5 text-gray-500 md:text-xl dark:text-gray-400">
            I&apos;m a software engineer with a background in analytics, based
            in the Boston area. I enjoy working with large amounts of data.
            Recently, I created{" "}
            <a
              href="https://data-loaf.com"
              className="font-semibold text-[#d2b573] underline"
              target="_blank"
            >
              DataLoaf
            </a>
            , a self hosted product analytics tool.
          </p>
        </div>
        <div className="space-x-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#projects"
            onClick={(e) => scrollToSection(e, "dataloaf")}
          >
            View Projects
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-loaf px-6 text-sm font-medium shadow-sm transition-colors hover:bg-loaf hover:bg-opacity-80 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="/Brandon_Corey_Resume_2024.pdf"
            target="_blank"
          >
            Download Resume{" "}
            <Image src="/noun-layers.svg" alt="" width={30} height={30} />
          </Link>
        </div>
      </div>
    </section>
  );
}
