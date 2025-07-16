"use client";
import Container from "@/components/elements/Container";
import { Flex } from "antd";
import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { useLocale, useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getPartners } from "@/api/api";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { useRouter } from "next/navigation";
const Partners = () => {
  const { data } = useQuery({
    queryKey: ["partners"],
    queryFn: getPartners,
  });

  const t = useTranslations();
  const lang = useLocale();
  const router = useRouter();
   const handleClick = (id: number) => {
     router.push(`/partners/${id}`);
   };
  return (
    <div className="pt-8 pb-16">
      <Container>
        <Flex vertical gap={24}>
          <Text>{t("Партнёры")}</Text>
          <Flex className="grid grid-cols-3 gap-6">
            {data?.map((item) => (
              <Flex
                onClick={() => handleClick(item.id)}
                vertical
                key={item.id}
                className="gap-2 bg-white shadow-custom-1 items-start p-4 rounded-lg"
              >
                <Flex className="size-28">
                  <Image
                    src={imageUrlGenerator(item.partnerImage.url)}
                    alt={item.partnerImage.name}
                    width={1000}
                    height={1000}
                    className="object-contain w-full"
                  />
                </Flex>
                <Text variant="title4">{item.title}</Text>
                <Text variant="description">
                  {lang === "uz"
                    ? item.subdescUz
                    : lang === "ru"
                    ? item.subdescRu
                    : item.subdescEn}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Partners;
