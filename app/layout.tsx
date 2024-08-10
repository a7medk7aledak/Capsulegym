import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";

import Loader from "@/components/Loader";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--front-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--front-roboto",
});

export const metadata: Metadata = {
  title: "Capsola gym",
  description: "gym inside Capsola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-gray-200">
        <body
          className={`${oswald.variable}${roboto.variable}
      w-full max-w-[1920px] mx-auto bg-white
      `}
        >
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Layout>{children}</Layout>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
