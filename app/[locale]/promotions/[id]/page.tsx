"use client";
import { getPromotionById } from "@/api/api";
import Container from "@/components/elements/Container";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "antd";
import dayjs from "dayjs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

const PromotionDetails = () => {
  const { id } = useParams() as { id: string };
  const { data } = useQuery({
    queryKey: ["promotions", id],
    queryFn: () => getPromotionById(id),
    enabled: !!id,
  });
  const lang = useLocale();
  const t = useTranslations();
  console.log(data?.promoImage.id);
  return (
    <Flex vertical>
      <Container>
        <Flex vertical className="py-5 gap-3">
          <Text variant="title3">
            {lang === "uz"
              ? data?.titleUz
              : lang === "ru"
              ? data?.titleRu
              : data?.titleEn}
          </Text>
          <Text variant="description">
            {dayjs(data?.publishedAt).format("DD.MM.YYYY")}
          </Text>
        </Flex>
      </Container>
      <div className="bg-bg1 pt-6 pb-16">
        <Container>
          <Flex className="grid grid-cols-[4fr_1fr] gap-6">
            <Flex vertical className="bg-white p-4 rounded-lg gap-4">
              <Flex className="w-full h-[380px]">
                <Image
                  src={imageUrlGenerator(data?.promoImage.url)}
                  alt=""
                  width={1000}
                  height={1000}
                  className="object-fit w-full h-full rounded-xl"
                />
              </Flex>
              <Flex>
                <Text variant="description">
                  {lang === "uz"
                    ? data?.descriptionUz
                    : lang === "ru"
                    ? data?.descriptionRu
                    : data?.descriptionEn}
                </Text>
              </Flex>
              <Flex vertical className="bg-bg1 rounded-lg p-4 gap-2">
                <Text variant="title4" className="text-primary">
                  {t("Акция проводится:")}
                </Text>
                <Text variant="description">
                  {lang === "uz"
                    ? data?.servicePromotionUz
                    : lang === "ru"
                    ? data?.servicePromotionRu
                    : data?.servicePromotionEn}
                </Text>
              </Flex>
              <Flex className="grid grid-cols-2 p-6 gap-6 bg-bg1 rounded-lg">
                <Flex gap={4}>
                  <Text variant="link">{t("Акция проводится:")}</Text>
                  <Text variant="title4">
                    {lang === "uz"
                      ? data?.promoLocationUz
                      : lang === "ru"
                      ? data?.promoLocationRu
                      : data?.promoLocationEn}
                  </Text>
                </Flex>
                <Flex gap={4}>
                  <Text variant="link">{t("Колл-центр:")}</Text>
                  <Text variant="title4">
                    {lang === "uz"
                      ? data?.titleUz
                      : lang === "ru"
                      ? data?.titleRu
                      : data?.titleEn}
                  </Text>
                </Flex>
                <Flex gap={4}>
                  <Text variant="link">{t("Акция действует:")}</Text>
                  <Text variant="title4">
                    {lang === "uz"
                      ? data?.promoRangeUz
                      : lang === "ru"
                      ? data?.promoRangeRu
                      : data?.promoRangeEn}
                  </Text>
                </Flex>
                <Flex gap={4}>
                  <Text variant="link">{t("Колл-центр:")}</Text>
                  <Text variant="title4">
                    {lang === "uz"
                      ? data?.titleUz
                      : lang === "ru"
                      ? data?.titleRu
                      : data?.titleEn}
                  </Text>
                </Flex>
              </Flex>
              <CustomButton className="w-full" variant="secondary">
                {t("Заказать обратный звонок")}
              </CustomButton>
            </Flex>
            <Flex>xjasbchsa</Flex>
          </Flex>
        </Container>
      </div>
    </Flex>
  );
};

export default PromotionDetails;
