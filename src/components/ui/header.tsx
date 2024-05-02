import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/lib/smooth-scroll";
import { Button } from "./button";
import navIcons from "../../../static/nav-icons";
import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const [theme, setTheme] = useState("");

  type handlerType = (e: React.SyntheticEvent) => void;
  const handleSetTheme: handlerType = (_e) => {
    theme === "dark" ? setTheme(() => "light") : setTheme(() => "dark");
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 flex h-14 w-full items-center justify-between border-b border-zinc-300 bg-white px-4 lg:px-6 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
      <Link className="flex items-center" href="#">
        <navIcons.CodeIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">Brandon Corey</span>
      </Link>
      <nav className="hidden items-center gap-4 sm:gap-6 lg:flex">
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
          href="/Brandon_Corey_Resume_2024.pdf"
          target="_blank"
        >
          Resume
        </Link>
      </nav>
      <Button className="lg:hidden" size="icon" variant="outline">
        <navIcons.MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </header>
  );
}
