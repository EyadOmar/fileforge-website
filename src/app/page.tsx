import Hero from "@/components/home/hero";
import Support from "@/components/home/support";
import ToolsCarousal from "@/components/home/ToolsCarousal";
import ToolsFilter from "@/components/home/toolsFilter";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsFilter />
      <ToolsCarousal />
      <Support />
    </>
  );
}
