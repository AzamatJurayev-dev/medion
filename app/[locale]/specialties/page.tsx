import React from 'react'

import Container from '@/components/elements/Container'
import { Flex } from 'antd';
import Header from './components/Header';
import MedCard from './components/Card';



const Specialties = () => {
  return (
    <>
      <Header />
      <div className="bg-bg1 py-8">
        <Container>
          <Flex className="grid grid-cols-2 gap-6">
            {Array.from({ length: 24 }).map((_, index) => (
              <MedCard key={index} name="Гастроэнтерология" />
            ))}
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Specialties