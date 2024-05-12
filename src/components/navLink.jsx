"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 hover:text-fuchsia-700 transition-all ${
        pathName === link.url &&
        "bg-fuchsia-700 text-white hover:bg-fuchsia-600 hover:text-zinc-50 transition-all"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
