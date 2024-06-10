import Link from "next/link";
import BlogListing from "./blog-listing";
import { walkSync } from "@/lib/walk-sync";

const listings = [
  {
    title: "The pitfalls of proficiency",
    desc: "With predatory educators doing their best to take your money, becoming a proficient developer is harder than it should be",
    previewSrc: "/proficiency.png",
    date: "06/10/2024",
  },
];

export default function BlogHome(): JSX.Element {
  const posts = walkSync("src/app/blog");
  const formattedlistings = listings.map((listing, idx) => {
    return { ...listing, path: posts[idx] };
  });
  return (
    <div className="relative top-14 mx-auto w-2/3 lg:w-[700px]">
      <h1 className="mt-10 text-left text-4xl font-semibold dark:text-white">
        Explore
      </h1>
      <div className="mx-auto  my-10 flex justify-center rounded-md border border-zinc-200 shadow-lg transition duration-200 ease-in-out hover:bg-zinc-100 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900">
        <dl className="w-full">
          {formattedlistings.map((post) => {
            return (
              <Link key={post.path} href={`/blog/${post.path}`}>
                <BlogListing {...post} />
              </Link>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
