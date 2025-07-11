"use client";
import { Divider, Dropdown, Flex } from "antd";
import Container from "../elements/Container";
import { PhoneItems } from "../../constants/MenuItems";
import { CustomButton } from "../ui/Button";
import logo from "@/public/images/image.png";
import Image from "next/image";
import {
  ArrowDownIcon,
  ArrowUpIcon,
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
import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RusIcon } from "@/icons/rus-icon";
import { UzbIcon } from "@/icons/uzb-icon";
import { EnglishIcon } from "@/icons/english-icon";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";


const Header = () => {
  const [openLang, setOpenLang] = useState(false);
  const router = useRouter();
  const [ ,startTransition] = useTransition();
  const changeLang = (newLang: string) => {
    startTransition(() => {
      router.replace(`/${newLang}`);
    });
    setOpenLang(false);
  };
  const activePath = useLocale();
  const t = useTranslations();

const MenuData = [
  {
    link: "/our-activities",
    menu: t("Наша деятельность"),
    icon: <StetoskopIcon />,
  },
  {
    link: "/group",
    menu: t("Команда"),
    icon: <GroupIcon />,
  },
  {
    link: "/training",
    menu: t("Обучение"),
    icon: <BookIcon />,
  },
  {
    link: "/articles",
    menu: t("Статьи"),
    icon: <FileTextIcon />,
  },
  {
    link: "/partners",
    menu: t("Партнёры"),
    icon: <HandshakeIcon />,
  },
  {
    link: "/equipment",
    menu: t("Оборудование"),
    icon: <ToolIcon />,
  },
  {
    link: "/awards",
    menu: t("Награды"),
    icon: <TrophyIcon />,
  },
  {
    link: "/careers",
    menu: t("Карьера"),
    icon: <SolutionIcon />,
  },
];

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
              placeholder={t("Поиск в клинике")}
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
                <PhoneIcon /> {t("Связаться с нами")}
              </p>
            </Dropdown>
            <Flex className="relative">
              <button
                onClick={() => setOpenLang((prev) => !prev)}
                className="flex gap-2 items-center"
              >
                {activePath.toUpperCase()}
                {openLang ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </button>
              <AnimatePresence>
                {openLang && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 1 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute mt-10 z-50 -translate-x-8 shadow-custom-1 w-fit rounded-b-lg"
                  >
                    <Flex vertical className="bg-white rounded-b-lg">
                      <button
                        onClick={() => changeLang("ru")}
                        className="px-4 py-2 flex items-center gap-2 hover:bg-bg1"
                      >
                        <RusIcon />
                        Ru
                      </button>
                      <button
                        onClick={() => changeLang("uz")}
                        className="px-4 py-2 flex items-center gap-2 hover:bg-bg1"
                      >
                        <UzbIcon />
                        Uz
                      </button>
                      <button
                        onClick={() => changeLang("en")}
                        className="px-4 py-2 flex items-center gap-2 hover:bg-bg1 rounded-b-lg"
                      >
                        <EnglishIcon />
                        En
                      </button>
                    </Flex>
                  </motion.div>
                )}
              </AnimatePresence>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Divider className="m-0" />
      <Container>
        <Flex justify="space-between" align="center" className="py-2">
          <Flex align="center" gap={32}>
            <CustomDropdown trigger={t("О нас")}>
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
            <NavLink href="/specialties">{t("Направления")}</NavLink>
            <NavLink href="/services">{t("Услуги")}</NavLink>
            <CustomDropdown trigger={t("Врачи")}>
              <Flex vertical className="w-full">
                <DropdownItem
                  icon={<MedionDoctorIcon />}
                  menu={t("Врачи сети клиник Medion")}
                  link="/mediondoctors"
                />

                <DropdownItem
                  icon={<ForiegnDoctorIcon />}
                  menu={t("Зарубежные специалисты")}
                  link=""
                />
              </Flex>
            </CustomDropdown>
            <NavLink href="/health">{t("О здоровье")}</NavLink>
            <NavLink href="/news">{t("Новости")}</NavLink>
            <NavLink href="/promotions">{t("Акции")}</NavLink>
            <CustomDropdown trigger={t("Ещё")} classname="-left-40">
              <Flex className="w-full bg-white h-fit rounded-b-lg">
                <Flex vertical className="w-full border-r">
                  <h1 className="h-12 text-lg text-gray2 font-medium px-5 py-3">
                    {t("Обратная связь")}
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
                    {t("Для пациентов")}
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
              <CustomButton variant="secondary">{t("Личный кабинет")}</CustomButton>
            </NavLink>
            <CustomButton>{t("Записаться на приём")}</CustomButton>
          </Flex>
        </Flex>
      </Container>
      <Divider className="m-0" />
    </div>
  );
};

export default Header;
