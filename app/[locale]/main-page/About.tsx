import Container from "@/components/elements/Container";
import { Text } from "@/components/ui/Text";
import { Flex } from "antd";

const About = () => {
  return (
    <div className="bg-bg1 relative">
      <Container>
        <Flex vertical gap={32} className="py-16 ">
          <Flex vertical gap={24} className="max-w-[640px]">
            <Text>О нас</Text>
            <Text variant="description">
              Сеть клиник Medion – это три больших многопрофильных медицинских
              центра, каждый из которых отличается своей особенностью. Все
              клиники оснащены современным оборудованием от таких зарубежных
              производителей, как GE HealthCare, Alma, Dornier, Olympus и другие
            </Text>
          </Flex>
          <p className="font-normal text-base max-w-[640px]"></p>
          <Flex gap={24}>
            <Flex
              vertical
              className="border-0 gap-4 bg-white max-w-[294px] p-4 rounded-lg"
            >
              <Flex className="gap-1 text-primary font-semibold text-4xl items-end">
                6 <span className="text-base">лет</span> 1
                <span className="text-base">месяц</span>
              </Flex>
              <Text variant="description">Заботимся о здоровье и красоте</Text>
            </Flex>
            <Flex
              vertical
              className="border-0 gap-4 bg-white max-w-[294px] p-4 rounded-lg"
            >
              <Flex className="gap-1 text-primary font-semibold text-4xl items-end">
                6 <span className="text-base">лет</span> 1
                <span className="text-base">месяц</span>
              </Flex>
              <Text variant="description">Заботимся о здоровье и красоте</Text>
            </Flex>
            <Flex
              vertical
              className="border-0 gap-4 bg-white max-w-[294px] p-4 rounded-lg"
            >
              <Flex className="gap-1 text-primary font-semibold text-4xl items-end">
                6 <span className="text-base">лет</span> 1
                <span className="text-base">месяц</span>
              </Flex>
              <Text variant="description">Заботимся о здоровье и красоте</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
