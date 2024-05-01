import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPreview(): JSX.Element {
  return (
    <section
      className="w-full justify-center py-12 md:py-24 lg:py-32 dark:bg-gray-800"
      id="projects"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Side Projects
            </h2>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some small side projects I have worked on
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>endpntr</CardTitle>
              <CardDescription>
                A web app that that auto-generates endpoints that can be used to
                inspect webhooks and other HTTP requests. Updates UI via
                websockets.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt="Project 1"
                className="projects-preview"
                height="310"
                src="/endpntr-preview.png"
                width="550"
              />
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://github.com/endpntr/endpntr"
                target="_blank"
              >
                View Project
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI-Gallery</CardTitle>
              <CardDescription>
                A web app that uses the OpenAI DALL-E-3 model to generate AI
                images. Signed in users can create, edit and delete albums as
                well as AI images.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                alt="Project 2"
                className="projects-preview"
                height="310"
                src="/ai-gallery-preview.png"
                width="550"
              />
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://github.com/BrandonCorey/ai-gallery"
                target="_blank"
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
              <Image
                alt="Project 3"
                className="projects-preview"
                height="310"
                src="/contact-manager-preview.png"
                width="550"
              />
            </CardContent>
            <CardFooter>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://github.com/BrandonCorey/contact-manager"
                target="_blank"
              >
                View Project
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
