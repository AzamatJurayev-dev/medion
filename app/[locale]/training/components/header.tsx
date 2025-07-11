import Container from "@/components/elements/Container";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { BEL } from "@/icons";
import { Flex } from "antd";
import Image from "next/image";
import RightShape from "@/icons/right-shape.png"
import group from "@/icons/group.png";
import React from "react";
const Header = () => {

  return (
    <Flex vertical className=" overflow-visible">
      <div className="relative w-full h-60 flex justify-between ">
        <div className="relative w-full h-full flex ">
          <Flex className=" w-full h-full z-20">
            <Image
              src={group}
              alt=""
              className="absolute z-20 object-cover left-0 max-h-60"
            />
          </Flex>
          <Image
            src={RightShape}
            alt=""
            className="absolute right-0 object-cover max-h-60"
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
    </Flex>
  );
};

export default Header;
