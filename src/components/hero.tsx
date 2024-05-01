import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/lib/smooth-scroll";

export default function Hero(): JSX.Element {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-zinc-950"
      id="about"
    >
      <div className="container animate-fadeIn space-y-4 px-4 pt-14 text-center ease-in md:px-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
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
              className="duratio-200 font-semibold text-[#d2b573] underline transition ease-in-out hover:text-loaf"
              target="_blank"
            >
              DataLoaf
            </a>
            , a self hosted product analytics tool.
          </p>
        </div>
        <div className="xs:flex-row flex flex-col items-center justify-center gap-4">
          <Link
            className="button-neutral w-fit"
            href="#projects"
            onClick={(e) => scrollToSection(e, "dataloaf")}
          >
            View Projects
          </Link>
          <Link
            className="button-primary w-fit"
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
