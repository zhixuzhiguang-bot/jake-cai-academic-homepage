import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const cjk = Noto_Sans_SC({ variable: "--font-cjk", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = { title: "Jake Yizhou Cai — Academic Homepage", description: "Yizhou (Jake) Cai is an Assistant Professor in Statistics at Texas State University working on scalable methods, high dimensional statistics and interdisciplinary data science.", other: { "codex-preview": "development" }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${sans.variable} ${mono.variable} ${cjk.variable}`}>{children}</body></html>; }
