import { CustomButton } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text"
import { Flex } from "antd";
import MyList from "./components/MyVisitList";
import TabsCustom from "@/components/ui/TabsCustom";
import Link from "next/link";

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
      <Flex vertical className="bg-white rounded-lg gap-2 shadow-custom-2">
        <TabsCustom tabs={<Link href="#">asxas</Link> } />  
        <Flex vertical> 
          <MyList />
          <MyList />
          <MyList />
          <MyList />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default page