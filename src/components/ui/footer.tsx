import { GithubOriginal } from "devicons-react";
import Link from "next/link";
export default function Connect(): JSX.Element {
  return (
    <footer className="mb-2 mt-12 px-2">
      <h2 className="mb-4 text-center text-3xl font-semibold">Lets Connect!</h2>
      <div className="mb-6 flex justify-center gap-6">
        <Link
          href="https://github.com/BrandonCorey"
          className="transition duration-200 ease-in-out hover:scale-110"
          target="_blank"
        >
          {<GithubOriginal size="35" />}
        </Link>
        <Link
          href="https://www.linkedin.com/in/brandonmcorey"
          className="transition duration-200 ease-in-out hover:scale-110"
          target="_blank"
        >
          {LinkedinIcon()}
        </Link>
        <Link
          href="mailto:bcorey3660@gmail.com"
          className="transition duration-200 ease-in-out hover:scale-110"
        >
          {MailIcon()}
        </Link>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Brandon Corey. All rights reserved.
      </p>
    </footer>
  );
}

function LinkedinIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
