import { Text } from "@/components/ui/Text"
import { Flex } from "antd"

const page = () => {
  return (
    <Flex vertical gap={16}>
      <Text>Кошелёк</Text>
      <Flex className="grid grid-cols-3 gap-6">
        <Flex
          vertical
          justify="space-between"
          className="p-4 bg-white rounded-lg gap-6"
        >
          <Text variant="link">Баланс</Text>
          <Text variant="header2">50 000 сум</Text>
        </Flex>
        <Flex
          vertical
          justify="space-between"
          className="p-4 bg-white rounded-lg gap-6"
        >
          <Text variant="link">Баланс</Text>
          <Text variant="header2">50 000 сум</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default page