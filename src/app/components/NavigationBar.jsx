"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLink = (
    <>
      <NavbarItem isActive={pathname === "/"}>
        <Link href="#">Home</Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === "/all-toy"}>
        <Link href="/all-toy">All Toy</Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === "/blogs"}>
        <Link href="/blogs">Blogs</Link>
      </NavbarItem>
    </>
  );
  return (
    <div>
      <Navbar
        isBlurred
        maxWidth="xl"
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Image
              src={"/logo-ToyWarriors.png"}
              alt="logo"
              height={100}
              width={100}
              className="h-10 w-auto"
              priority
            />
            <p className="font-bold text-inherit">ToyWarrior</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLink}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>{navLink}</NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
