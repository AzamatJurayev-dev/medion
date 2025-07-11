import Container from "@/components/elements/Container";
import { Flex } from "antd";
import NewsCard from "../news/components/NewsCard";



const PromotionsPage = () => {
  return (
    <div className="py-8 bg-[#F9F9F9]">
      <Container>
        <Flex vertical gap={24}>
          <h1 className="text-[32px] font-semibold text-[#00040A]">Акции</h1>
          <Flex>
            <Flex className="grid grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <NewsCard
                  key={index}
                  title="5 звёзд от ассоциации медицинского туризма"
                  subtitle="Дорогие пациенты, Микрохирургия глаза имени Святослава Федорова..."
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}

export default PromotionsPage