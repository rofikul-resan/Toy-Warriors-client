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
import { useSelector } from "react-redux";
import UserInfo from "./UserInfo";
import PrivetSellerNavLink from "./navlink/PrivetSellerNavLink";
import NavLinkInit from "./navlink/NavlinkInit";

const NavigationBar = () => {
  const user = useSelector((state) => state.User);
  console.log(user);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-sm  bg-primary-light"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} className="flex items-center">
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
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLinkInit />
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
        <NavLinkInit />
        {user && <PrivetSellerNavLink />}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
