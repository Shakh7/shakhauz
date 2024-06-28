import React from "react";

import {twMerge} from "tailwind-merge";

export const Heading = ({
                            className,
                            children,
                            as: Tag = "h1",
                        }: {
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
}) => {
    return (
        <h1
            className={twMerge(
                "text-base text-dark md:text-xl lg:text-4xl font-semibold bg-clip-text" +
                " bg-gradient-to-r from-primary to-secondary",
                className
            )}
        >
            {children}
        </h1>
    );
};