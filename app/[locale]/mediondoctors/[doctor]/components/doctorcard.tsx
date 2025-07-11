import { Card, Flex } from "antd";
import Image from "next/image";
import doctoricon from "@/icons/doctor.png";
import Link from "next/link";
import { Text } from "@/components/ui/Text";
interface Props {
  name: string;
  role: string;
  about: string;
  id: number;
}
const DoctorCard = ({ name, role, about ,id}: Props) => {
  return (
    <Link href={`/mediondoctors/${name}`}>
      <Card cover={<Image src={doctoricon} alt="Placeholder" />}>
        <Flex vertical>
          <Text variant="title4">{name}</Text>
          <p>{id}</p>
          <Text variant="link">{role}</Text>
          <Text variant="description">{about}</Text>
        </Flex>
      </Card>
    </Link>
  );
};

export default DoctorCard;
