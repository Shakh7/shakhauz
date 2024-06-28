"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "ui/navbar-menu";
import {cn} from "@/utils/cn";
import Link from "next/link";
import {AnimatedTooltip} from "ui/animated-tooltip";
import {Sidebar} from "@/components/Sidebar";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

import {navlinks} from "@/constants/navlinks";

export function NavbarMenu() {
    const [open, setOpen] = useState(false);

    return (
        <header className="relative">
            <Sidebar open={open} setOpen={setOpen}/>
            <Navbar open={open} setOpen={setOpen}/>
        </header>
    );
}

function Navbar({className, open, setOpen}: {
    className?: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [active, setActive] = useState<string | null>(null);

    let _navlinks = navlinks

    const people = [
        {
            id: 1,
            name: "Shakhzodbek Sharipov",
            designation: "Software Developer",
            image: "https://raw.githubusercontent.com/Shakh7/assets/main/Sh.Shakhzodbek.jpg"
        },
    ]

    return (
        <div className="w-full mt-12">
            <div
                className={cn("hidden lg:grid grid-cols-5 max-w-6xl w-full mx-auto z-50 px-8 xl:px-0", className)}
            >
                <div className="col-span-3">
                    <Menu setActive={setActive}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between gap-8">
                                <div>
                                    <AnimatedTooltip items={people}/>
                                </div>
                                <div className="flex flex-col gap-0">
                                    <h1 className="dark:text-white/95 text-zinc-700 font-bold text-lg mb-0">Sh.Shakhzodbek</h1>
                                    <small className="dark:text-white/75 text-zinc-700">Software Engineer</small>
                                </div>
                            </div>
                            <ul className="hidden lg:flex items-center gap-12 justify-evenly me-8">
                                {_navlinks.map((navItem: any, idx: number) => (
                                    <li key={navItem.name}>
                                        <Link
                                            key={`link=`}
                                            href={navItem.href}
                                            className={cn(
                                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                                            )}
                                        >
                                            <span className="block sm:hidden font-semibold">{navItem.label}</span>
                                            <span
                                                className="hidden sm:block text-base font-semibold">{navItem.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Menu>
                </div>
                <div className="col-span-2 text-end h-full">
                    <div className="flex justify-end h-full items-center">
                        <button
                            className="px-8 py-5 rounded-md border border-black
                            dark:bg-transparent dark:text-white
                            dark:border-white/25 bg-white text-black text-lg
                            dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255)]
                            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)]
                            transition duration-200"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden px-8 xl:px-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-8">
                        <div>
                            <AnimatedTooltip items={people}/>
                        </div>
                        <div className="flex flex-col gap-0">
                            <h1 className="dark:text-white/95 text-zinc-700 font-bold text-lg mb-0">Sh.Shakhzodbek</h1>
                            <small className="dark:text-white/75 text-zinc-700">Software Engineer</small>
                        </div>
                    </div>
                    <div>
                        {!open && (
                            <Bars3Icon
                                onClick={() => setOpen(true)}
                                className="w-7 h-7 dark:text-white text-zinc-700 cursor-pointer"
                            />
                        )}
                        {open && (
                            <XMarkIcon
                                onClick={() => setOpen(false)}
                                className="w-7 h-7 dark:text-white text-zinc-700 cursor-pointer"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
