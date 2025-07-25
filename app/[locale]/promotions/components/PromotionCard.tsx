import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { PromotionType } from "@/types/PromotionType";
import { imageUrlGenerator } from "@/utils/ImageUrlGenerate";
import { Flex } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
interface Props {
  item: PromotionType;
}
const PromotionCard = ({ item }: Props) => {
  const t = useTranslations();
  const lang = useLocale();
  return (
    <Flex vertical className="rounded-lg relative">
      <Flex className="w-full h-[300px] rounded-t-lg overflow-hidden">
        <Image
          src={imageUrlGenerator(item.promoImage.url)}
          alt=""
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </Flex>
      <Flex vertical gap={12} className="bg-white p-4 rounded-b-lg">
        <Flex vertical gap={8}>
          <Text variant="title4">
            {lang === "uz"
              ? item.titleUz
              : lang === "ru"
              ? item.titleRu
              : item.titleEn}
          </Text>
          <Text variant="description">
            {lang === "uz"
              ? item.promoRangeUz
              : lang === "ru"
              ? item.promoRangeRu
              : item.promoRangeEn}
          </Text>
        </Flex>
        <Link href={`/promotions/${item.id}`}>
          <CustomButton variant="secondary">
            {t("Читать подробно")}
          </CustomButton>
        </Link>
      </Flex>
    </Flex>
  );
};

export default PromotionCard;
