import Container from "@/components/elements/Container"
import { Flex } from "antd"
import gallery from "@/icons/gallery.png"
import Image from "next/image"
const Gallery = () => {
  return (
    <Container>
      <Flex vertical gap={16} className="mb-8">
        <h1 className="text-2xl font-medium ">Галерея </h1>
        <Flex className="grid grid-cols-3 gap-3 p-3 bg-white rounded-lg">
          <Flex className="h-[214px]">
            <Image src={gallery} alt="" className="object-cover rounded-md" />
          </Flex>
          <Flex className="h-[214px]">
            <Image src={gallery} alt="" className="object-cover rounded-md" />
          </Flex>
          <Flex className="h-[214px]">
            <Image src={gallery} alt="" className="object-cover rounded-md" />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Gallery