import Container from "@/components/elements/Container"
import Header from "./components/header"
import { Flex } from "antd"
import { Text } from "@/components/ui/Text"
import { CustomButton } from "@/components/ui/Button"

const page = () => {
  return (
    <div>
      <Header />
      <Flex vertical className="bg-bg1 pt-8  pb-16 gap-8">
        <Container>
          <Flex className="grid grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Flex key={index} vertical className="gap-3 p-6 bg-white rounded-lg">
                <Text variant="title4">Врач-гематолог</Text>
                <Text variant="description">
                  Вы обладаете большим опытом работы с серверными и клиентскими
                  ОС Microsoft; Много работали с сетевыми службами и сервисами
                  Microsoft (AD, DNS, IIS, RDS) и отлично в них разбираетесь;
                </Text>
                <CustomButton variant="secondary">
                  Узнать подробнее
                </CustomButton>
              </Flex>
            ))}
          </Flex>
        </Container>
        <Flex vertical className="bg-white justify-center items-center">
          <Text variant="title2">Не нашли вакансию которую искали?</Text>
          <Text variant="description">
            Оставьте своё резюме и контакты, мы свяжемся с Вами в ближайшее
            время
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default page