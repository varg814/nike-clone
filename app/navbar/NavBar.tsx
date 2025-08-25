import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-dark.png";
import Button from "../components/atoms/button/Button";

const NavBar = () => {
  const navData = ["Men", "Women", "Kids", "Collections", "Contact"];
  return (
    <nav className="w-full">
      <div className="w-full max-w-[1440px] m-auto flex justify-between items-center px-12 py-7 max-md:px-6 max-sm:px-3">
        <Image
          src={logo}
          alt="logo image"
          style={{ width: "31px", height: "11px" }}
        ></Image>
        <ul className="flex gap-6 text-[#111111] font-medium leading-6 text-base max-md:hidden">
          {navData.map((item) => {
            return (
              <li key={item}>
                <Link href={item}>{item}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-6 text-[#111111] font-medium leading-6 text-base">
          <Button>Search</Button>
          <Button>My Cart</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
