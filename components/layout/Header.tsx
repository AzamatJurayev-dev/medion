import { Divider, Dropdown, Flex} from "antd";
import Container from "../elements/Container";
import { PhoneItems } from "../../constants/MenuItems";
import { CustomButton } from "../ui/Button";
import logo from "@/public/images/image.png";
import Image from "next/image";
import {
  BookIcon,
  FileTextIcon,
  ForiegnDoctorIcon,
  GroupIcon,
  HandshakeIcon,
  MedionDoctorIcon,
  PhoneIcon,
  SearchIcon,
  SolutionIcon,
  StetoskopIcon,
  ToolIcon,
  TrophyIcon,
} from "@/icons";
import CustomInput from "../ui/Input";
import NavLink from "../ui/NavLink";
import DropdownItem from "../ui/DropdownItem";
import CustomDropdown from "../ui/Dropdown";

const MenuData = [
  {
    link: "/our-activities",
    menu: "Наша деятельность",
    icon: <StetoskopIcon />,
  },
  {
    link: "/group",
    menu: "Команда",
    icon: <GroupIcon />,
  },
  {
    link: "/training",
    menu: "Обучение",
    icon: <BookIcon />,
  },
  {
    link: "/articles",
    menu: "Статьи",
    icon: <FileTextIcon />,
  },
  {
    link: "/partners",
    menu: "Партнёры",
    icon: <HandshakeIcon />,
  },
  {
    link: "/equipment",
    menu: "Оборудование",
    icon: <ToolIcon />,
  },
  {
    link: "/awards",
    menu: "Награды",
    icon: <TrophyIcon />,
  },
  {
    link: "/careers",
    menu: "Карьера",
    icon: <SolutionIcon />,
  },
];

const Header = () => {
  return (
    <div className=" bg-white">
      <Container>
        <Flex className="justify-between items-center py-2">
          <Flex gap={32} align="center">
            <NavLink href={"/"}>
              <Image src={logo} alt="" height={30} />
            </NavLink>
            <CustomInput
              prefix={<SearchIcon />}
              placeholder="Поиск в клинике"
              className="w-[350px]"
            />
          </Flex>
          <Flex gap={16} align="center">
            <Dropdown
              menu={{ items: PhoneItems }}
              trigger={["click"]}
              className="bg-[#F7F7F7] rounded-lg px-3 py-2 "
            >
              <p className="font-medium flex gap-3 items-center">
                <PhoneIcon /> Связаться с нами
              </p>
            </Dropdown>
          </Flex>
        </Flex>
      </Container>
      <Divider className="m-0" />
      <Container>
        <Flex justify="space-between" align="center" className="py-2">
          <Flex align="center" gap={32}>
            <CustomDropdown trigger={"О нас"}>
              <Flex vertical className="w-full">
                {MenuData.map((item, index) => (
                  <DropdownItem
                    key={index}
                    menu={item.menu}
                    link={item.link}
                    icon={item.icon}
                  />
                ))}
              </Flex>
            </CustomDropdown>
            <NavLink href="/specialties">Направления</NavLink>
            <NavLink href="/services">Услуги</NavLink>
            <CustomDropdown trigger={"Врачи"}>
              <Flex vertical className="w-full">
                <DropdownItem
                  icon={<MedionDoctorIcon />}
                  menu="Врачи сети клиник Medion"
                  link=""
                />

                <DropdownItem
                  icon={<ForiegnDoctorIcon />}
                  menu="Зарубежные специалисты"
                  link=""
                />
              </Flex>
            </CustomDropdown>
            <NavLink href="/health">О здоровье</NavLink>
            <NavLink href="/news">Новости</NavLink>
            <NavLink href="/promotions">Акции</NavLink>
            <CustomDropdown trigger="Ещё" classname="-left-40">
              <Flex className="w-full bg-white h-fit rounded-b-lg">
                <Flex vertical className="w-full border-r">
                  <h1 className="h-12 text-lg text-gray2 font-medium px-5 py-3">
                    Обратная связь
                  </h1>
                  {MenuData.map((item, index) => (
                    <DropdownItem
                      key={index}
                      menu={item.menu}
                      link={item.link}
                      icon={item.icon}
                    />
                  ))}
                </Flex>
                <Flex vertical className="w-full">
                  <h1 className="h-12 text-lg text-gray2 font-medium px-5 py-3">
                    Для пациентов
                  </h1>
                  {MenuData.map((item, index) => (
                    <DropdownItem
                      key={index}
                      menu={item.menu}
                      link={item.link}
                      icon={item.icon}
                    />
                  ))}
                </Flex>
              </Flex>
            </CustomDropdown>
          </Flex>
          <Flex align="center" gap={12}>
            <NavLink href="/profile">
              <CustomButton variant="secondary">Личный кабинет</CustomButton>
            </NavLink>
            <CustomButton>Записаться на приём</CustomButton>
          </Flex>
        </Flex>
      </Container>
      <Divider className="m-0" />
    </div>
  );
};

export default Header;
