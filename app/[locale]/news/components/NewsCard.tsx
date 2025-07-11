import { Button, Card, Flex } from "antd";
import Image from "next/image";
import Medion from "@/icons/Medion.png"
interface Props {
  title: string;
  subtitle: string;
}
const NewsCard = ({ title, subtitle }: Props) => {
  return (
    <Card
      cover={<Image src={Medion} alt="Placeholder" />}
      className="bg-[#F9F9F9]"
    >
      <Flex vertical gap={8}>
        <h2 className="text-[18px] font-semibold">{title}</h2>
        <p className="text-[#66686C] text-[16px] font-normal">{subtitle}</p>
        <Flex>
          <Button className="h-11 font-semibold">Читать подробно</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default NewsCard;
