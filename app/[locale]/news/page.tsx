"use client";
import Container from "@/components/elements/Container";
import { Flex } from "antd";
import NewsCard from "./components/NewsCard";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "@/api/api";

const NewsPage = () => {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
  return (
    <div className="py-8 bg-bg1">
      <Container>
        <Flex vertical gap={24}>
          <h1 className="text-[32px] font-semibold text-dark">Новости</h1>
          <Flex>
            <Flex className="grid grid-cols-4 gap-6">
              {data?.map((item) => (
                <NewsCard
                  key={item.id}
                  data={item}
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
