import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        default: "Shakhzodbek Sharipov - Full-stack web developer",

        template: "%s | Shakhzodbek Sharipov - Full-stack web developer"
    },
    description: "Take a look at my personal website & get to know more about me",
    openGraph: {
        images: [
            {
                url: "https://raw.githubusercontent.com/Shakh7/assets/main/Picsart_24-06-28_19-48-25-674.png"
            }
        ]
    }
};

import {NavbarMenu} from "@/components/NavbarMenu";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NavbarMenu/>
        {children}
        </body>
        </html>
    );
}
