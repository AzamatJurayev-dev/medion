import Container from "@/components/elements/Container";
import Header from "./components/Header";
import { Button, Flex, Typography } from "antd";
import { SearchIcon } from "@/icons";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <div className="py-8 bg-bg1">
        <Container>
          <Flex gap={24}>
            <Flex vertical gap={8} className="bg-white rounded-xl p-2 h-fit">
              {Array.from({ length: 6 }).map((_, index) => (
                <Button
                  key={index}
                  icon={<SearchIcon />}
                  type="text"
                  className="h-12 active:text-primary"
                >
                  <Typography className="text-[16px] font-medium">
                    Консультация в клинике
                  </Typography>
                </Button>
              ))}
            </Flex>
            <Flex vertical className="w-full gap-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <Flex
                  key={index}
                  className="bg-white p-4 w-full justify-between items-center rounded-lg"
                >
                  <Flex vertical>
                    <h1 className="text-lg font-semibold text-dark">
                      Нарколог (осмотр/консультация)
                    </h1>
                    <p className="text-sm font-normal text-gray2">
                      Берутся анализы на мочевину и креатинин
                    </p>
                  </Flex>
                  <Flex align="center" gap={24}>
                    <h1 className="text-lg font-semibold text-dark">
                      128 000 сум
                    </h1>
                    <Button className="h-10">Записаться</Button>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default ServicesPage;
