"use client";
import { Flex } from "antd";

interface Props {
  button1: string;
  button2: string;
  active: number; // 0 yoki 1
  onSwitch: (index: number) => void;
}

const TabSwitch = ({ button1, button2, active, onSwitch }: Props) => {
  return (
    <Flex className="border-b w-full h-fit px-4 gap-6">
      <button
        onClick={() => onSwitch(0)}
        className={`h-12 font-medium text-base font-inter leading-[18px] whitespace-nowrap flex items-center ${
          active === 0 ? "text-primary border-b-2 border-primary" : "text-text1"
        }`}
      >
        {button1}
      </button>
      <button
        onClick={() => onSwitch(1)}
        className={`h-12 font-medium text-base font-inter leading-[18px] whitespace-nowrap flex items-center ${
          active === 1 ? "text-primary border-b-2 border-primary" : "text-text1"
        }`}
      >
        {button2}
      </button>
    </Flex>
  );
};

export default TabSwitch;
