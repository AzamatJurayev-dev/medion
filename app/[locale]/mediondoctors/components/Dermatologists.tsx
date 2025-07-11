import Container from "@/components/elements/Container";
import { Flex } from "antd";
import DoctorCard from "../[doctor]/components/doctorcard";

const Dermatolodists = () => {
  return (
    <Container>
      <Flex vertical gap={32} className="mt-8">
        <h1 className="text-4xl font-semibold">Дерматологи</h1>

        <Flex gap={24} className="grid grid-cols-4">
          <DoctorCard
            name="С Салиха Асадовна"
            role="Кардиолог"
            about="Профессор"
            id={1}
          />
          <DoctorCard
            name="С Салиха Асадовна"
            role="Кардиолог"
            about="Профессор"
            id={2}
          />
          <DoctorCard
            name="С Салиха Асадовна"
            role="Кардиолог"
            about="Профессор"
            id={3}
          />
          <DoctorCard
            name="С Салиха Асадовна"
            role="Кардиолог"
            about="Профессор"
            id={4}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Dermatolodists;
