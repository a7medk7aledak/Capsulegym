import type { Metadata } from "next";
import { Roboto ,Oswald } from "next/font/google";
import "./globals.css";
//components 
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { AppProps } from "next/app";
import Layout from "../components/Layout";

const oswald = Oswald({ subsets: ["latin"],
  weight :['200','300','400','500','600','700'],
  variable : '--front-oswald',
});

const roboto = Roboto({ subsets: ["latin"],
  weight :['100','300','400','500','700','900'],
  variable : '--front-roboto',
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
    <html lang="en" className="bg-gray-200">
      <body
        className={`${oswald.variable}${roboto.variable}
      w-full max-w-[1920px] mx-auto bg-white
      `}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
