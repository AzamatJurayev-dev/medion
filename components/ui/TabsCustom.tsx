"use client";
import { Flex } from "antd";
import { usePathname } from "next/navigation";

const TabsCustom = ({ tabs }: { tabs: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Flex className="border-b w-full h-fit px-4 gap-6">
      <button
        className={`h-12 font-medium text-base font-inter leading-[18px] whitespace-nowrap flex items-center ${
          pathname ? "text-primary border-b-2 border-primary" : "text-text1"
        }`}
      >
        {tabs}
      </button>
    </Flex>
  );
}; 

export default TabsCustom;
