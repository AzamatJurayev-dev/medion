"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "antd";
import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { BannerType } from "@/types/BannerType";
import { getBanners } from "@/api/api";
import { useLocale } from "next-intl";


const MainSlider = () => {
  const { data: banners } = useQuery<{ data: BannerType[] }>({
    queryKey: ["banners"],
    queryFn: getBanners,
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_MEDIA_URL;
  const lang = useLocale();
  return (
    <Swiper
      className="relative h-[648px] z-10"
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={800}
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
      {banners?.data.map((item) => (
        <SwiperSlide key={item.id}>
          <Flex className="rounded-xl">
            <Image
              src={`${baseUrl}${item.coverImage.url}`}
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
                  {lang === "ru"
                    ? item?.titleRu
                    : lang === "uz"
                    ? item?.titleUz
                    : item?.titleEn}
                </Text>
                <Text variant="subtitle">
                  {" "}
                  {lang === "ru"
                    ? item?.descriptionRu
                    : lang === "uz"
                    ? item?.descriptionUz
                    : item?.descriptionEn}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </SwiperSlide>
      ))}
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
