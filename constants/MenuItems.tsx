
import { Flex, MenuProps } from "antd";

export const PhoneItems: MenuProps["items"] = [
  {
    label: (
      <Flex>
        <Flex vertical>
          <h1 className="text-[#66686C] font-normal text-[14px]">
            Для жителей Ташкента
          </h1>
          <p className="text-[#323232] font-semibold text-[16px]">1223</p>
        </Flex>
      </Flex>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Flex>
        <Flex vertical>
          <h1 className="text-[#66686C] font-normal text-[14px]">
            Для жителей регионов
          </h1>
          <p className="text-[#323232] font-semibold text-[16px]">
            +998 (78) 140-00-10
          </p>
        </Flex>
      </Flex>
    ),
    key: "1",
  },
];

export const About = [
  {
    id: 1,
    link: "Наша деятельность",
  },
  { id: 2, link: "Команда " },
  { id: 3, link: "Обучение" },
  { id: 4, link: " Статьи " },
  { id: 5, link: "Партнёры" },
  { id: 6, link: "Оборудование" },
  { id: 7, link: "Награды" },
  { id: 8, link: "Карьера" },
];
