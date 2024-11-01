import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinkInit = () => {
  const pathname = usePathname();
  return (
    <>
      <NavbarItem isActive={pathname === "/"}>
        <Link href="/">Home</Link>
      </NavbarItem>
      <NavbarItem isActive={pathname.includes("/all-toy")}>
        <Link href="/all-toy">All Toy</Link>
      </NavbarItem>
      <NavbarItem isActive={pathname.includes("/blogs")}>
        <Link href="/blogs">Blogs</Link>
      </NavbarItem>
    </>
  );
};

export default NavLinkInit;
