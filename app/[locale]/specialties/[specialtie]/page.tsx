"use client";
import Container from "@/components/elements/Container";
import Header from "./components/header";
import { Text } from "@/components/ui/Text";
import About from "./components/about";
import { Flex } from "antd";
import DoctorCard from "../../mediondoctors/[doctor]/components/doctorcard";
import ServiceCost from "./components/ServiceCost";

const page = () => {
  return (
    <>
      <Header />
      <div className="bg-bg1 py-8">
        <Container>
          <div className="flex flex-col gap-16 py-8">
            <Flex vertical gap={24}>
              <Text variant="header2">Общая информация</Text>
              <About />
            </Flex>
            <Flex vertical gap={16}>
              <Flex justify="space-between">
                <Text variant="header2">Врачи</Text>
                <Text variant="link">Посмотреть все</Text>
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
            <ServiceCost />
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
