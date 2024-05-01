import { GithubOriginal } from "devicons-react";
import Link from "next/link";
import connectIcons from "../../../static/connect-icons";

export default function Connect(): JSX.Element {
  return (
    <footer
      className="flex flex-col gap-5 pb-2 pt-5 dark:bg-zinc-950"
      id="footer"
    >
      <h2 className="text-center text-3xl font-bold dark:text-white">
        Lets Connect!
      </h2>
      <div className="flex justify-center gap-6">
        <Link
          href="https://github.com/BrandonCorey"
          className="connect-icons"
          target="_blank"
        >
          {<GithubOriginal size={30} />}
        </Link>
        <Link
          href="https://www.linkedin.com/in/brandonmcorey"
          className="connect-icons"
          target="_blank"
        >
          <connectIcons.LinkedinIcon height={30} width={30} />
        </Link>
        <Link href="mailto:bcorey3660@gmail.com" className="connect-icons">
          <connectIcons.MailIcon height={30} width={30} />
        </Link>
      </div>
      <p className="pl-2 text-xs text-gray-500 dark:text-gray-400">
        © 2024 Brandon Corey. All rights reserved.
      </p>
    </footer>
  );
}
