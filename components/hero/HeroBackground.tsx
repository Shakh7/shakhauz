"use client";
import React from "react";
import './index.css';
import {Spotlight} from "ui/Spotlight";
import {LinkPreview} from "@/components/ui/link-preview";
import {TextGenerateEffect} from "ui/text-generate-effect";
import Image from "next/image";
import {motion, MotionValue} from "framer-motion";

// import {GlobeDemo} from "@/components/Globe";

export function HeroBackground() {

    const about_me = `Meet Shakhzodbek Sharipov, the self-proclaimed code wizard who can turn caffeine into beautiful websites. His passion for building clean and functional designs is only rivaled by his passion for finding the perfect GIF to express his excitement.`;

    const Card = ({
                      children,
                  }: {
        children: React.ReactNode;
    }) => {
        return (
            <motion.div
                style={{
                    boxShadow:
                        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
                }}
                className="w-full mt-12 mx-auto
                h-[30rem] md:h-[45rem]
                border-4 border-[#6C6C6C]
                p-2 md:p-6
                bg-[#222222] rounded-[30px] shadow-2xl"
            >
                <div
                    className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
                    {children}
                </div>
            </motion.div>
        );
    }

    return (

        <div
            className="h-[36rem] xl:h-[50rem] w-full
            dark:bg-black bg-white
            dark:bg-grid-white/[0.09] bg-grid-black/[0.09] relative flex items-start mt-0 sm:pt-24">
            {/* Radial gradient for the container to give a faded look */}

            <div
                className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
                bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

            <div
                className="relative max-w-6xl mx-auto flex items-start justify-center flex-col text-center px-8 xl:px-0 mt-0 xl:mt-14">


                <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold text-start z-50
                dark:text-white text-zinc-700 leading-snug md:leading-tight xl:leading-tight mt-24 sm:mt-0 mb-10"
                >
                    I'm a software engineer that rarely
                    <span className="text-gradient"> writes code.</span>
                </h1>

                <TextGenerateEffect
                    className="flex flex-wrap gap-1 leading-loose 2xl:leading-loose font-regular text-sm 2xl:text-lg dark:text-white/75 text-zinc-700 max-w-3xl 2xl:max-w-4xl
                    antialiased"
                    words={about_me}
                />

                <p
                    className="leading-loose 2xl:leading-loose font-regular text-start text-sm
                2xl:text-lg dark:text-white/75 text-zinc-700 tracking-wide max-w-3xl
                2xl:max-w-4xl antialiased my-10">
                    Building
                    <LinkPreview url="https://shakha.uz"
                                 className="ms-2 font-bold bg-clip-text text-transparent
                             text-gradient" height={150} width={220}
                    >
                        Shakha
                    </LinkPreview>{" "}
                    and leading the development of
                    <LinkPreview url="https://interrail.uz/"
                                 className="ms-2 font-bold bg-clip-text text-transparent
                             text-gradient" height={150} width={220}
                    >
                        InterRail CA
                    </LinkPreview>{" "}
                </p>

                <Card>
                    <Image src={'https://raw.githubusercontent.com/Shakh7/assets/main/HeroShowcase.jpg'}
                           alt={'Automation System Showcase'}
                           height={720}
                           width={1400}
                           className="mx-auto rounded-2xl object-cover h-full object-left-top"
                           draggable={false}
                    >
                    </Image>
                </Card>

            </div>

        </div>

    );
}
