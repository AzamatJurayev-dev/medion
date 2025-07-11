import Link from "next/link";
interface Props {
  icon?: React.ReactNode;
  menu: string;
  link?: string;
}

const DropdownItem = ({ link, icon, menu }: Props) => {
  return (
    <Link
      href={link || " "}
      className="h-[50px] w-full px-5 py-4 flex items-center gap-2 bg-white hover:bg-bg1 last:rounded-b-lg"
    >
        {icon}
        <p className="flex items-center whitespace-nowrap w-full text-gray2">
          {menu}
        </p>
    </Link>
  );
};

export default DropdownItem;
