import formatDate from "@/lib/format-date";
import Image from "next/image";

interface BlogListingProps {
  previewSrc: string;
  title: string;
  desc: string;
  date: string;
}

export default function BlogListing({
  previewSrc,
  title,
  desc,
  date,
}: BlogListingProps): JSX.Element {
  return (
    <>
      <div className="flex flex-1 items-center justify-between gap-4 p-12">
        <div className="text-sm md:text-base">
          <dt className="text-xl font-semibold">{title}</dt>
          <dd className="mb-4 text-sm italic">{formatDate(date)}</dd>
          <dd className="">{desc}</dd>
        </div>
        <Image
          src={previewSrc}
          alt="blog preview image"
          width={100}
          height={100}
          className="w-auto rounded-md"
        />
      </div>
    </>
  );
}
