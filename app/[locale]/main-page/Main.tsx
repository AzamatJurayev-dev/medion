"use client";
import { Flex } from "antd";
import { CustomButton } from "@/components/ui/Button";
import MainSlider from "@/app/[locale]/main-page/components/MianSlider";
import Container from "@/components/elements/Container";
import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { useLocale, useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getPromotions } from "@/api/api";
import { useRouter } from "next/navigation";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";

const Main = () => {
  const page = 1;
  const pageSize = 2;
  const { data: promotions } = useQuery({
    queryKey: ["promotions", { page, pageSize }],
    queryFn: () => getPromotions({ page, pageSize }),
  });

  const t = useTranslations();
  const lang = useLocale();
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/promotions/${id}`);
  };
  return (
    <Container>
      <Flex className="grid grid-cols-2 gap-6  ">
        <MainSlider />
        <Flex vertical gap={24}>
          {promotions?.map((item) => (
            <Flex
              key={item.id}
              className="relative h-[312px] rounded-xl w-full overflow-hidden"
            >
              <Image
                src={imageUrlGenerator(item.promoImage.url)}
                alt="asas"
                fill
                className=" object-cover rounded-2xl w-full"
              />
              <Flex
                vertical
                justify="space-between"
                className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-1/2 h-full rounded-xl p-6"
              >
                <Text variant="title2">
                  {lang === "ru"
                    ? item?.titleRu
                    : lang === "uz"
                    ? item?.titleUz
                    : item?.titleEn}
                </Text>
                <CustomButton
                  onClick={() => handleClick(item.id)}
                  variant="default"
                >
                  {t("Подробнее")}
                </CustomButton>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Main;
