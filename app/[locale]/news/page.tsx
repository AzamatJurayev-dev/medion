import Container from "@/components/elements/Container";
import { Flex } from "antd";
import NewsCard from "./components/NewsCard";


const NewsPage = () => {
  return (
    <div className="py-8 bg-bg1">
      <Container>
        <Flex vertical gap={24}>
          <h1 className="text-[32px] font-semibold text-dark">Новости</h1>
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
};

export default NewsPage;
