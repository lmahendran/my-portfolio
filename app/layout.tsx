import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import Background from "@/components/Background";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
});

// Tron movie-logo style font, used for the Hero name
const tr2n = localFont({
    src: "./fonts/Tr2n.ttf",
    variable: "--font-tr2n",
});

export const metadata: Metadata = {
    title: "Logesh Mahendran",
    description: "A neat portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${tr2n.variable} h-full antialiased motion-safe:scroll-smooth`}
        >
            <body className="flex min-h-full flex-col font-sans">
                <Background />
                {children}
            </body>
        </html>
    );
}
