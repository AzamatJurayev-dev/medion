"use client";
import Container from "@/components/elements/Container";
import { Text } from "@/components/ui/Text";
import { Flex } from "antd";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";
import { getAwards } from "@/api/api";
import { useLocale, useTranslations } from "next-intl";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
const Awards = () => {
  const { data } = useQuery({
    queryKey: ["awards"],
    queryFn: getAwards,
  });

  const lang = useLocale();
  const t = useTranslations();

  return (
    <div className="pt-9 pb-16">
      <Container>
        <Flex vertical gap={24}>
          <Text>{t("Награды")}</Text>
          {data?.map((item) => (
            <Flex
              key={item.id}
              className="bg-white  shadow-custom-1 rounded-lg  overflow-hidden"
            >
              <Flex className="min-h-[162px] min-w-40 relative">
                <Image
                  src={imageUrlGenerator(item.awardImage.url)}
                  alt=""
                  fill
                  className="w-full h-full"
                />
              </Flex>
              <Flex vertical className="p-4 gap-2">
                <Text variant="title4">
                  {lang === "uz"
                    ? item.titleUz
                    : lang === "ru"
                    ? item.titleRu
                    : item.titleEn}
                </Text>
                <Text variant="description" className="w-2/3">
                  {lang === "uz"
                    ? item.descriptionUz
                    : lang === "ru"
                    ? item.descriptionRu
                    : item.descriptionEn}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Awards;
