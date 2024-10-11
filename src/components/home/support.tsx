import { ButtonLink } from "../ui/buttonLink";
import { HeadingTwo } from "../ui/typography";

export default function Support() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container flex flex-col items-center justify-center gap-8">
        <HeadingTwo
          headingText="Support Us"
          paraText="We 100% free tools for you, but to we work really hard to keep out service online so if you like our service, feel free to buy us a coffee."
        />
        <ButtonLink className="min-h-[50px] rounded-xl px-6 py-4 font-semibold">
          Buy us a coffee
        </ButtonLink>
      </div>
    </section>
  );
}
