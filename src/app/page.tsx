"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle} from "@nextui-org/react";

import "@/styles/bg_homepage.style.css";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <div id="bg" />
      <div className="fixed left-0 w-full h-screen max-h-screen top-0 text-center align-middle bg-black/70" />
      <div className="text-white fixed left-0 w-full h-screen max-h-screen top-0 text-center align-middle font-primary">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="">
            <h1 className="md:text-6xl sm:text-5xl xs:text-4xl text-3xl first-letter:font-sevillana md:first-letter:text-7xl sm:first-letter:text-6xl xs:first-letter:text-5xl first-letter:text-4xl">
              Matcha{" "}
              <span className="font-sevillana md:first-letter:text-7xl sm:first-letter:text-6xl xs:first-letter:text-5xl first-letter:text-4xl">
                G
              </span>
              reen
              <span className="font-sevillana">T</span>e
              <span className="font-sevillana md:first-letter:text-7xl sm:first-letter:text-6xl xs:first-letter:text-5xl first-letter:text-4xl">
                a
              </span>
            </h1>
            <p className="text-xs sm:text-base md:text-lg italic md:w-1/2 text-center mx-auto mt-10 md:px-0 px-10">
              <span className="text-xl">&quot;</span>
              Matcha is finely ground powder of specially grown and processed
              green tea leaves, traditionally consumed in East Asia. The green
              tea plants used for matcha are shade-grown for three to four weeks
              before harvest; the stems and veins are removed during processing
              <span className="text-xl">&quot;</span>
            </p>
            <span className="text-xs sm:text-base md:text-lg font-semibold italic">
              # Wikipedia
            </span>
          </div>

          <div className="mt-10">
            <button
              name="about this pages"
              // onClick={() => {}}
              className="underline-offset-8 underline text-xs sm:text-base md:text-lg"
            >
              tentang ini
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
