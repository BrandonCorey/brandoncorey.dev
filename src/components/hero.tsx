import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/lib/smooth-scroll";
import { LucideGithub, Linkedin, Mail } from "lucide-react";

export default function Hero(): JSX.Element {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <section
      className="flex flex-1 items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 dark:bg-zinc-950"
      id="about"
    >
      <div className="container relative animate-fadeIn space-y-4 px-4 pt-14 text-center ease-in md:px-6">
        <div className="flex items-center justify-center">
          <Image
            alt="Hero"
            className="rounded-full object-cover"
            height={428}
            src="/profile-upscaled.png"
            width={428}
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
            Brandon Corey
          </h1>
          <p className="mx-auto max-w-[700px] py-2  text-gray-500 md:text-xl dark:text-gray-400">
            Software Engineer | Full-Stack Developer
          </p>
          <p className="mx-auto max-w-[700px] py-5 text-gray-500 md:text-xl dark:text-gray-400">
            I&apos;m a software engineer based in the greater Boston area with a
            background in analytics. Recently, I created{" "}
            <a
              href="https://data-loaf.com"
              className="font-semibold text-[#d2b573] underline transition duration-200 ease-in-out hover:text-loaf"
              target="_blank"
            >
              DataLoaf
            </a>
            , a self-hosted product analytics tool.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 xs:flex-row">
          <button
            className="button-neutral w-fit"
            onClick={(e) => {
              scrollToSection(e, "dataloaf");
              toggleDropdown();
            }}
          >
            Contact Me
          </button>
          <Link
            className="button-primary w-fit"
            href="/Brandon_Corey_Resume_2024.pdf"
            target="_blank"
          >
            Download Resume{" "}
            <Image src="/noun-layers.svg" alt="" width={30} height={30} />
          </Link>
        </div>
        {dropdownVisible && (
          <div className="relative bottom-5 mx-auto w-[338px] dark:text-black">
            <ul className="flex w-fit flex-col gap-3 rounded-b-md bg-zinc-900 px-8 py-2 text-zinc-200 dark:bg-zinc-800">
              <li className="flex flex-1">
                <Linkedin />
                <p>LinkedIn</p>
              </li>
              <li className="flex flex-1">
                <LucideGithub />
                <p>GitHub</p>
              </li>
              <li>
                <Mail />
                <p>Email</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
