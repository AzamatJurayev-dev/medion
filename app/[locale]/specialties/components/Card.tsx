import { Text } from "@/components/ui/Text";
import { DepartmentType } from "@/types/PromotionType";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { Card, Flex } from "antd";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MedCard = ({ data }: { data: DepartmentType }) => {
  const lang = useLocale();
  return (
    <Link href={`specialties/${data.id}`}>
      <Card>
        <Flex gap={16} align="center">
          <Flex className="size-[56px] rounded-lg bg-[#C32C310D]">
            <Image
              src={imageUrlGenerator(data.departmentIcon.url)}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </Flex>
          <Flex vertical>
            <Text variant="title4">
              {lang === "uz"
                ? data.titleUz
                : lang === "ru"
                ? data.titleRu
                : data.titleEn}
            </Text>
            <Text variant="description">
              {" "}
              {lang === "uz"
                ? data.subdescUz
                : lang === "ru"
                ? data.subdescRu
                : data.subdescEn}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};

export default MedCard;
