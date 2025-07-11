
import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { Flex, Tabs, TabsProps } from "antd";
import MyTestList from "./MyTestList";
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Онлайн запись",
  },
  {
    key: "2",
    label: "Оффлайн запись",
  },
];

const page = () => {
  return (
    <Flex vertical gap={24}>
      <Flex justify="space-between" gap={24}>
        <Text>Мои приёмы</Text>
        <Flex gap={8}>
          <CustomButton className="w-fit">s</CustomButton>
          <CustomButton className="w-fit">s</CustomButton>
        </Flex>
      </Flex>
      <Flex
        vertical
        className="bg-white  pt-4 rounded-lg gap-2 shadow-custom-2"
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          className="custom-tabs m-0 px-4"
        />
        <Flex vertical>
         <MyTestList/>
         <MyTestList/>
         <MyTestList/>
         <MyTestList/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
