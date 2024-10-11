import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Tool({
  name,
  parentName,
  desc,
}: {
  name: string;
  parentName: string;
  desc?: string;
}) {
  return (
    <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:bg-foreground hover:text-background hover:brightness-105">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{parentName}</CardDescription>
      </CardHeader>
      {desc && (
        <CardContent>
          <p>{desc}</p>
        </CardContent>
      )}
    </Card>
  );
}
