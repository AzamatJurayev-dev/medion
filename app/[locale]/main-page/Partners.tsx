
import Container from "@/components/elements/Container";
import { Flex } from "antd";
import AkfaMedline from "@/icons/AkfaMedline.png";
import StarMed from "@/icons/StarMed.png";
import AlHayat from "@/icons/AlHayat.png";
import AsiaMed from "@/icons/AsiaMed.png";
import VivaMed from "@/icons/VivaMed.png";
import EraMed from "@/icons/EraMed.png";
import Image from "next/image";
import { Text } from "@/components/ui/Text";

const Partners = () => {
  
  return (
    <div className=" py-16 bg-[#F9F9F9]">
      <Container>
        <Flex vertical gap={32}>
          <Text>Наши партнёры</Text>
          <Flex className="grid grid-cols-6 gap-[50px] items-center">
            <Image src={AkfaMedline} alt="" className="w-full  object-cover" />
            <Image src={StarMed} alt="" className="w-full  object-cover" />
            <Image src={AlHayat} alt="" className="w-full   object-cover" />
            <Image src={AsiaMed} alt="" className="w-full  object-cover" />
            <Image src={VivaMed} alt="" className="w-full   object-cover" />
            <Image src={EraMed} alt="" className="w-full   object-cover" />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Partners;
