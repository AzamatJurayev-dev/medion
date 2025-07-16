"use client";
import { getPartnersById } from "@/api/api";
import Container from "@/components/elements/Container";
import { Text } from "@/components/ui/Text";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { useQuery } from "@tanstack/react-query";
import { Flex } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

const PartnerDetails = () => {
  const { id } = useParams() as { id: string };
  const { data } = useQuery({
    queryKey: ["partners", id],
    queryFn: () => getPartnersById(id),
    enabled: !!id,
  });
  const t = useTranslations();
  const lang = useLocale();
  return (
    <Container classname="pt-9 pb-16">
      <Flex vertical gap={36}>
        <Text>{data?.title}</Text>
        <Flex gap={16}>
          <Flex className="h-[74px] w-[110px] relative bg-bg1 rounded-lg">
            <Image
              src={imageUrlGenerator(data?.partnerImage.url)}
              alt={data?.partnerImage.name || ""}
              fill
              className="w-full h-full object-fit"
            />
          </Flex>
          <Flex
            vertical
            className="h-[74px] bg-bg1 justify-center rounded-lg px-6 gap-1"
          >
            <Text variant="subtitle2">{t("Телефон")}</Text>
            <Text variant="title3">{data?.phoneNumber}</Text>
          </Flex>
          <Flex
            vertical
            className="h-[74px] bg-bg1 justify-center rounded-lg px-6 gap-1"
          >
            <Text variant="subtitle2">{t("Сайт")}</Text>
            <Text variant="title4">{data?.link}</Text>
          </Flex>
        </Flex>
        <Text variant="description" className="max-w-[700px]">
          {lang === "uz"
            ? data?.descriptionUz
            : lang === "ru"
            ? data?.descriptionRu
            : data?.descriptionEn}
        </Text>
      </Flex>
    </Container>
  );
};

export default PartnerDetails;
