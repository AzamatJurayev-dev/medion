import Container from "@/components/elements/Container"
import { Text } from "@/components/ui/Text"
import { Flex } from "antd"
import Image from "next/image";
import award from "@/icons/award.png"
const page = () => {
  return (
    <div className="pt-9 pb-16">
      <Container>
        <Flex vertical gap={24}>
          <Text>Награды</Text>
          <Flex className="bg-white shadow-custom-1 rounded-lg">
            <Image src={award} alt="" className="rounded-lg"/>
            <Flex vertical className="p-4 gap-2">
              <Text variant="title4">Бренд Года 2021 в сфере медицины</Text>
              <Text variant="description" className="w-2/3">
                Лучший Бренд Года 2021 в сфере медицины по мнению жюри
                маркетинговой ассоциации Узбекистана.
              </Text>
            </Flex>
          </Flex>
          <Flex className="bg-white shadow-custom-1 rounded-lg">
            <Image src={award} alt="" className="rounded-lg"/>
            <Flex vertical className="p-4 gap-2">
              <Text variant="title4">Бренд Года 2021 в сфере медицины</Text>
              <Text variant="description" className="w-2/3">
                Лучший Бренд Года 2021 в сфере медицины по мнению жюри
                маркетинговой ассоциации Узбекистана.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default page