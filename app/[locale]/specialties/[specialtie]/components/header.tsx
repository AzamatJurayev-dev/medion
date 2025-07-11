import Container from "@/components/elements/Container";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { BEL } from "@/icons";
import { Flex, Tabs, TabsProps } from "antd";
import Image from "next/image";
import brain from "@/icons/brain.png";
import group from "@/icons/group.png";
import React from "react";
const Header = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Общая информация",
    },
    {
      key: "2",
      label: "Врач и персонал",
    },
    {
      key: "3",
      label: "Услуги / Стоимость услуг",
    },
    {
      key: "4",
      label: "Фото",
    },
  ];
  return (
    <Flex vertical className=" overflow-visible">
      <div className="relative w-full h-60 flex justify-between ">
        <div className="relative w-full h-full flex ">
          <Flex className=" w-full h-full z-20 bg-custom-horizontal-fade-2">
            <Image
              src={group}
              alt=""
              className="absolute z-20 object-cover left-0 h-60"
            />
          </Flex>
          <Image
            src={brain}
            alt=""
            className="absolute right-0 object-cover  h-60"
          />
        </div>
        <div className="absolute top-0 left-0  h-full z-30 flex  items-center">
          <Container>
            <Flex vertical gap={24}>
              <Flex gap={16}>
                <BEL />
                <Text>Неврология</Text>
              </Flex>
              <CustomButton>Записаться к неврологу</CustomButton>
            </Flex>
          </Container>
        </div>
      </div>
      <div className="w-full bg-white">
        <Container>
          <Tabs
            defaultActiveKey="1"
            items={items}
            className="custom-tabs m-0 "
          />
        </Container>
      </div>
    </Flex>
  );
};

export default Header;
