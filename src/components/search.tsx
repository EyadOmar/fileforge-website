import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Search() {
  return (
    <div className="relative z-0 mx-auto my-8 h-[48px] w-full max-w-[min(600px,80vw)] rounded-[100px] bg-background text-primary outline-none lg:my-10 lg:h-[64px]">
      <MagnifyingGlassIcon className="absolute start-3 top-1/2 h-10 w-10 -translate-y-1/2" />
      <Input
        className="h-full w-full rounded-[100px] pe-20 ps-16"
        placeholder="search"
      />
      <Button className="absolute end-3 top-1/2 -translate-y-1/2 rounded-[100px] font-medium">
        Search
      </Button>
    </div>
  );
}
