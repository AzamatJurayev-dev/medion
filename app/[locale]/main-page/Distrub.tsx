"use client";
import { BEL } from "@/icons";
import { Card, Flex, Typography } from "antd";

import { SwiperSlide } from "swiper/react";
import SwitchButton from "@/components/elements/SwitchButton";
import CustomCarousel from "@/components/elements/Slider";
import Container from "@/components/elements/Container";
import { Text } from "@/components/ui/Text";

const Disturb = () => {
  return (
    <Container>
      <Flex vertical className="gap-8 mb-16 ">
        <Flex gap={24} align="center">
          <Typography className="font-semibold text-4xl">
            Что вас беспокоит
          </Typography>
          <SwitchButton />
        </Flex>

        <CustomCarousel slidesPerView={6} spaceBetween={24} slidesPerGroup={3}>
          {Array.from({ length: 12 }).map((_, index) => (
            <SwiperSlide key={index} className="py-2">
              <Card className="w-full shadow-md hover:shadow-custom-2 transition-shadow duration-300">
                <Flex vertical gap={8}>
                  <BEL />
                  <Text variant="link">Боль в спине</Text>
                </Flex>
              </Card>
            </SwiperSlide>
          ))}
        </CustomCarousel>
      </Flex>
    </Container>
  );
};

export default Disturb;
