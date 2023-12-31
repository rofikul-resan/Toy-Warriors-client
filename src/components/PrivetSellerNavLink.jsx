import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PrivetSellerNavLink = () => {
  const pathname = usePathname();
  return (
    <>
      <NavbarItem isActive={pathname.includes("/my-toy")}>
        <Link href="/my-toy">My Toy</Link>
      </NavbarItem>
      <NavbarItem isActive={pathname.includes("/add-toy")}>
        <Link href="/add-toy">Add Toy</Link>
      </NavbarItem>
    </>
  );
};

export default PrivetSellerNavLink;
