"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  href: string;
  children?: React.ReactNode;
}

const MenuLink = ({ href, children }: MenuLinkProps) => {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
  const isActive = cleanPath === href;

  return (
    <Link
      href={href}
      className={clsx(
        "w-full py-[14px] flex items-center transition-colors rounded-md px-3 text-base font-medium",
        !isActive ? "bg-white text-text1 hover:bg-bg4" : "bg-primary text-white"
      )}
    >
      {children}
    </Link>
  );
};

export default MenuLink;
