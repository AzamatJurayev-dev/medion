import Container from "@/components/elements/Container";
import { Card, Flex, Typography } from "antd";

const About = () => {
  return (
    <Container>
      <Flex id="about-doctor" vertical gap={32} className="py-8">
        <Flex vertical gap={16}>
          <h1 className="text-2xl font-medium ">О врача</h1>
          <Card>
            <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
              Заместитель директора институ по Онкологии, Профессор Радиологии,
              Главный специалист по диагностике.
            </Typography>
          </Card>
        </Flex>
        <Flex id="work-total" vertical gap={16}>
          <h1 className="text-2xl font-medium ">Опыт работы</h1>
          <Card>
            <Flex vertical justify="space-between">
              <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
                Ежегодно участвует в международных научных конференциях,
                посвященных актуальным вопросам репродуктивной медицины,
                проводимых под эгидой ESHRE и РАРЧ в России и за рубежом.
              </Typography>
              <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
                Участник программы стажировки в клинике ``ИВИ-Валенсия``,
                Испания.
              </Typography>
              <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
                Активный сторонник внедрения доказательной медицины (EBM) в
                медицинскую практику в России.
              </Typography>
            </Flex>
          </Card>
        </Flex>
        <Flex vertical id="work-time" gap={16}>
          <h1 className="text-2xl font-medium ">График работы</h1>
          <Flex className="grid grid-cols-7 bg-white gap-2 p-2 rounded-[8px]">
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
            <Flex vertical className="bg-[#F9F9F9] rounded-md p-3">
              <h1 className="text-lg font-semibold">Понедельник</h1>
              <p className="text-[16px] font-normal">09:00 - 18:00 </p>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical id="obraz" gap={16}>
          <h1 className="text-2xl font-medium ">Образование</h1>
          <Card>
            <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
              Заместитель директора институ по Онкологии, Профессор Радиологии,
              Главный специалист по диагностике.
            </Typography>
          </Card>
        </Flex>
        <Flex vertical id="proffesse" gap={16}>
          <h1 className="text-2xl font-medium ">Профессиональные награды</h1>
          <Card>
            <Flex vertical justify="space-between">
              <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
                Член Европейского общества эмбриологии и репродукции человека
                (ESHRE).
              </Typography>
              <Typography className="max-w-[620px] text-[16px] font-normal text-[#323232]">
                Член Российской ассоциации репродукции человека (РАРЧ).
              </Typography>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Container>
  );
};

export default About;
