"use client"

import Code from "@/components/commons/code.common";
import LayoutQuote from "@/components/commons/layout_quote.common";
import NavbarCustom from "@/components/commons/navbar.common";
import { useTheme } from "next-themes";
import { darcula, gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HelloWorld() {
    const { theme } = useTheme();


    const helloWorldString: string =
        `package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
`;

    const themeCode = theme === "dark" ? gruvboxLight : darcula;

    return (
        <main>
            <NavbarCustom>
                <LayoutQuote>
                    <Code language="go" style={themeCode} showLineNumbers showInlineLineNumbers>
                        {helloWorldString}
                    </Code>

                    <div className="text-center mt-10">
                        <div className="mb-2">
                            <h1 className="font-semibold italic">Hello Word</h1>
                            <span className="text-xs text-gray-600">Bonjour le monde</span>
                        </div>
                        <p className="text-sm">
                            Menurutku sebuah frasa yang unik untuk menyambut <i>hal yang baru </i>
                            entah itu seseorang, harapan, keinginan. Ahkk... ribet manusia cuma
                            berisi rangkaian <i className="font-semibold">lifecycle</i> emosi yang
                            tidak ada ujungnya.
                        </p>

                        <p className="text-xs mt-5 text-gray-500 italic">
                            Intinya terserah kamu!
                        </p>
                    </div>
                </LayoutQuote>
            </NavbarCustom>
        </main>
    )
}