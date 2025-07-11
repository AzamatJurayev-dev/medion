import { Text } from "@/components/ui/Text";
import { Flex } from "antd";
import MyTestList from "../test-results/MyTestList";

const page = () => {
  return (
    <Flex vertical gap={24}>
      <Text>Мои приёмы</Text>
      <Flex
        vertical
        className="bg-white pt-2 rounded-lg gap-2 shadow-custom-2"
      >
        <Flex vertical>
          <MyTestList />
          <MyTestList />
          <MyTestList />
          <MyTestList />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default page;
