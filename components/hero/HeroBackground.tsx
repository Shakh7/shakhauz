"use client";
import React from "react";
import './index.css';
// import {GlobeDemo} from "@/components/Globe";

export function HeroBackground() {
    return (
        <div
            className="relative max-w-6xl mx-auto flex items-start justify-center flex-col text-center px-8 xl:px-0 mt-14 lg:mt-24">

            <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold mb-10 text-start z-50
                dark:text-white text-zinc-700 leading-snug md:leading-tight xl:leading-tight"
            >
                I'm a software engineer that rarely
                <span className="text-gradient"> writes code.</span>
            </h1>

            <p className="leading-loose 2xl:leading-loose font-regular text-start text-sm
                2xl:text-lg text-zinc-500 tracking-wide max-w-3xl z-50
                2xl:max-w-4xl antialiased">
                Meet Shakhzodbek Sharipov, the self-proclaimed code wizard who can turn caffeine into beautiful websites. His
                passion for building clean and functional designs is only rivaled by his passion for finding the perfect
                GIF to express his excitement.
            </p>

            {/*<div className="hidden lg:block absolute top-100 -right-5 min-w-[30rem] z-1">*/}
            {/*    <GlobeDemo />*/}
            {/*</div>*/}
        </div>
    );
}
