import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        default: "Shakhzodbek Sharipov - Software Engineer",

        template: "%s | Shakhzodbek Sharipov"
    },
    description: "Visit my personal portfolio to learn more about me",
    openGraph: {
        images: [
            {
                url: "https://raw.githubusercontent.com/Shakh7/assets/main/Sh.Shakhzodbek.jpg"
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
