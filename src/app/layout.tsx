import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
