import Container from "@/components/elements/Container"
import { Text } from "@/components/ui/Text"
import { Flex } from "antd";
import Image from "next/image";
import equepment from "@/icons/equepment.png"
import { CustomButton } from "@/components/ui/Button";
const page = () => {
  return (
    <div className="pt-6 pb-16">
      <Container>
        <Flex vertical gap={24}>
          <Text>Оборудование</Text>
          <Flex className="grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_ , index) => (
              <Flex key={index} vertical className="rounded-lg shadow-custom-1">
                <Image src={equepment} alt="" className="rounded-t-lg w-full" />
                <Text variant="title4" className="p-3 xl:p-4">
                  Комплекс тренажеров David Back Concept
                </Text>
              </Flex>
            ))}
          </Flex>
          <Flex justify="center">
            <CustomButton>Показать ещё</CustomButton>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default page