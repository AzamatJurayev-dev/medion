import { Flex } from "antd";
import {CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import doctorIcon from "@/icons/doctor.png";

const MyList = () => {
  return (
    <>
        <Flex align="center" justify="space-between" className="w-full p-4 border-b last:border-b-0">
          <Flex align="center" gap={16}>
            <Image
              src={doctorIcon}
              alt=""
              className="object-corounded-full size-[72px] bg-bg1 rounded-xl"
            />
            <Flex vertical gap={8}>
              <Text variant="header2">Сталлоне Альдо</Text>
              <Text variant="description">Неврология</Text>
            </Flex>
          </Flex>
          <Flex vertical gap={8}>
            <Text variant="link">300 000 cум</Text>
            <Text variant="link">Ср, 22 Июня</Text>
          </Flex>
          <Flex vertical>
            <Text variant="header2">Вт, 5 Июль 2022</Text>
            <Text variant="link">14:30</Text>
          </Flex>
          <CustomButton>Не оплачено</CustomButton>
        </Flex>
    </>
  );
};

export default MyList;
