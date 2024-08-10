"use client";
import Link from "next/link";
import {SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        headerActive ? `h-[100px]` : `h-[124px]`
      } transition-all fixed max-w-[1920px] top-0 w-full bg-primary-200  z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="">
          <Image
            src={"/assets/img/logo.png"}
            width={117}
            height={55}
            alt="logo"
          />
        </Link>
        <MobileNav
          containerStyles={`${headerActive ? `top-[90px]` : `top-[124px]`}
        ${
          openNav
            ? "max-h-max pt-8 pb-10 border-t border-white/10"
            : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
        }
         transition-all w-full left-0 text-base uppercase font-medium
        flex flex-col text-center gap-8 fixed bg-primary text-white xl:hidden`}
        />
        <Nav containerStyles="flex gap-4 text-base uppercase font-medium transition-all hidden xl:flex text-white" />
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">

              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>


            {/* <Link
              href="/login"
              className="hover:text-accent transition-all text-base uppercase font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hover:text-accent transition-all text-base uppercase font-medium"
            >
              Register
            </Link> */}
          </div>
          <button
            onClick={() => setOpenNav(!openNav)}
            className="text-white xl:hidden"
          >
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
