import Container from "@/components/elements/Container";
import { Flex } from "antd";
import Image from "next/image";
import image2 from "@/icons/image2.png";
import gallery from "@/icons/gallery.png";
import NewsCard from "../news/components/NewsCard";

const HealthPage = () => {
  return (
    <div className="py-8 bg-bg1">
      <Container>
        <Flex gap={24}>
          <Flex vertical className="w-full gap-4 bg-white p-4 h-fit rounded-lg">
            <Flex className="w-full h-[314px] ">
              <Image
                src={image2}
                alt="asas"
                className="w-full object-cover rounded-xl "
              />
            </Flex>
            <p className="max-w-[820px] text-[16px] font-normal text-gray1 leading-6">
              Если вы испытываете описанные симптомы, из-за этого пропускаете
              работу или учебу, ограничены в повседневной деятельности, вам
              стоит посетить врача-аллерголога или пульмонолога, чтобы
              проверить, нет ли у вас астмы. То же касается проверки астмы у
              детей.У каждого человека есть свои триггеры астмы3, например
              физические упражнения, ветреная и/или очень холодная погода,
              сильное нервное перенапряжение, контакт с пылью или животными,
              крик и плач. Если у вас астма, вы можете свести к минимуму свои
              симптомы, избегая факторов, которые вызывают недомогание.
              Разобраться в вашей проблеме и чувствовать себя хорошо поможет
              совместная работа с врачом-аллергологом или пульмонологом.
            </p>
            <Flex align="center" justify="center">
              <Flex className="w-1/2 max-h-[285px]">
                <Image
                  src={gallery}
                  alt=""
                  className="object-cover rounded-md"
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex vertical gap={24}>
            {Array.from({ length: 2 }).map((_, index) => (
              <NewsCard
                key={index}
                title="5 звёзд от ассоциации медицинского туризма"
                subtitle="Дорогие пациенты, Микрохирургия глаза имени Святослава Федорова..."
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default HealthPage;
