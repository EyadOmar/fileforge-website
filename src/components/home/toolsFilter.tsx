import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tools from "@/lib/dummyTools";
import Tool from "./tool";
import { ButtonLink } from "../ui/buttonLink";

export default function ToolsFilter() {
  return (
    <section className="section-padding container flex flex-col items-center justify-center">
      <div className="heading-two text-center">
        <h2>Our Most Popular Tools</h2>
        <p>We present the best of the best. All free, no catch</p>
      </div>
      <Tabs defaultValue="all" className="grid place-content-center">
        <TabsList className="mx-auto my-8 h-[70px] w-fit space-x-2 rounded-[100px] px-2 py-3 lg:my-10">
          <TabsTrigger
            className="rounded-[100px] p-3 font-medium transition-colors duration-300 ease-in-out hover:bg-primary/80 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            value="all"
          >
            All Tools
          </TabsTrigger>
          {tools.slice(0, 3).map((t, i) => (
            <TabsTrigger
              className="rounded-[100px] p-3 font-medium transition-colors duration-300 ease-in-out hover:bg-primary/80 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              key={`tab_trigger_${i}_${t.name}`}
              value={t.name}
            >
              {t.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          value="all"
        >
          {[...tools.slice(0, 6).map((t) => t.subTools)].flat().map((t, i) => (
            <Tool
              name={t.name}
              parentName=""
              key={`tab_content_${i}_sub_all`}
            />
          ))}
        </TabsContent>
        {tools.map((t, i) => (
          <TabsContent
            className="grid grid-cols-[repeat(3,minmax(200px,1fr))] gap-4"
            key={`tab_content_${i}_${t.name}`}
            value={t.name}
          >
            {t.subTools.map((subTool) => (
              <Tool
                name={subTool.name}
                parentName={t.name}
                key={`tab_content_${i}_${t.name}_sub_${subTool.name}`}
              />
            ))}
          </TabsContent>
        ))}
      </Tabs>
      <ButtonLink
        variant={"outline"}
        href="#"
        className="h-[56px] rounded-[10px] border-primary px-12 py-4 font-semibold text-primary shadow-lg hover:bg-primary hover:text-primary-foreground"
      >
        See All
      </ButtonLink>
    </section>
  );
}
