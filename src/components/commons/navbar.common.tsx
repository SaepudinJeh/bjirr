"use client"
import React, { useState } from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import SwitchDarkMode from "../buttons/dark_mode.button";
import { useTheme } from "next-themes";

interface NavbarProps {
    children: React.ReactNode
}

export default function NavbarCustom({ children }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    const menuItems: string[] = [
        "Verhalen",
        "Absurditeiten",
        "Uitstekend",
    ];

    return (
        <>
            <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className="font-primary">
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <p className="font-bold">Bjirrr</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-fill-inherit text-xl mr-10">Bjirrr</p>
                    </NavbarBrand>

                    { menuItems?.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link href="#" className="text-black dark:text-white">
                                { item }
                            </Link>
                        </NavbarItem>
                    )) }
                </NavbarContent>


                <NavbarContent justify="end">
                    <NavbarItem>
                        <SwitchDarkMode />
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems?.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full text-black dark:text-white"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            {children}
        </>
    );
}
