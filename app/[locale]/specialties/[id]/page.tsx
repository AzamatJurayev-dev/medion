"use client";
import Container from "@/components/elements/Container";
import Header from "./components/header";
import { Text } from "@/components/ui/Text";
import { Flex } from "antd";
import DoctorCard from "../../mediondoctors/[doctor]/components/doctorcard";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getDepartmentByid } from "@/api/api";
import { useLocale, useTranslations } from "next-intl";
import SwitchButton from "@/components/elements/SwitchButton";
import { CustomButton } from "@/components/ui/Button";
import ImageSlider from "@/components/elements/ImageSlider";

const Page = () => {
  const { id } = useParams() as { id: string };
  const { data } = useQuery({
    queryKey: ["department", id],
    queryFn: () => getDepartmentByid(id),
    enabled:!!id,
  });
  console.log("id", id);
  const lang = useLocale();
  const t = useTranslations();
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <>
      <Header data={data} />
      <div className="bg-bg1 py-8">
        <Container>
          <div className="flex flex-col gap-16 py-8">
            <Flex vertical gap={24}>
              <Text variant="title2">{t("Общая информация")}</Text>
              <Flex className="p-4 bg-white rounded-lg">
                <Text variant="description" className="w-1/2">
                  {lang === "uz"
                    ? data?.descriptionUz
                    : lang === "ru"
                    ? data?.descriptionRu
                    : data?.descriptionEn}
                </Text>
              </Flex>
            </Flex>
            <Flex vertical gap={16}>
              <Flex justify="space-between">
                <Text variant="title2">{t("Врачи")}</Text>
                <Text variant="link">{t("Посмотреть все")}</Text>
              </Flex>
              <div className="grid grid-cols-4  gap-6">
                <DoctorCard
                  name="Салиха Асадовна"
                  role="Кардиолог"
                  about="Профессор"
                  id={1}
                />
                <DoctorCard
                  name="Салиха Асадовна"
                  role="Кардиолог"
                  about="Профессор"
                  id={1}
                />
                <DoctorCard
                  name="Салиха Асадовна"
                  role="Кардиолог"
                  about="Профессор"
                  id={1}
                />
                <DoctorCard
                  name="Салиха Асадовна"
                  role="Кардиолог"
                  about="Профессор"
                  id={1}
                />
              </div>
            </Flex>
            <Flex vertical gap={16}>
              <Flex justify="space-between" align="center">
                <Text>Стоимость услуг</Text>
                <SwitchButton />
              </Flex>
              <Flex
                vertical
                className="rounded-lg overflow-hidden bg-white w-full"
              >
                <Flex className="bg-white justify-between items-center w-full p-4 border-b border-bg4 last:border-none">
                  <Text variant="title5">
                    {t("Приём невролога (осмотр/консультация)")}
                  </Text>
                  <Flex gap={24} align="center">
                    <Text variant="title4">
                      {formatNumber(data?.consultationSum ?? 0)} {""} {t("Cум")}{" "}
                    </Text>
                    <CustomButton variant="secondary">
                      {t("Записаться")}
                    </CustomButton>
                  </Flex>
                </Flex>
                <Flex className="bg-white justify-between items-center w-full p-4 border-b border-bg4 last:border-none">
                  <Text variant="title5">
                    {t("Приём невролога (первичный приём)")}
                  </Text>
                  <Flex gap={24} align="center">
                    <Text variant="title4">
                      {formatNumber(data?.firstAppointmentSum ?? 0)} {""}{" "}
                      {t("Cум")}{" "}
                    </Text>
                    <CustomButton variant="secondary">
                      {t("Записаться")}
                    </CustomButton>
                  </Flex>
                </Flex>
                <Flex className="bg-white justify-between items-center w-full p-4 border-b border-bg4 last:border-none">
                  <Text variant="title5">
                    {t("Приём невролога (повторный приём)")}
                  </Text>
                  <Flex gap={24} align="center">
                    <Text variant="title4">
                      {formatNumber(data?.retryAppointmentSum ?? 0)} {""}{" "}
                      {t("Cум")}{" "}
                    </Text>
                    <CustomButton variant="secondary">
                      {t("Записаться")}
                    </CustomButton>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <ImageSlider images={data?.departmentImages} />
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Page;
