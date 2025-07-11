import SwitchButton from "@/components/elements/SwitchButton";
import { Text } from "@/components/ui/Text"
import { Flex } from "antd"
import  { useState } from "react";
import { List, Skeleton } from "antd";

interface DataType {
  gender?: string;
  name?: string;
  email?: string;
  avatar?: string;
  loading: boolean;
}


const ServiceCost = () => {
     const [list, setList] = useState<DataType[]>([]);


    return (
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <Text>Стоимость услуг</Text>
          <SwitchButton />
        </Flex>
        <List
          className="demo-loadmore-list bg-white rounded-lg"
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">more</a>,
              ]}
            >
              <Skeleton avatar title={false}active>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name}</a>}
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Flex>
    );
}

export default ServiceCost