import clsx from "clsx";
import { JSX } from "react";

export default function Container({
  children,
  classname,
}: {
    children: React.ReactNode,
  classname?:string
}): JSX.Element {
  return (
    <div className={clsx(classname, "lg:px-24 md:px-16 px-5 2xl:px-48")}>{children}</div>
  );
}
