import { Text } from '@/components/ui/Text';
import { BEL } from '@/icons';
import { Card, Flex } from 'antd';
import Link from 'next/link';
import React from 'react'

const MedCard = ({name}:{name:string}) => {
  return (
    <Link href={`specialties/${name}`}>
      <Card>
        <Flex gap={16} align='center'>
          <BEL />
          <Flex vertical>
            <Text variant='title4'>
              {name}
            </Text>
            <Text variant='description'>
              Наука желудочно-кишечного тракта
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}

export default MedCard