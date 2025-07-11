import Container from "@/components/elements/Container";
import { Flex } from "antd";
import Link from "next/link";
import DoctorCard from "../mediondoctors/[doctor]/components/doctorcard";
import { Text } from "@/components/ui/Text";

const Doctors = () => {
  return (
    <div className="mb-16 py-16 bg-[#F9F9F9]">
      <Container>
        <Flex vertical gap={32}>
          <Flex className="justify-between items-center">
            <Text>Врачи</Text>
            <Link href="/mediondoctors">Посмотреть все</Link>
          </Flex>
          <Flex gap={24} className="grid grid-cols-4">
            <DoctorCard
              name="Салиха Асадовна"
              role="Кардиолог"
              about="Профессор"
              id={1}
            />
            <DoctorCard
              name="Салиха Асадовна"
              role="Кардиолог"
              about="Профессор"
              id={2}
            />
            <DoctorCard
              name="Салиха Асадовна"
              role="Кардиолог"
              about="Профессор"
              id={3}
            />
            <DoctorCard
              name="Салиха Асадовна"
              role="Кардиолог"
              about="Профессор"
              id={4}
            />
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Doctors;
