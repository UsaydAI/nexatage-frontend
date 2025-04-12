"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex flex-col lg:flex-row sm:gap-2 md:gap-3 lg:justify-between content-center mb-[108px] font-normal text-base">
      <div>
        <Image
          src="/images/instagram.svg"
          width={24}
          height={24}
          alt="instagram"
        />
      </div>
      <button
        className="absolute top-0 right-0 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <ul
        className={`flex ${
          isOpen ? "flex-col gap-x-24" : "hidden"
        } lg:flex lg:flex-row gap-8 px-0 py-3 content-center`}
      >
        <li>
          <Link href="/">
            <span className={pathname === "/" ? "text-blue-500" : "text-white"}>
              Home
            </span>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <span
              className={pathname === "/about" ? "text-blue-500" : "text-white"}
            >
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <span
              className={
                pathname === "/services" ? "text-blue-500" : "text-gray-500"
              }
            >
              Services
            </span>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <span
              className={
                pathname === "/portfolio" ? "text-blue-500" : "text-white"
              }
            >
              Portfolio
            </span>
          </Link>
        </li>
        <li>
          <Link href="/process">
            <span
              className={
                pathname === "/process"
                  ? "text-blue-500 p-3 rounded"
                  : "text-white"
              }
            >
              Process
            </span>
          </Link>
        </li>
      </ul>
      <div className={`${isOpen ? "sm:block" : "sm:hidden"} lg:block`}>
        <Link href="/contact">
          <Button buttonText="Contact Us" />
        </Link>
      </div>
    </nav>
  );
}
