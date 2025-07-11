import Container from "@/components/elements/Container";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Divider, Flex } from "antd";
import Image from "next/image";
import doctoricon from "@/icons/doctor.png";
import CustomInput from "@/components/ui/Input";

const page = () => {
  return (
    <div className="bg-bg1 pt-8 pb-16">
      <Container>
        <Flex vertical gap={16}>
          <Text>Оплатите онлайн - консультацию</Text>
          <Flex className="grid grid-cols-[2fr_1fr] gap-6">
            <Flex vertical gap={24}>
              <Flex vertical className="bg-white p-4 rounded-lg gap-4">
                <Text variant="header2">Ваши данные</Text>
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
                </Flex>
              </Flex>
              <Flex vertical className="bg-white p-4 rounded-lg gap-4">
                <Text variant="header2">Ваши приёмы</Text>
                <Flex className="justify-between  border border-text2 p-2 rounded-lg">
                  <Flex align="center">
                    <Image
                      src={doctoricon}
                      alt=" "
                      className="max-h-[136px] bg-bg1 w-[126px] rounded-md"
                    />
                    <Flex vertical gap={8} className="ml-4 max-w-[240px]">
                      <Text variant="header2">Неврология</Text>
                      <Text variant="description">Сталлоне Альдо</Text>
                      <Text variant="link">300 000 cум</Text>
                      <Flex gap={16}>
                        <Text variant="link">Ср, 22 Июня</Text>
                        <Text variant="link">14:30</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  X
                </Flex>
              </Flex>
              <Flex vertical gap={16} className="bg-white p-4 rounded-lg">
                <Text variant="header2">Кто оплачивает прием</Text>
                <Flex className="grid grid-cols-3 gap-6">
                  <CustomButton variant="default" className="w-full border ">
                    Я
                  </CustomButton>
                  <CustomButton variant="default" className="w-full border">
                    Я
                  </CustomButton>
                  <CustomButton variant="default" className="w-full border">
                    Я
                  </CustomButton>
                </Flex>
              </Flex>
              <Flex vertical gap={16} className="bg-white p-4 rounded-lg">
                <Text variant="header2">Способ оплаты</Text>
                <Flex className="grid grid-cols-2 gap-8">
                  <CustomButton variant="default" className="w-full border">
                    Я
                  </CustomButton>
                  <CustomButton variant="default" className="w-full border">
                    Я
                  </CustomButton>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              vertical
              className="bg-white p-4 rounded-lg grid-span-6 h-fit gap-2"
            >
              <Text variant="header2">Ваш чек</Text>
              <Flex justify="space-between">
                <Text variant="description">Диагностика</Text>
                <Text variant="description">300 000 сум </Text>
              </Flex>
              <Flex justify="space-between">
                <Text variant="description">Осмотр/консультация</Text>
                <Text variant="description">300 000 сум </Text>
              </Flex>
              <Divider className="my-2" />
              <Flex justify="space-between">
                <Text variant="description">Льгота инвалидности (15%)</Text>
                <Text variant="description">300 000 сум </Text>
              </Flex>
              <Flex justify="space-between">
                <Text variant="description">Скидка (10%)</Text>
                <Text variant="description">300 000 сум </Text>
              </Flex>
              <Flex justify="space-between">
                <Text variant="header2">Итого </Text>
                <Text variant="header2">300 000 сум </Text>
              </Flex>
              <Divider className="my-3" />
              <CustomButton className="w-full justify-center">
                Оплатить всю сумму
              </CustomButton>
              <Text variant="description" className="mt-4">
                Приём проводится онлайн по программе Zoom. Вам необходимо
                оплатить всю сумму приёма чтобы записаться
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default page;
