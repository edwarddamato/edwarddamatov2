"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

import { Link } from "@nextui-org/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Nav = () => {
  const pathname = usePathname();

  return (
    <Navbar className="print:hidden">
      <NavbarBrand>
        <Link className="font-bold text-inherit" href="/">
          edwarddamato.com
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="https://github.com/edwarddamato" target="_blank">
            View on Github
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/cv"}>
          <Link href="/cv">Curriculum Vitae</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
