import { Heading } from "./_components/Heading";
import { Button } from "@/components/ui/button";
import { Heroes } from "./_components/Heroes";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <Button size="lg">click me</Button>
      </div>
    </div>
  );
};

export default MarketingPage;
