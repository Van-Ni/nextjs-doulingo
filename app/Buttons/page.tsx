import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-1 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"} className="px-20">
        Secondary outline
      </Button>
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger outline</Button>
      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super outline</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar outline</Button>
    </div>
  );
};

export default ButtonPage;
