/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Image, Modal, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "swiper/css";
import { useState } from "react";


interface Props {
  images: { src: string; title: string }[];
}   

const CertificateModal = ({ images }: Props) => {
  const [open, setOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      width={600} 
      centered
    >
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            nextEl: ".swiper-next-image",
            prevEl: ".swiper-prev-image",
          }}
          loop={true}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img.src}   
                alt={img.title}
                className="w-full h-[400px] object-contain mx-auto"
              />
              <Typography.Text className="block text-center mt-4">
                {img.title}
              </Typography.Text>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 swiper-prev-image cursor-pointer p-2 z-20">
          <LeftOutlined />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 swiper-next-image cursor-pointer p-2 z-20">
          <RightOutlined />
        </div>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={1}
          spaceBetween={10}
          watchSlidesProgress
          className="mt-4"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img.src}
                alt="thumb"
                className="w-full h-[80px] object-cover rounded cursor-pointer border hover:border-[#1677ff]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

export default CertificateModal;
