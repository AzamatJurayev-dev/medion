"use client";
import Container from "@/components/elements/Container";
import { Flex } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getPromotions } from "@/api/api";
import PromotionCard from "./components/PromotionCard";

const PromotionsPage = () => {
  const page = 1;
  const pageSize = 12;
  const { data } = useQuery({
    queryKey: ["promotions", { page, pageSize }],
    queryFn: () => getPromotions({ page, pageSize }),
  });
  return (
    <div className="py-8 bg-[#F9F9F9]">
      <Container>
        <Flex vertical gap={24}>
          <h1 className="text-[32px] font-semibold text-[#00040A]">Акции</h1>
          <Flex>
            <Flex className="grid grid-cols-4 gap-6">
              {data?.map((item) => (
                <PromotionCard key={item.id} item={item} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default PromotionsPage;
