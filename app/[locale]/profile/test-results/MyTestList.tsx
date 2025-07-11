import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Flex } from "antd";
import Image from "next/image";
import doctorIcon from "@/icons/doctor.png";
const MyTestList = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="w-full p-4 border-b last:border-b-0"
    >
      <Flex align="center" gap={16}>
        <Image src={doctorIcon} alt="" className="object-cover w-8 h-10 " />
        <Flex vertical>
          <Text variant="link">Сталлоне Альдо</Text>
          <Text variant="link" className="text-xs text-gray3">156 KB</Text>
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
  );
}

export default MyTestList