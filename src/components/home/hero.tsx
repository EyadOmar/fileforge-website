import { ChevronRightIcon } from "lucide-react";
import Search from "../search";
import { HeadingOne } from "../ui/typography";
import Link from "next/link";

const tools = [
  {
    name: "PDF Tools",
    featured: "PDF Creator",
    totalTools: 40,
  },
  {
    name: "Image Tools",
    featured: "Remove BG",
    totalTools: 30,
  },
  {
    name: "Video Tools",
    featured: "Remove BG",
    totalTools: 10,
  },
  {
    name: "AI Write",
    featured: "Summarize",
    totalTools: 10,
  },
];
export default function Hero() {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container">
        <HeadingOne
          headingText="Free tools to forge your own file"
          paraText="PDF convertors, compressors, resizers, and many more."
        />
        <Search />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {tools.map((t, i) => (
            <ToolCard
              key={`tool_featured_${i}`}
              total={t.totalTools}
              title={t.name}
              featured={t.featured}
            />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 rounded-xl bg-background p-6 text-foreground lg:px-10 lg:py-8">
          <div className="flex items-center gap-6 max-md:flex-col">
            <span className="text-5xl font-semibold text-primary">1m</span>
            <span>Active Users</span>
            <span className="hidden h-5 w-px bg-primary lg:block"></span>
          </div>
          <div className="flex items-center gap-6 max-md:flex-col">
            <span className="text-5xl font-semibold text-primary">1m</span>
            <span>Active Users</span>
            <span className="hidden h-5 w-px bg-primary lg:block"></span>
          </div>
          <div className="flex items-center gap-6 max-md:flex-col">
            <span className="text-5xl font-semibold text-primary">1m</span>
            <span>Active Users</span>
            <span className="hidden h-5 w-px bg-primary lg:block"></span>
          </div>
          <div className="flex items-center gap-6 max-md:flex-col">
            <span className="text-5xl font-semibold text-primary">1m</span>
            <span>Active Users</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const ToolCard = ({
  total,
  title,
  featured,
}: {
  total: number;
  title: string;
  featured: string;
}) => {
  return (
    <div className="flex flex-col rounded-xl bg-background p-3 text-foreground shadow-md">
      <span className="flex w-fit items-center justify-center rounded-[100px] bg-primary p-1 text-xs text-primary-foreground">
        {total}+ tools
      </span>
      <div className="my-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold lg:text-base">{title}</h3>
        <ChevronRightIcon />
      </div>
      <footer className="rounded-xl bg-primary p-2 text-primary-foreground">
        <h4 className="text-xs font-light">
          Featured Tool:{" "}
          <Link className="underline" href={"#"}>
            {featured}
          </Link>
        </h4>
      </footer>
    </div>
  );
};
