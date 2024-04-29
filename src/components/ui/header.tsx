import Link from "next/link";
import scrollToSection from "@/lib/smooth-scroll";
import { Button } from "./button";

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function MenuIcon(props: any): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default function Header(): JSX.Element {
  return (
    <header className="flex h-14 items-center justify-between px-4 lg:px-6">
      <Link className="flex items-center" href="#">
        <CodeIcon className="h-6 w-6" />
        <span className="ml-2 font-semibold">Brandon Corey</span>
      </Link>
      <nav className="hidden gap-4 sm:gap-6 lg:flex">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#projects"
          onClick={(e) => scrollToSection(e, "projects")}
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
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
        >
          Contact
        </Link>
      </nav>
      <Button className="lg:hidden" size="icon" variant="outline">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle navigation</span>
      </Button>
    </header>
  );
}
