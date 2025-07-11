import CustomInput from "@/components/ui/Input";
import { Text } from "@/components/ui/Text";
import { Flex } from "antd";
import Image from "next/image";

const page = () => {
  return (
    <Flex vertical gap={16}>
      <Text>Личные данные</Text>
      <Flex vertical className="bg-white p-4 rounded-lg gap-6 shadow-custom-2">
        <Flex className="rounded-full bg-green-300 size-[148px]">
          <Image src={""} alt="" className="object-cover " />
        </Flex>
        <Flex vertical gap={24}>
          <Flex className="grid grid-cols-2 gap-6">
            <Flex vertical>
              <Text variant="link">Фамилия</Text>
              <CustomInput placeholder="Введите фамилию" />
            </Flex>
            <Flex vertical>
              <Text variant="link">Фамилия</Text>
              <CustomInput placeholder="Введите имя" />
            </Flex>
            <Flex vertical>
              <Text variant="link">Фамилия</Text>
              <CustomInput placeholder="Введите отчество" />
            </Flex>
            <Flex vertical>
              <Text variant="link">Фамилия</Text>
              <CustomInput prefix={"+998"} />
            </Flex>
            <Flex vertical>
              <Text variant="link">Фамилия</Text>
              <CustomInput prefix={"+998"} />
            </Flex>
            <Flex vertical>
              <Text variant="link">Фамилия</Text>
              <CustomInput prefix={"+998"} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
