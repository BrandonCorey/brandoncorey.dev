export default function BlogPost({ Content }: { Content: React.FC }) {
  return (
    <div
      className="mx-auto mt-28 w-2/3 lg:max-w-[700px] dark:text-white"
      id="blog-post"
    >
      <Content />
    </div>
  );
}
