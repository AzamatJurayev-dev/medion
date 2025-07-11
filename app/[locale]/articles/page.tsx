import Container from "@/components/elements/Container";
import { Text } from "@/components/ui/Text";
import { Flex } from "antd";
import Image from "next/image";
import doctorimage from "@/icons/doctor.png";
const page = () => {
  return (
    <div className="pt-9 pb-16 bg-bg1">
      <Container>
        <Text className="pb-6">Статьи</Text>
        <Flex vertical gap={24}>
          <Flex className="grid grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Flex
                vertical
                key={index}
                className="w-full rounded-lg shadow-custom-1"
              >
                <Image
                  src={doctorimage}
                  alt=""
                  className="rounded-t-lg object-cover w-full bg-[#E6E6E6] "
                />
                <Flex vertical className="gap-2 p-4">
                  <Text variant="title4">Каюмов Араббек</Text>
                  <Text variant="description">Директор клиники</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex className="grid grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Flex
                vertical
                key={index}
                className="w-full rounded-lg shadow-custom-1"
              >
                <Image
                  src={doctorimage}
                  alt=""
                  className="rounded-t-lg object-cover w-full bg-[#E6E6E6] "
                />
                <Flex vertical className="gap-2 p-4">
                  <Text variant="title4">Каюмов Араббек</Text>
                  <Text variant="description">Директор клиники</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex className="grid grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Flex
                vertical
                key={index}
                className="w-full rounded-lg shadow-custom-1"
              >
                <Image
                  src={doctorimage}
                  alt=""
                  className="rounded-t-lg object-cover w-full bg-[#E6E6E6] "
                />
                <Flex vertical className="gap-2 p-4">
                  <Text variant="title4">Каюмов Араббек</Text>
                  <Text variant="description">Директор клиники</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default page;
