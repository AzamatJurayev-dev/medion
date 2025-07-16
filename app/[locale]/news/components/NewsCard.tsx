"use client";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Newstype } from "@/types/PromotionType";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { Flex } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data?: Newstype;
}

const NewsCard = ({ data }: Props) => {
  const t = useTranslations();
  const image = data?.newsImages?.[0];
  const lang = useLocale();
  return (
    <Flex vertical className="rounded-lg relative">
      <Flex className="w-full h-[300px] relative rounded-t-lg overflow-hidden">
        <Image
          src={imageUrlGenerator(image?.url)}
          alt={""}
          height={300}
          width={400}
          className="w-full h-full object-cover"
        />
      </Flex>

      <Flex vertical gap={12} className="bg-white p-4 rounded-b-lg">
        <Flex vertical gap={8}>
          <Text variant="title4">
            {lang === "uz"
              ? data?.titleUz
              : lang === "ru"
              ? data?.titleRu
              : data?.titleEn}
          </Text>
          <Text variant="description">
            {lang === "uz"
              ? data?.subdescUz
              : lang === "ru"
              ? data?.subdescRu
              : data?.subdescEn}
          </Text>
        </Flex>
        <Link href={`/news/${data?.id}`}>
          <CustomButton variant="secondary">
            {t("Читать подробно")}
          </CustomButton>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NewsCard;
