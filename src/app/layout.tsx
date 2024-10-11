import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/nav/mainHeader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fileforge | Forge the Perfect File with Our Smart Tools",
  description:
    "Unlock the potential of your files with FileForge. Enjoy fast compression, flexible PDF conversion, and image resizing tools designed for efficiency and ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased transition-colors duration-300 ease-in-out`}
      >
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
