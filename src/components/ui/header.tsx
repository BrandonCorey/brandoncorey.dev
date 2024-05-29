import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/lib/smooth-scroll";
import { Button } from "./button";
import navIcons from "../../../static/nav-icons";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [theme, setTheme] = useState("");
  const [altNavShowing, setAltNavShowing] = useState(false);

  type handlerType = (e: React.SyntheticEvent) => void;

  const handleSetTheme: handlerType = (_e) => {
    theme === "dark" ? setTheme(() => "light") : setTheme(() => "dark");
    document.querySelector("html")?.classList.toggle("dark");
  };

  const handleSetAltNavShowing: handlerType = (_e) => {
    altNavShowing == true
      ? setAltNavShowing(() => false)
      : setAltNavShowing(() => true);
  };

  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-zinc-300 bg-white px-4 lg:px-6 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
      <Link className="flex items-center" href="#">
        <navIcons.CodeIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">Brandon Corey</span>
      </Link>
      <nav className="hidden items-center gap-4 sm:gap-6 md:flex">
        <Image
          src="/noun-dark-mode.svg"
          width={35}
          height={35}
          alt="light dark mode toggle"
          className="rounded-lg p-1 transition duration-300 hover:cursor-pointer hover:bg-zinc-200 dark:bg-zinc-200"
          onClick={handleSetTheme}
        />

        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#projects"
          onClick={(e) => scrollToSection(e, "footer")}
        >
          Contact
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#projects"
          onClick={(e) => scrollToSection(e, "dataloaf")}
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#skills"
          onClick={(e) => scrollToSection(e, "skills")}
        >
          Skills
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/Brandon_Corey_Resume.pdf"
          target="_blank"
        >
          Resume
        </Link>
      </nav>
      <Button
        size="icon"
        variant="outline"
        className="md:hidden dark:border-zinc-900 dark:focus:border dark:focus:border-zinc-500 dark:focus:bg-zinc-950 dark:active:bg-zinc-900"
        onClick={handleSetAltNavShowing}
      >
        <navIcons.MenuIcon className="m-0 h-6 w-6 " />
        <span className="sr-only">Toggle navigation</span>
      </Button>
      <ul
        className={`${!altNavShowing ? "hidden" : ""} fixed left-0 top-[56px] w-full bg-zinc-100 md:hidden dark:bg-zinc-900`}
      >
        <li className="border-t border-zinc-300 px-12 py-4 dark:border-zinc-800">
          <Image
            src="/noun-dark-mode.svg"
            width={35}
            height={35}
            alt="light dark mode toggle"
            className="rounded-lg p-1 transition duration-300 hover:cursor-pointer hover:bg-zinc-200 dark:bg-zinc-200"
            onClick={handleSetTheme}
          />
        </li>

        <li className="border-t border-zinc-300 px-12 py-4 transition duration-200 dark:border-zinc-800">
          <Link
            href="#footer"
            onClick={(e) => {
              scrollToSection(e, "footer");
              handleSetAltNavShowing(e);
            }}
            className="block h-full w-full"
          >
            Contact
          </Link>
        </li>
        <li className="border-t border-zinc-300 px-12 py-4 transition duration-200 dark:border-zinc-800">
          <Link
            href="#dataloaf"
            onClick={(e) => {
              scrollToSection(e, "dataloaf");
              handleSetAltNavShowing(e);
            }}
            className="block h-full w-full"
          >
            Projects
          </Link>
        </li>
        <li className="border-t border-zinc-300 px-12 py-4 transition duration-200 dark:border-zinc-800">
          <Link
            href="#skills"
            onClick={(e) => {
              scrollToSection(e, "skills");
              handleSetAltNavShowing(e);
            }}
            className="block h-full w-full"
          >
            Skills
          </Link>
        </li>
        <li className="border-t border-zinc-300 px-12 py-4 transition duration-200 dark:border-zinc-800">
          <Link
            href="/Brandon_Corey_Resume.pdf"
            target="_blank"
            className="block h-full w-full"
          >
            Resume
          </Link>
        </li>
      </ul>
    </header>
  );
}
