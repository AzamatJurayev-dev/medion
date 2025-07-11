import { Flex } from "antd";
import { CustomButton } from "@/components/ui/Button";
import MainSlider from "@/app/[locale]/main-page/components/MianSlider";
import Container from "@/components/elements/Container";
import Image from "next/image";
import image2 from "@/icons/image2.png";
import { Text } from "@/components/ui/Text";
import { useTranslations } from "next-intl";



const Main = () => {

  const t = useTranslations(); 
  return (
    <Container>
      <Flex className="grid grid-cols-2 gap-6  ">
        <MainSlider />
        <Flex vertical gap={24}>
          <Flex className=" relative h-[312px]">
            <Image
              src={image2}
              alt="asas"
              fill
              className="object-cover rounded-2xl"
            />
            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-1/2 h-full rounded-xl p-6"
            >
              <Text variant="title2">Годовая программа “Моё Здоровье”</Text>
              <CustomButton variant="default">{t("Подробнее")}</CustomButton>
            </Flex>
          </Flex>
          <Flex className=" relative h-[312px]">
            <Image
              src={image2}
              alt="asas"
              fill
              className="object-cover rounded-2xl"
            />
            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-1/2 h-full rounded-xl p-6"
            >
              <Text variant="title2">Годовая программа “Моё Здоровье”</Text>
              <CustomButton variant="default">{t("Подробнее")}</CustomButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Main;
