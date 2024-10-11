import Search from "../search";
import { HeadingOne } from "../ui/typography";

export default function Hero() {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container">
        <HeadingOne
          headingText="Free tools to forge your own file"
          paraText="PDF convertors, compressors, resizers, and many more."
        />
        <Search />
      </div>
    </section>
  );
}
