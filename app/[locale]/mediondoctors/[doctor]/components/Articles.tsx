import { Button, Card, Flex } from 'antd';
import Medion from  "@/icons/Medion.png";
import Image from 'next/image';

import Container from '@/components/elements/Container';

const Articles = () => {
  return (
    <Container>
      <Flex vertical gap={16} className="pb-8">
        <h1 className="text-2xl font-medium ">Статьи </h1>
        <Flex className="grid grid-cols-3 gap-3">
          <Card
            cover={
              <Image src={Medion} alt="Placeholder"  />
            }
            className="border-0 bg-white"
          >
            <Flex vertical gap={8}>
              <h2 className="text-[18px] font-semibold">
                Стома: уход, калоприемники и их использование, диета, полезные
                советы
              </h2>
              <Flex>
                <Button className="h-11 font-semibold">Читать подробно</Button>
              </Flex>
            </Flex>
          </Card>
          <Card
            cover={
              <Image src={Medion} alt="Placeholder"  />
            }
            className="border-0 bg-white"
          >
            <Flex vertical gap={8}>
              <h2 className="text-[18px] font-semibold">
                Стома: уход, калоприемники и их использование, диета, полезные
                советы
              </h2>
              <Flex>
                <Button className="h-11 font-semibold">Читать подробно</Button>
              </Flex>
            </Flex>
          </Card>
          <Card
            cover={
              <Image src={Medion} alt="Placeholder"  />
            }
            className="border-0 bg-white"
          >
            <Flex vertical gap={8}>
              <h2 className="text-[18px] font-semibold">
                Стома: уход, калоприемники и их использование, диета, полезные
                советы
              </h2>
              <Flex>
                <Button className="h-11 font-semibold">Читать подробно</Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Articles

