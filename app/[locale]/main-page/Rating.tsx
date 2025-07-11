import Container from "@/components/elements/Container";
import { Flex, Rate } from "antd";
import StartsSmile from "@/icons/StartSmile.png"
import StomFirms from "@/icons/StomFirms.png"
import Spr from "@/icons/Spr.png"
import Yandex from "@/icons/Yandex.png"
import Image from "next/image";
import Yoo from "@/icons/Yoo.png"
import { Text } from "@/components/ui/Text";

const Rating = () => {
  return (
    <div className="py-16 bg-[#F9F9F9]">
      <Container>
        <Flex vertical gap={32}>
          <Text>Независимый рейтинг</Text>
          <Flex  className="grid grid-cols-5 gap-20 items-center">
            <Flex vertical align="center" gap={12}>
              <Image src={StartsSmile} alt="" />
              <Rate disabled defaultValue={4} />
              <p>175 отзывов</p>
            </Flex>
            <Flex vertical align="center" gap={12}>
              <Image src={StomFirms} alt="" className="w-full object-cover"/>
              <Rate disabled defaultValue={4} />
              <p>175 отзывов</p>
            </Flex>
            <Flex vertical align="center" gap={12}>
              <Image src={Spr} alt="" />
              <Rate disabled defaultValue={4} />
              <p>175 отзывов</p>
            </Flex>
            <Flex vertical align="center" gap={12}>
              <Image src={Yandex} alt="" />
              <Rate disabled defaultValue={4} />
              <p>175 отзывов</p>
            </Flex>
            <Flex vertical align="center" gap={12}>
              <Image src={Yoo} alt="" />
              <Rate disabled defaultValue={4} />
              <p>175 отзывов</p>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Rating;
