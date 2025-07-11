"use client";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
interface Props {
  children: React.ReactNode;
}
const MainSlider = ({ children }: Props) => {
  return (
    <Swiper
      className="relative h-[648px] z-10"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      speed={500}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
    >
      {children}
      <div className="slider-controller">
        <div className="swiper-button-prev  flex justify-center items-center w-10 h-10 bg-white rounded-full cursor-pointer z-20">
          <ArrowLeftOutlined className="text-[#D90506]" />
        </div>
        <div className="swiper-pagination space-x-1"></div>
        <div className="swiper-button-next  flex justify-center items-center w-10 h-10 bg-white rounded-full cursor-pointer z-20">
          <ArrowRightOutlined className="text-[#D90506]" />
        </div>
      </div>
    </Swiper>
  );
};

export default MainSlider;
