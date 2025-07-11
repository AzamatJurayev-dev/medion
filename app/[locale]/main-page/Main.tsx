"use client";
import { Flex } from "antd";
import { SwiperSlide } from "swiper/react";
import { CustomButton } from "@/components/ui/Button";
import MainSlider from "@/app/[locale]/main-page/components/MianSlider";
import Container from "@/components/elements/Container";
import image from "@/icons/image.png";
import Image from "next/image";
import image2 from "@/icons/image2.png";
import { Text } from "@/components/ui/Text";

const Main = () => {
  return (
    <Container>
      <Flex className="grid grid-cols-2 gap-6  ">
        <MainSlider>
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
              <Flex className="rounded-xl">
                <Image
                  src={image}
                  alt=""
                  fill
                  className=" object-cover rounded-2xl"
                />
                <Flex
                  vertical
                  justify="space-between"
                  className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-1/2 h-full rounded-xl  p-6"
                >
                  <Flex vertical gap={12} className="absolute top-6 left-6">
                    <Text variant="title1">
                      Отдел радиологии работает круглосуточно
                    </Text>
                    <Text variant="subtitle">
                      МРТ, МСКТ клиники Медион работает круглосуточно для
                      удобства клиентов
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
        </MainSlider>

        <Flex vertical gap={24}>
          <Flex className=" relative h-[312px]">
            <Image
              src={image2}
              alt="asas"
              fill
              className="object-cover rounded-2xl"
            />
            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-1/2 h-full rounded-xl p-6"
            >
              <Text variant="title2">Годовая программа “Моё Здоровье”</Text>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>
          <Flex className=" relative h-[312px]">
            <Image
              src={image2}
              alt="asas"
              fill
              className="object-cover rounded-2xl"
            />
            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-1/2 h-full rounded-xl p-6"
            >
              <Text variant="title2">Годовая программа “Моё Здоровье”</Text>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Main;
