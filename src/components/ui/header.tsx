import Link from "next/link";
import scrollToSection from "@/lib/smooth-scroll";
import { Button } from "./button";
import navIcons from "../../../static/nav-icons";

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 flex h-14 w-full items-center justify-between border-b border-zinc-300 bg-white px-4 lg:px-6 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
      <Link className="flex items-center" href="#">
        <navIcons.CodeIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">Brandon Corey</span>
      </Link>
      <nav className="hidden gap-4 sm:gap-6 lg:flex">
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
