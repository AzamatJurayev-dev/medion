import { Card, Flex } from "antd";
import Image from "next/image";
import doctoricon from "@/icons/doctor.png";
import Link from "next/link";
interface Props {
  name: string;
  role: string;
  about: string;
}
const DoctorCard = ({ name, role, about }: Props) => {
  return (
    <Link href={`/doctors/${name}`}>
      <Card cover={<Image src={doctoricon} alt="Placeholder" />}>
        <Flex vertical>
          <h2 className="text-[18px] font-semibold">{name}</h2>
          <p>{role}</p>
          <p>{about}</p>
        </Flex>
      </Card>
    </Link>
  );
};

export default DoctorCard;
