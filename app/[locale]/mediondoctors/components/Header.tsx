"use client";
import Container from "@/components/elements/Container";
import CustomInput from "@/components/ui/Input";
import { SearchIcon } from "@/icons";
import { Flex, Select } from "antd";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <Container>
      <Flex vertical className="py-6 gap-6">
        <h1 className="font-semibold text-[32px]">{title}</h1>
        <Flex className="grid grid-cols-4 gap-3">
          <CustomInput placeholder="Поиск по ФИО врача" prefix={<SearchIcon />} />
          <Select
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
          <Select
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
