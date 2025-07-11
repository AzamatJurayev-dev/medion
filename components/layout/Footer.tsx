import { Flex, Typography } from "antd";
import Container from "../elements/Container";
import { About } from "@/constants/MenuItems";

const Footer = () => {
  return (
    <div className="bg-[#082F62]">
      <Container>
        <Flex vertical>
          <Flex justify="space-between" className="text-white py-8">
            <Flex vertical gap={16}>
              <h1>Сеть клиник Medion</h1>
              <p>Направления</p>
              <p>Услуги</p>
              <p>Филиалы</p>
              <p>Врачи Medion</p>
              <p>Зарубежные специалисты</p>
            </Flex>
            <Flex vertical gap={15}>
              <h1>О нас</h1>
              {About?.map((item, id) => (
                <Flex key={id}>{item.link}</Flex>
              ))}
            </Flex>
            <Flex vertical gap={16}>
              <h1>Для пациентов</h1>
              <p>Программа лояльности </p>
              <p>Лечение в рассрочку</p>
              <p>Для корпоративных клиентов</p>
              <p>Лечение по ФМС</p>
              <p>Лечение по ДМС</p>
              <p>Медтуризм</p>
            </Flex>
            <Flex vertical gap={16}>
              <h1>Контакты</h1>
              <p>Телефон: +998 (93) 231-03-03</p>
              <p>Колл-центр: 1223</p>
              <p>E-mail: info@medion.uz</p>
              <Flex>
                <h1>Присоединяйтесь</h1>
              </Flex>
            </Flex>
          </Flex>
          <Flex justify="center">
            <Typography className="text-center max-w-[644px] text-[#FFFFFFCC] opacity-80 text-[14px] font-normal py-4">
              Материалы (в том числе цены), размещенные на данной странице,
              носят информационный характер и предназначены для ознакомительных
              целей (не являются публичной офертой). Скидки не суммируются с
              другими специальными предложениями и акциями. Необходимо
              проконсультироваться с врачом.
            </Typography>
          </Flex>
          <Flex className="py-4 justify-between">
            <Typography className="text-white">
              ©Medion 2022. Все права защищены
            </Typography>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
