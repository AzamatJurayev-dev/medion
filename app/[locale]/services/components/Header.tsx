import Container from "@/components/elements/Container";
import CustomInput from "@/components/ui/Input";
import { SearchIcon } from "@/icons";
import { Flex } from "antd";

const Header = () => {
  return (
    <Container>
      <Flex vertical className="py-[20px] gap-[20px]">
        <h1 className="font-bold text-4xl text-[#00040A]">Услуги</h1>
        <Flex>
          <CustomInput
            placeholder="Поиск по ФИО врача"
            prefix={<SearchIcon />}
            className="w-[400px]"
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
