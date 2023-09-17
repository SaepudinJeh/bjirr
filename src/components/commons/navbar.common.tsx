"use client"
import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import SwitchDarkMode from "../buttons/dark_mode.button";

interface NavbarProps {
    children: React.ReactNode
}

export default function NavbarCustom({ children }: NavbarProps) {
    return (
        <>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <p className="font-bold text-inherit">Bjirr</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <SwitchDarkMode />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            { children }
        </>
    );
}
