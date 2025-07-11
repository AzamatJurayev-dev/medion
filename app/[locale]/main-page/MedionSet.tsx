import Container from "@/components/elements/Container";
import { Card, Flex } from "antd";
import { BEL } from "@/icons";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";

const MedionSet = () => {
  return (
    <div className="py-16 bg-bg1">
      <Container>
        <Flex vertical gap={32}>
          <h1 className="text-4xl font-semibold"></h1>
          <Flex className="grid grid-cols-2 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <Card key={index}>
                <Flex gap={16} align="center">
                  <BEL />
                  <Flex vertical>
                    <Text variant="title4">
                      Урология
                    </Text>
                    <Text variant="description">
                      Наука желудочно-кишечного тракта
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
          <Flex justify="center">
            <CustomButton>
              allSpecialties
            </CustomButton>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default MedionSet;
