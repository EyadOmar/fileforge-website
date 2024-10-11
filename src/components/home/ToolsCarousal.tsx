import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeadingTwo } from "../ui/typography";
import Link from "next/link";

const tools = [
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
  {
    name: "PDF to word",
    desc: "Create a Word Doc or Extract the text using OCR from a PDF",
  },
];

export default function ToolsCarousal() {
  return (
    <section className="section-padding">
      <div className="container">
        <HeadingTwo
          headingText="Free Tools You'd Usually Pay For"
          paraText="No Limits, No Sign-Up Here's our featured tools"
        />
        <Carousel className="mt-8 cursor-grab lg:mt-10">
          <CarouselContent>
            {tools.map((t, i) => (
              <CarouselItem
                className="w-fit basis-[200px] lg:basis-[416px]"
                key={`carousal_item_${i}`}
              >
                <CarousalCard title={t.name} desc={t.desc} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-md:hidden" />
          <CarouselNext className="max-md:hidden" />
        </Carousel>
      </div>
    </section>
  );
}

const CarousalCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-secondary p-2 text-secondary-foreground">
      <div className="flex h-[150px] w-full items-center justify-center rounded-lg bg-slate-300 lg:h-[300px]">
        <span className="hidden lg:block">400x300</span>
        <span className="lg:hidden">200x150</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold lg:text-xl">{title}</h3>
        <p className="text-xs lg:text-sm">{desc}</p>
      </div>
      <Link className="text-sm text-primary lg:text-base" href={"#"}>
        Learn More
      </Link>
    </div>
  );
};
