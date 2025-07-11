import Container from "@/components/elements/Container";
import { Button, Flex } from "antd";

const Patients = () => {
  return (
    <Container>
      <Flex vertical gap={32} >
        <Flex>
          <h1 className="text-4xl font-semibold"></h1>
        </Flex>
        <Flex className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <Flex key={index} className="relative rounded-xl h-[460px] bg-gray-300">
              <Flex vertical className="absolute bottom-6 left-6">
                <h1 className="text-[#FFFFFF] text-[18px] font-semibold">
                  Юлдуз Раджабова
                </h1>
                <p className="text-[#fff] text-[16px] font-normal">Актриса</p>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex justify="center">
          <Button className="bg-[#D90506] text-white text-base font-medium rounded-xl h-12 border-0">
            leaveReview
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Patients;
