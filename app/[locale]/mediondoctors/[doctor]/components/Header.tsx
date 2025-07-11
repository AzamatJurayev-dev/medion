"use client";
import Container from "@/components/elements/Container";
import { Button, Flex, Tabs, TabsProps } from "antd";
import Image from "next/image";
import React from "react";
import doctoricon from "@/icons/doctor.png";
import Link from "next/link";

const Header = () => {
const name ="Батманов Артём Леонидович";
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <Link href="#about-doctor">О врача</Link>,
    },
    {
      key: "2",
      label: <Link href="#work-total">Опыт работы</Link>,
    },
    {
      key: "3",
      label: <Link href="#work-time">График работы</Link>,
    },
    {
      key: "4",
      label: "Образование",
    },
    {
      key: "5",
      label: "Профессиональные награды",
    },
    {
      key: "6",
      label: "Галерея",
    },
    {
      key: "7",
      label: "Отзывы",
    },
    {
      key: "8",
      label: "Статьи",
    },
  ];
  return (
    <>
      <Container>
        <Flex vertical className="pt-8">
          <Flex gap={32}>
            <Image
              src={doctoricon}
              alt="Placeholder"
              height={200}
              className="bg-bg1"
            />
            <Flex vertical gap={24}>
              <Flex vertical gap={8}>
                <h1 className="text-2xl font-medium ">{name}</h1>
                <p className="text-[16px] font-normal">Дерматолог</p>
              </Flex>
              <Link
                href={`/mediondoctors/${"name"}/[AppointmentDoctor]`}
                as={`/mediondoctors/${name}/appointment`}
              >
                <Button className="bg-[#D90506] text-white text-[16px] font-medium rounded-xl h-10 border-0">
                  Записаться на приём к врачу
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <div className="w-full sticky top-0 bg-white z-50">
        <Container>
          <Tabs
            defaultActiveKey="1"
            items={items}
            className="custom-tabs m-0 "
          />
        </Container>
      </div>
    </>
  );
};

export default Header;
