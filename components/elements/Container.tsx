import { JSX } from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
      <div className="lg:px-24 md:px-16 px-5 2xl:px-48">{children}</div>
  );
}
