"use client";
import { Flex, Typography } from "antd";
import { useState } from "react";

const SwitchButton = () => {
  const [type, setType] = useState(true);

  return (
    <Flex className="border-[#EDEDED] p-1 border-[1px] rounded-lg justify-between h-12">
      <Flex
        justify="center"
        onClick={() => setType(true)}
        className={type ? `bg-[#F2F2F3] rounded-lg duration-300 cursor-pointer` : `bg-white cursor-pointer`}
        style={{ width: "102px" }}
      >
        <Typography className="text-[16px] font-normal text-[#00040A] flex items-center">
          Взрослые
        </Typography>
      </Flex>
      <Flex
        justify="center"
        onClick={() => setType(false)}
        className={!type ? `bg-[#F2F2F3] rounded-md duration-300 cursor-pointer` : `bg-white cursor-pointer`}
        style={{ width: "102px" }}
      >
        <Typography className="text-[16px] font-normal text-[#00040A] flex items-center">
          Дети
        </Typography>
      </Flex>
    </Flex>
  );
};

export default SwitchButton;
