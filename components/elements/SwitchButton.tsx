"use client";
import { Flex, Typography } from "antd";
import { useTranslations } from "next-intl";
import { useState } from "react";

const SwitchButton = () => {
  const [type, setType] = useState(true);
  const t = useTranslations();
  return (
    <Flex className="border-[#EDEDED] p-1 border-[1px] rounded-lg justify-between h-12">
      <Flex
        justify="center"
        onClick={() => setType(true)}
        className={
          type
            ? `bg-[#F2F2F3] rounded-lg duration-300 cursor-pointer ease-in-out`
            : `bg-white cursor-pointer`
        }
        style={{ width: "102px" }}
      >
        <Typography className="text-[16px] font-normal text-[#00040A] flex items-center">
          {t("Взрослые")}
        </Typography>
      </Flex>
      <Flex
        justify="center"
        onClick={() => setType(false)}
        className={
          !type
            ? `bg-[#F2F2F3] rounded-md duration-300 cursor-pointer ease-in-out`
            : `bg-white cursor-pointer`
        }
        style={{ width: "102px" }}
      >
        <Typography className="text-[16px] font-normal text-[#00040A] flex items-center">
          {t("Дети")}
        </Typography>
      </Flex>
    </Flex>
  );
};

export default SwitchButton;
