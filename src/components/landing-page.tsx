"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  PythonOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  GoOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  NodejsOriginal,
  GitOriginal,
  DockerPlain,
  TerraformOriginal,
  NginxOriginal,
} from "devicons-react";

import AWSIcons from "../../static/aws-icons";

export function LandingPage() {
  const scrollToSection = (e: React.SyntheticEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
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
      <section
        className="flex flex-1 flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48"
        id="about"
      >
        <div className="container space-y-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Brandon Corey
            </h1>
            <p className="mx-auto max-w-[700px] py-2  text-gray-500 md:text-xl dark:text-gray-400">
              Software Engineer | Full-Stack Developer
            </p>
            <p className="mx-auto max-w-[700px] py-5 text-gray-500 md:text-xl dark:text-gray-400">
              I am a software engineer with a background in analytics. I enjoy
              working with large amounts of data, and I&apos;m always eager to
              jump into new problem domains and techonologies.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
            >
              View Projects
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#contact"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
      <section
        className="w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800"
        id="projects"
      >
        <div className="container m-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some small side projects I've worked on
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>endpntr</CardTitle>
                <CardDescription>
                  A web app that that auto-generates endpoints that can be used
                  to inspect webhooks and other HTTP requests. Updates UI via
                  websockets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Gallery</CardTitle>
                <CardDescription>
                  A web app that uses the OpenAI DALL-E model to generate AI
                  images. Allows users to create an account, create albums,
                  generate images, save images to albums, and edit album names
                  and image descriptions. Requires valid API Key to use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Project 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contact Manager</CardTitle>
                <CardDescription>
                  {" "}
                  A basic contact manager app with a clean UI Fully client side
                  rendered using only DOM API and custom MVC state pattern. No
                  frameworks used.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Project 3"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </CardContent>
              <CardFooter>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800"
        id="skills"
      >
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the technologies I'm proficient in.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <NodejsOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">Node.js</h4>
                  </div>{" "}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <TypescriptOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">TypeScript</h4>
                  </div>{" "}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <GoOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">Go</h4>
                  </div>{" "}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <PythonOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">Python</h4>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <ReactOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">React</h4>
                  </div>
                  {/* Add more frontend skills here */}

                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <JavascriptOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">JavaScript</h4>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <TailwindcssOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">
                      Tailwind CSS
                    </h4>
                  </div>
                  {/* Add more frontend skills here */}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Infrastucture</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Add more tooling skills here */}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <GitOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">Git</h4>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <DockerPlain size="50" />
                    <h4 className="mt-2 text-base font-semibold">Docker</h4>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <TerraformOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">Terraform</h4>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <NginxOriginal size="50" />
                    <h4 className="mt-2 text-base font-semibold">Nginx</h4>
                  </div>{" "}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <AWSIcons.EC2 />
                    <h4 className="mt-2 text-base font-semibold">
                      Amazon EC2
                    </h4>{" "}
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <AWSIcons.S3 />
                    <h4 className="mt-2 text-base font-semibold">Amazon S3</h4>
                  </div>{" "}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <AWSIcons.Lambda />
                    <h4 className="mt-2 text-base font-semibold">
                      Amazon Lambda
                    </h4>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <AWSIcons.Kinesis />
                    <h4 className="mt-2 text-base font-semibold">
                      Amazon Kinesis
                    </h4>
                  </div>
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <AWSIcons.Redshift />
                    <h4 className="mt-2 text-base font-semibold">
                      Amazon Redshift
                    </h4>
                  </div>{" "}
                  <div className="rounded-lg bg-white p-4 dark:bg-gray-950">
                    <AWSIcons.CloudWatch />
                    <h4 className="mt-2 text-base font-semibold">
                      Amazon CloudWatch
                    </h4>
                  </div>
                  {/* Add more tooling skills here */}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>{" "}
      <section className="w-full border-t py-12 md:py-24 lg:py-32" id="contact">
        <div className="container m-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Feel free to reach out to me with any questions or inquiries.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-md space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Brandon Corey. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AngryIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h0" />
      <path d="M15 10h0" />
    </svg>
  );
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
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

function ComponentIcon(props) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function ContainerIcon(props) {
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
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </svg>
  );
}

function FolderGitIcon(props) {
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="2" />
      <path d="M14 13h3" />
      <path d="M7 13h3" />
    </svg>
  );
}

function NetworkIcon(props) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function PiIcon(props) {
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
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  );
}

function ViewIcon(props) {
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
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function WindIcon(props) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}

function MenuIcon(props) {
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
