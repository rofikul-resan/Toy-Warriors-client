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
import React, { useContext, useState } from "react";
import PrivetSellerNavLink from "./PrivetSellerNavLink";
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";

const NavigationBar = () => {
  const user = useSelector((state) => state.User);
  console.log(user);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLink = (
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
  return (
    <div>
      <Navbar
        position="sticky"
        maxWidth="xl"
        isBordered
        className="shadow-sm sticky top-0 bg-primary-light"
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
            <p className="font-bold text-inherit text-primary-dark">
              ToyWarrior
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLink}
          {user && <PrivetSellerNavLink />}
        </NavbarContent>
        {user ? (
          <NavbarContent justify="end">
            <UserInfo
              name={user?.name}
              email={user?.email}
              image={user?.photoURL}
            />
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            {pathname === "/auth/login" ? (
              <NavbarItem className="">
                <Button
                  as={Link}
                  color="success"
                  href="/auth/sing-up"
                  variant="flat"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            ) : (
              <NavbarItem className="">
                <Button as={Link} color="primary" href="/auth/login">
                  Login
                </Button>
              </NavbarItem>
            )}
          </NavbarContent>
        )}
        <NavbarMenu>
          {navLink}
          {user && <PrivetSellerNavLink />}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
