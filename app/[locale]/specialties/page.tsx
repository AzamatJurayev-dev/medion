"use client";
import Container from '@/components/elements/Container'
import { Flex } from 'antd';
import Header from './components/Header';
import MedCard from './components/Card';
import { useQuery } from '@tanstack/react-query';
import { getDepartments } from '@/api/api';



const Specialties = () => {

  const { data } = useQuery({
    queryKey: ["department"],
    queryFn:getDepartments,
  })

  return (
    <>
      <Header />
      <div className="bg-bg1 py-8">
        <Container>
          <Flex className="grid grid-cols-2 gap-6">
            {data?.map((item) => (
              <MedCard key={item.id}  data={item} />
            ))}
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default Specialties