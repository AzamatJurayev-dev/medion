"use client";
import { SwiperSlide } from "swiper/react";
import { CustomButton } from "@/components/ui/Button";
import CustomCarousel from "@/components/elements/Slider";

const DataSlide = () => {
  return (
    <CustomCarousel slidesPerView={3} spaceBetween={16} slidesPerGroup={1}>
      {Array.from({ length: 7 }).map((_, index) => (
        <SwiperSlide key={index}>
          <CustomButton variant="default" className="h-9 border pr-6 rounded-md w-full">
            Пн, 17 Октября
          </CustomButton>
        </SwiperSlide>
      ))}
    </CustomCarousel>
  );
};

export default DataSlide;
