"use client";
import Container from "@/components/elements/Container";
import { Flex } from "antd";
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "@/api/api";
import MedCard from "../specialties/components/Card";
import Link from "next/link";

const MedionSet = () => {
  const { data } = useQuery({
    queryKey: ["department"],
    queryFn: getDepartments,
  });
  const t = useTranslations();
  return (
    <div className="py-16 bg-bg1">
      <Container>
        <Flex vertical gap={32}>
          <Text>{t("Направления сети клиник Medion")}</Text>
          <Flex className="grid grid-cols-2 gap-6">
            {data?.map((item) => (
              <MedCard key={item.id} data={item} />
            ))}
          </Flex>
          <Flex justify="center">
            <Link href={`/specialties`}>
              <CustomButton>{t("Все направления")}</CustomButton>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default MedionSet;
