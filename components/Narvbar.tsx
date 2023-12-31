"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Narvbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const togglingMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          style={{ width: "auto", height: "auto" }}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden ">
        <Button
          type="button"
          title="Se connecter"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        onClick={togglingMenu}
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />

      {toggleMenu && (
        <ul className="bg-green-500 absolute w-full top-[70px] right-0 px-5 py-5 transition-all">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className=" text-white flexCenter cursor-pointer transition-all uppercase"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Narvbar;
