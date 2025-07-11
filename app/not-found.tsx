import { Flex } from "antd";
import Image from "next/image";
import notfound from "@/icons/notfound.png";
import { Text } from "@/components/ui/Text";
import { CustomButton } from "@/components/ui/Button";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <>
      <Header />
      <Flex className=" justify-center items-center bg-bg1 h-[650px]">
        <Flex vertical className="justify-center items-center gap-6">
          <Flex className="relative">
            <Image src={notfound} alt="" />
          </Flex>
          <Text variant="link">Страница не найдена</Text>
          <Link href="/">
            <CustomButton>Вернуться на главную страницу</CustomButton>
          </Link>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default page;
