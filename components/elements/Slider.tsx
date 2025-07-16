"use client";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  children: React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  slidesPerGroup?: number;
  btnClassname?: string;
  navClassname1?: string;
  navClassname2?: string;
}

const CustomCarousel = ({
  children,
  slidesPerView,
  spaceBetween,
  slidesPerGroup,
}: Props) => {
  return (
    <div className=" relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        loop
        speed={800}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
      >
        {children}
      </Swiper>
      <div className="absolute -left-5 top-1/2 -translate-y-1/2 swiper-prev  cursor-pointer z-20">
        <LeftOutlined />
      </div>
      <div className="absolute -right-5 top-1/2 -translate-y-1/2 swiper-next  cursor-pointer z-20">
        <RightOutlined />
      </div>
    </div>
  );
};

export default CustomCarousel;
