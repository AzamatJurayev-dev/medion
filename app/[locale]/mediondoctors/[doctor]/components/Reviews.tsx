import Container from "@/components/elements/Container";
import { ReplayIcon } from "@/icons";
import { Flex, Rate } from "antd";

const Reviews = () => {
  return (
    <Container>
      <Flex vertical gap={16} className="pb-8">
        <h1 className="text-2xl font-medium ">Галерея </h1>
        <Flex className="grid grid-cols-3 gap-3 p-3 bg-white rounded-lg">
          <Flex
            vertical
            className="rounded-md  border-[1px] border-[#F2F2F3]"
          >
            <Flex vertical className="relative bg-[#F9F9F9] px-4 py-3 gap-2">
              <h1 className="font-semibold text-[16px] text-[#323232]">
                Алишер
              </h1>
              <Rate defaultValue={4} disabled />
              <ReplayIcon className="absolute bottom-0 right-0 translate-y-8" />
            </Flex>
            <Flex vertical className="px-4 py-3 gap-2">
              <p className="font-normal text-[16px]">
                Отношение чуткое. Внимательное. Профессионал своего дела, любит
                свою работу и со всей ответственностью относится к ней. Самый
                лучший! Желаю Вам здоровья, семейного благополучия, долгих лет
                жизни. Низкий Вам поклон!
              </p>
              <p className="text-[16px] font-normal text-[#808284]">
                10.12.2022
              </p>
            </Flex>
          </Flex>
          <Flex
            vertical
            className="rounded-md  border-[1px] border-[#F2F2F3]"
          >
            <Flex vertical className="relative bg-[#F9F9F9] px-4 py-3 gap-2">
              <h1 className="font-semibold text-[16px] text-[#323232]">
                Алишер
              </h1>
              <Rate defaultValue={4} disabled />
              <ReplayIcon className="absolute bottom-0 right-0 translate-y-8" />
            </Flex>
            <Flex vertical className="px-4 py-3 gap-2">
              <p className="font-normal text-[16px]">
                Отношение чуткое. Внимательное. Профессионал своего дела, любит
                свою работу и со всей ответственностью относится к ней. Самый
                лучший! Желаю Вам здоровья, семейного благополучия, долгих лет
                жизни. Низкий Вам поклон!
              </p>
              <p className="text-[16px] font-normal text-[#808284]">
                10.12.2022
              </p>
            </Flex>
          </Flex>
          <Flex
            vertical
            className="rounded-md  border-[1px] border-[#F2F2F3]"
          >
            <Flex vertical className="relative bg-[#F9F9F9] px-4 py-3 gap-2">
              <h1 className="font-semibold text-[16px] text-[#323232]">
                Алишер
              </h1>
              <Rate defaultValue={4} disabled />
              <ReplayIcon className="absolute bottom-0 right-0 translate-y-8" />
            </Flex>
            <Flex vertical className="px-4 py-3 gap-2">
              <p className="font-normal text-[16px]">
                Отношение чуткое. Внимательное. Профессионал своего дела, любит
                свою работу и со всей ответственностью относится к ней. Самый
                лучший! Желаю Вам здоровья, семейного благополучия, долгих лет
                жизни. Низкий Вам поклон!
              </p>
              <p className="text-[16px] font-normal text-[#808284]">
                10.12.2022
              </p>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Reviews;
