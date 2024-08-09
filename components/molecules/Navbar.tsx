"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

import Container from "../ui/Container";

import logo from "@/public/img/logo-white.png";
import logoColor from "@/public/img/logo-color.png";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const menus = [
    { title: "Homepage", path: "/" },
    { title: "Customize Your Trip", path: "/" },
    { title: "Destination", path: "/" },
    { title: "Article", path: "/" },
    { title: "Article", path: "/", type: "btn" },
  ];

  const handleScroll = () => {
    const navEl = document.querySelector("nav");

    if (window.scrollY > 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 620) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setScroll(true);
    }
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all",
        scroll && "bg-background shadow-md"
      )}
    >
      <Container className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src={scroll ? logoColor : logo}
              height={54}
              width={0}
              alt="Zamrood by Pandooin"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-2 pb-4 md:pb-0 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => {
              if (item.type !== "btn") {
                return (
                  <li
                    key={idx}
                    className={cn(
                      "font-bold p-4 text-secondary-text",
                      scroll ? "text-secondary-text" : "text-white"
                    )}
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                );
              } else {
                return (
                  <Button
                    key={idx}
                    type="outline"
                    className={
                      scroll ? "border-secondary-text text-secondary-text" : ""
                    }
                  >
                    Need Assistance
                  </Button>
                );
              }
            })}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
