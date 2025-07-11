import Container from "@/components/elements/Container";

import { Flex } from "antd";

const Header = () => {
  return (
    <Container>
      <Flex vertical className="py-[20px] gap-[20px]">
        <h1 className="font-bold text-4xl text-[#00040A]">
          Может быть, это астма?
        </h1>
        <Flex>
          <p className="text-sm font-normal text-[#323232]">Июль 6, 2022</p>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
