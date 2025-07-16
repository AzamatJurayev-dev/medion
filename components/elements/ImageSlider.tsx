"use client";
import { Modal } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Keyboard } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DepartmentImagesType } from "@/types/PromotionType";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { Text } from "../ui/Text";

interface Props {
  images: DepartmentImagesType[] | undefined;
}

const ImageSlider = ({ images }: Props) => {
  const [open, setOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // 👈 yangi state

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index); // bosilgan indexni saqlaymiz
    setOpen(true); // modalni ochamiz
  };

  return (
    <>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-next-image",
            prevEl: ".swiper-prev-image",
          }}
        >
          {images?.map((img, index) => (
            <SwiperSlide key={img.id} onClick={() => handleOpenModal(index)}>
              <Image
                src={imageUrlGenerator(img.url)}
                alt=""
                width={1000}
                height={1000}
                className="w-full h-[216px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 swiper-prev-image cursor-pointer p-2 z-20">
          <LeftOutlined />
        </div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 swiper-next-image cursor-pointer p-2 z-20">
          <RightOutlined />
        </div>
      </div>

      <Modal
        open={open}
        closable={false}
        footer={null}
        onCancel={() => setOpen(false)}
        width={600}
        centered
        className="custom-modal relative"
      >
        <div className="relative w-full">
          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Thumbs, Keyboard]}
              thumbs={{ swiper: thumbsSwiper }}
              keyboard={{
                enabled: true,
              }}
              navigation={{
                nextEl: ".swiper-next-image",
                prevEl: ".swiper-prev-image",
              }}
              loop={true}
              initialSlide={selectedIndex}
            >
              {images?.map((img) => (
                <SwiperSlide key={img.id}>
                  <Image
                    src={imageUrlGenerator(img.url)}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-[400px] object-cover"
                  />
                  <Text variant="title5" className="bg-white rounded-b-lg p-4">
                    {img.name}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 swiper-prev-image cursor-pointer p-2 size-10 flex justify-center items-center z-20 bg-white rounded-full ">
              <LeftOutlined />
            </div>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 swiper-next-image cursor-pointer p-2 size-10 flex justify-center items-center z-20 bg-white rounded-full">
              <RightOutlined />
            </div>
          </div>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress
            className="mt-4"
          >
            {images?.map((img) => (
              <SwiperSlide key={img.id}>
                <Image
                  src={imageUrlGenerator(img.url)}
                  alt="thumb"
                  width={1000}
                  height={1000}
                  className="w-full h-[80px] object-cover rounded cursor-pointer "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Modal>
    </>
  );
};

export default ImageSlider;
