import Container from "@/components/elements/Container"
import Header from "./components/header"
import { Flex } from "antd"
import { Text } from "@/components/ui/Text";
import Image from "next/image";
import award from "@/icons/award.png";
const page = () => {
  return (
    <div>
      <Header />
      <div className="bg-bg1 pt-8 pb-16">
        <Container>
          <Flex vertical gap={24}>
            <Flex className="grid grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Flex key={index} className="bg-white shadow-custom-1 rounded-lg">
                  <Image src={award} alt="" className="rounded-lg" />
                  <Flex vertical className="p-4 gap-2">
                    <Text variant="title4">
                      Бренд Года 2021 в сфере медицины
                    </Text>
                    <Text variant="description" className="w-2/3">
                      Лучший Бренд Года 2021 в сфере медицины по мнению жюри
                      маркетинговой ассоциации Узбекистана.
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Container>
      </div>
    </div>
  );
}

export default page