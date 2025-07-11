import Container from "@/components/elements/Container";
import { Flex} from "antd";
import Image from "next/image";
import image2 from "@/icons/image2.png";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
const MedicalServise = () => {
  return (
    <Container>
      <Flex vertical gap={32}>
        <h1 className="text-4xl font-semibold">Медицинские услуги</h1>
        <Flex className="grid grid-cols-2 gap-6">
          <Flex className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Background"
              className="object-cover rounded-2xl"
            />

            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-2/3 h-full  p-6"
            >
              <Flex vertical gap={8}>
                <Text variant="title3">Диагностика</Text>
                <Text variant="subtitle">
                  МРТ, МСКТ, ЭЭГ, ЭКГ, УЗИ, рентген, маммография, колоноскопия,
                  гастроскопия, тредмил тест, холтер
                </Text>
              </Flex>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>

          <Flex className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Background"
              className="object-cover rounded-2xl"
            />

            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-2/3 h-full  p-6"
            >
              <Flex vertical gap={8}>
                <Text variant="title3">Диагностика</Text>
                <Text variant="subtitle">
                  МРТ, МСКТ, ЭЭГ, ЭКГ, УЗИ, рентген, маммография, колоноскопия,
                  гастроскопия, тредмил тест, холтер
                </Text>
              </Flex>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="grid grid-cols-3 gap-6">
          <Flex className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Background"
              className="object-cover rounded-2xl"
            />

            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-2/3 h-full  p-6"
            >
              <Flex vertical gap={8}>
                <Text variant="title4">Диагностика</Text>
                <Text variant="subtitle2">
                  МРТ, МСКТ, ЭЭГ, ЭКГ, УЗИ, рентген, маммография, колоноскопия,
                  гастроскопия, тредмил тест, холтер
                </Text>
              </Flex>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>
          <Flex className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Background"
              className="object-cover rounded-2xl"
            />

            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-2/3 h-full  p-6"
            >
              <Flex vertical gap={8}>
                <Text variant="title4">Диагностика</Text>
                <Text variant="subtitle2">
                  МРТ, МСКТ, ЭЭГ, ЭКГ, УЗИ, рентген, маммография, колоноскопия,
                  гастроскопия, тредмил тест, холтер
                </Text>
              </Flex>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>
          <Flex className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Background"
              className="object-cover rounded-2xl"
            />

            <Flex
              vertical
              justify="space-between"
              className="bg-custom-horizontal-fade absolute bottom-0 left-0 w-2/3 h-full  p-6"
            >
              <Flex vertical gap={8}>
                <Text variant="title4">Диагностика</Text>
                <Text variant="subtitle2">
                  МРТ, МСКТ, ЭЭГ, ЭКГ, УЗИ, рентген, маммография, колоноскопия,
                  гастроскопия, тредмил тест, холтер
                </Text>
              </Flex>
              <CustomButton variant="default">Подробнее</CustomButton>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MedicalServise;
