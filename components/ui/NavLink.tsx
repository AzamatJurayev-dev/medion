"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavLink = ({ href, children }: MenuLinkProps) => {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
  const isActive = cleanPath === href;

  return (
    <Link
      href={href}
      className={clsx(
        "w-fit flex items-center transition-colors  text-base font-medium whitespace-nowrap",
        !isActive ? " text-text1 hover:text-primary" : "text-primary "
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
