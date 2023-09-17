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
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const bgNavbar = theme === "light" ? "bg-white" : "bg-black";
    const colorText = theme === "light" ? "text-white" : "text-black"; 


    return (
        <>
            <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} className={`${bgNavbar} font-primary`}>
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        {/* <AcmeLogo /> */}
                        <p className="font-bold">Bjirrr</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className={`${bgNavbar} hidden sm:flex gap-4`} justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-fill-inherit text-xl mr-10">Bjirrr</p>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link href="#" className="light:text-black dark:text-white">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" className="light:text-black dark:text-white">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="light:text-black dark:text-white">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>


                <NavbarContent justify="end">
                    <NavbarItem>
                        <SwitchDarkMode />
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
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
