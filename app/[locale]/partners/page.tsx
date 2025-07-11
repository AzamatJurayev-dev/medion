import Container from "@/components/elements/Container"
import { Flex } from "antd"
import Image from "next/image"
import akfa from "@/icons/AkfaMedline.png"
import { Text } from "@/components/ui/Text"
const page = () => {
  return (
    <div className="pt-8 pb-16">
      <Container>
        <Flex vertical gap={24}>
          <Text>Партнёры</Text>
          <Flex className="grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Flex
                vertical
                key={index}
                className="gap-2 bg-white shadow-custom-1 items-start p-4 rounded-lg"
              >
                <Flex className="size-20">
                  <Image src={akfa} alt="" className="object-contain w-full" />
                </Flex>
                <Text variant="title4">Akfa Medline</Text>
                <Text variant="description">
                  AKFA Medline – это крупнейший частный многопрофильный
                  медицинский центр в Средней Азии с современным оборудованием.
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default page