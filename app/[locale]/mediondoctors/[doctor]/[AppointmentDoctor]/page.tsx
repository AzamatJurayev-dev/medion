import Container from "@/components/elements/Container";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Divider, Flex, Select } from "antd";
import Image from "next/image";
import doctoricon from "@/icons/doctor.png";
import DataSlide from "./components/DataSlide";
import Link from "next/link";
const page = () => {
  return (
    <div className="bg-bg1 pt-8 pb-16">
      <Container>
        <Flex vertical gap={16}>
          <Text>Запись на приём к врачу</Text>
          <Flex vertical className="bg-white">
            <Flex justify="space-between" className="px-6 py-3">
              <Flex className="w-1/2 justify-between gap-3">
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
                <Select
                  defaultValue="lucy"
                  className="w-full"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                  ]}
                />
              </Flex>
              <Link href="/mediondoctors/doctor/appointmentdoctor/appointmentpuy">
                <CustomButton>Продолжить</CustomButton>
              </Link>
            </Flex>
            <Divider className="m-0" />
            <Flex className="p-3 justify-between items-center">
              <Flex className="justify-between items-center">
                <Image
                  src={doctoricon}
                  alt=" "
                  className="max-h-[136px] bg-bg1 w-[126px]"
                />
                <Flex vertical gap={8} className="ml-4 max-w-[240px]">
                  <Text variant="header2">
                    Ширмухаммедов Батир Турсунополатович
                  </Text>
                  <Text variant="description">Невролог, Невропатолог</Text>
                  <Text variant="link">Стаж 10 лет</Text>
                </Flex>
              </Flex>
              <Flex vertical gap={8} className="w-full max-w-[540px] mr-3 ">
                <Text variant="link" className="text-sm leading-normal ">
                  Выберите дату и время приёма
                </Text>
                <DataSlide />
                <Flex
                  vertical
                  className="grid grid-cols-5 gap-2 justify-between "
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CustomButton
                      variant="default"
                      className="border h-7 !rounded-md w-full"
                      key={index}
                    >
                      09:00
                    </CustomButton>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default page;
