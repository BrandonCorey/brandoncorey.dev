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

export default function Projects(): JSX.Element {
  return (
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
                generate images, save images to albums, and edit album names and
                image descriptions. Requires valid API Key to use.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
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
              <Image
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
  );
}
