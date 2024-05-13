import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LucideGithub, Linkedin, Mail, ChevronDown } from "lucide-react";

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
        <div className="flex flex-col items-center justify-center gap-4 xs:flex-row xs:items-start">
          <div>
            <button
              className="button-neutral w-fit"
              onClick={() => {
                toggleDropdown();
              }}
            >
              <p className="mr-1">Contact Me </p>
              <p>
                <ChevronDown />
              </p>
            </button>
            {dropdownVisible && (
              <div className="mt-1 rounded-md bg-zinc-900 px-6 py-5 text-white dark:bg-zinc-800">
                <ul className="flex flex-col gap-5">
                  <li>
                    <Link
                      className="flex flex-1 items-end gap-2 hover:text-loaf"
                      href="https://linkedin.com/in/brandonmcorey"
                      target="_blank"
                    >
                      <Linkedin width={20} />
                      <p>LinkedIn</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex flex-1 items-end gap-2 hover:text-loaf"
                      href="https://github.com/brandoncorey"
                      target="_blank"
                    >
                      <LucideGithub width={20} />
                      <p>GitHub</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex flex-1 items-end gap-2 hover:text-loaf"
                      href={`mailto:bcorey@gmail.com`}
                    >
                      <Mail width={20} />
                      <p>Email</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
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
