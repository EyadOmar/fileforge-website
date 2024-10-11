import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import tools from "@/lib/dummyTools";
import Tool from "./tool";
import { ButtonLink } from "../ui/buttonLink";
import { HeadingTwo } from "../ui/typography";

export default function ToolsFilter() {
  return (
    <section className="section-padding">
      <div className="container">
        <HeadingTwo
          headingText="Our Most Popular Tools"
          paraText="We present the best of the best. All free, no catch"
        />
        <Tabs defaultValue="all" className="grid">
          <TabsList className="mx-auto my-8 max-w-[90vw] overflow-y-auto rounded-[100px] lg:my-10 lg:h-[70px] lg:w-fit lg:space-x-2 lg:px-2 lg:py-3">
            <TabsTrigger
              className="rounded-[100px] font-medium transition-colors duration-300 ease-in-out hover:bg-primary/80 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground max-md:text-xs lg:p-3"
              value="all"
            >
              All Tools
            </TabsTrigger>
            {tools.slice(0, 3).map((t, i) => (
              <TabsTrigger
                className="rounded-[100px] font-medium transition-colors duration-300 ease-in-out hover:bg-primary/80 hover:text-primary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground max-md:text-xs lg:p-3"
                key={`tab_trigger_${i}_${t.name}`}
                value={t.name}
              >
                {t.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4"
            value="all"
          >
            {[...tools.slice(0, 6).map((t) => t.subTools)]
              .flat()
              .map((t, i) => (
                <Tool
                  name={t.name}
                  parentName=""
                  key={`tab_content_${i}_sub_all`}
                />
              ))}
          </TabsContent>
          {tools.map((t, i) => (
            <TabsContent
              className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4"
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
        <div className="-mt-7 flex items-center justify-center">
          <ButtonLink
            variant={"outline"}
            href="#"
            className="h-[56px] rounded-[10px] border-primary px-12 py-4 font-semibold text-primary shadow-lg transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:brightness-105"
          >
            See All
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
