"use client"

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLogo from "@/assets/Logo.png"
import NavLink from "./NavLink";

const Navbar = () => {

    const navList = <>
        <li>
            <NavLink href="/" className="font-medium">Home</NavLink>
        </li>
        <li>
            <NavLink href="/allbooks" className="font-medium">
                All Books
            </NavLink>
        </li>
        <li>
            <NavLink href="/profile" className="font-medium">My Profile</NavLink>
        </li>
    </>

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav className="containter mx-auto sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <Link href={"/"}>
                            <div className="items-center gap-3 hidden md:flex">
                                <Image
                                    src={NavLogo}
                                    alt="Navbar Logo"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Link>
                    </div>
                    <ul className="hidden items-center gap-4 md:flex">
                        {navList}
                    </ul>
                    <div>
                        <div className="hidden items-center gap-4 md:flex">
                            <Button className={"rounded-2xl"}>Login</Button>
                        </div>

                        <Link href={"/"}>
                            <div className="items-center gap-3 flex md:hidden">
                                <Image
                                    src={NavLogo}
                                    alt="Navbar Logo"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Link>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {navList}
                            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                                <Button className="w-full">Login</Button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;