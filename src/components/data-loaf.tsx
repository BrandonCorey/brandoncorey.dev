import Link from "next/link";
import Image from "next/image";
import infraPreview from "../../public/dataloaf-infra.png";
import dashboardPreview from "../../public/dataloaf-dashboard-2.png";
export default function DataLoafPreview(): JSX.Element {
  return (
    <section
      id="dataloaf"
      className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-zinc-900"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
              DataLoaf
            </h2>
            <p className="mx-auto max-w-[800px] pb-6 pt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              DataLoaf is an easy to use tool that enables product analysis by
              examining total events and total unique users, as well as
              average/median/min/max events per-user sent from your app. It also
              allows for filtering among all custom event and user attributes.
            </p>
          </div>
          <Image
            alt="DataLoaf Dashboard"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center"
            height={1000}
            src={dashboardPreview}
            width={1000}
          />
          <p className="text-md pt-10 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Below is a diagram of the current infrastructure supporting
            DataLoaf.
          </p>
          <Image
            alt="DataLoaf Infrastructure"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center"
            height={1000}
            src={infraPreview}
            width={1000}
          />

          <Link
            className="button-primary mt-6 py-4"
            href="https://data-loaf.com/docs/category/case-study"
            target="_blank"
          >
            Read the Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}
