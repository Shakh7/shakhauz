"use client";
import {navlinks} from "@/constants/navlinks";
import {Navlink} from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useEffect, useRef} from "react";
import {twMerge} from "tailwind-merge";
import {Heading} from "./Heading";
import {socials} from "@/constants/socials";
import {Badge} from "./Badge";
import {AnimatePresence, motion} from "framer-motion";

import {downloadCV} from "@/components/DownloadCVButton";

export const Sidebar = ({
                            open,
                            setOpen,
                        }: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpen]);

    return (
        <div className="lg:hidden">
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={ref}
                        initial={{x: -200}}
                        animate={{x: 0}}
                        transition={{duration: 0.2, ease: "linear"}}
                        exit={{x: -200}}
                        onClick={() => downloadCV()}
                        className="px-6 z-[100] overflow-scroll border-r border-r-gray-700 py-10 pb-20 sm:pb-10 dark:bg-gray-950 bg-neutral-100 max-w-[18rem] w-[24rem] fixed top-0 h-screen left-0 flex flex-col justify-between"
                    >
                        <div>
                            <SidebarHeader/>
                            <Navigation setOpen={setOpen}/>
                        </div>
                        <Badge href="#" text="Download Resume"/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Navigation = ({
                               setOpen,
                           }: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <div className="flex flex-col space-y-1 my-10 relative z-[100]">
            {navlinks.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={twMerge(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
                        isActive(link.href) && "dark:bg-gray-800 bg-white shadow-lg text-primary"
                    )}
                >
                    <span>{link.label}</span>
                </Link>
            ))}

            <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
                Socials
            </Heading>
            {socials.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={twMerge(
                        "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
                    )}
                >
                    <span>{link.label}</span>
                </Link>
            ))}
        </div>
    );
};

const SidebarHeader = () => {
    return (
        <div className="flex space-x-4">
            <Image
                src="https://raw.githubusercontent.com/Shakh7/assets/main/Sh.Shakhzodbek.jpg"
                alt="Avatar"
                height="40"
                width="40"
                className="h-10 w-10 object-cover object-top rounded-full flex-shrink-0"
            />
            <div className="flex text-sm flex-col">
                <p className="font-bold dark:text-white/95 text-zinc-700">Shakhzodbek Sharipov</p>
                <p className="font-light dark:text-white/75 text-zinc-700">Software Engineer</p>
            </div>
        </div>
    );
};
