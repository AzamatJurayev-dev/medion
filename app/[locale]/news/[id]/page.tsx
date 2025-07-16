"use client";
import { getNewsById } from "@/api/api";
import Container from "@/components/elements/Container";
import { Text } from "@/components/ui/Text";
import { useQuery } from "@tanstack/react-query";
import { Flex, Spin } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale } from "next-intl";
import dayjs from "dayjs";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { Navigation } from "swiper/modules";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const NewsDetailPage = () => {
  const { id } = useParams() as { id: string };

  const { data, isLoading } = useQuery({
    queryKey: ["news", id],
    queryFn: () => getNewsById(id),
    enabled: !!id,
  });

  const lang = useLocale();
  if (isLoading) return <Spin />;
  if (!data) return <div>Yangilik topilmadi</div>;
  return (
    <Flex vertical>
      <Container>
        <Flex vertical className=" justify-center py-5">
          <Text variant="title3">
            {lang === "uz"
              ? data.titleUz
              : lang === "ru"
              ? data.titleRu
              : data.titleEn}
          </Text>
          <Text variant="description">
            {dayjs(data.publishedAt).format("DD.MM.YYYY")}
          </Text>
        </Flex>
      </Container>

      <div className="bg-bg1 pt-6 pb-16">
        <Container>
          <Flex gap={32}>
            <Flex vertical className="w-3/4 gap-6 bg-white p-4 rounded-lg ">
              <div className="relative">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={2}
                  slidesPerGroup={1}
                  spaceBetween={16}
                  speed={800}
                  navigation={{
                    nextEl: ".swiper-next",
                    prevEl: ".swiper-prev",
                  }}
                >
                  {data.newsImages?.map((img) => (
                    <SwiperSlide key={img.id}>
                      <Image
                        src={imageUrlGenerator(img.url)}
                        alt={""}
                        width={1000}
                        height={500}
                        className="rounded-lg object-cover w-full h-[300px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {data?.newsImages?.length < 3 ? (
                  <div></div>
                ) : (
                  <>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 swiper-prev cursor-pointer z-20">
                      <LeftOutlined className="p-1 rounded-full bg-white" />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 swiper-next cursor-pointer z-20">
                      <RightOutlined className="p-1 rounded-full bg-white" />
                    </div>
                  </>
                )}
              </div>
              <Text variant="description" className="whitespace-pre-line">
                {lang === "uz"
                  ? data.descriptionUz
                  : lang === "ru"
                  ? data.descriptionRu
                  : data.descriptionEn}
              </Text>
            </Flex>
            <Flex className="w-1/4">Sidebar yoki aloqa</Flex>
          </Flex>
        </Container>
      </div>
    </Flex>
  );
};

export default NewsDetailPage;
