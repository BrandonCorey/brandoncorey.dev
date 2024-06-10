import Image from "next/image";
import formatDate from "@/lib/format-date";

export default function AuthorBlurb({ date }: { date: string }): JSX.Element {
  return (
    <div className="mt-8 flex flex-1 gap-3">
      <Image
        src={"/profile-upscaled.png"}
        height={50}
        width={50}
        alt="author image"
        className="rounded-full"
      />
      <section className="flex flex-col justify-center text-sm">
        <p className="!m-0">Brandon Corey</p>
        <p className="!m-0 italic">{formatDate(date)}</p>
      </section>
    </div>
  );
}
