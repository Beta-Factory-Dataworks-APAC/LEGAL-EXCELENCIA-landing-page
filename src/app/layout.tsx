import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Disclaimer from "@/components/Disclaimer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Excelencia",
  description: "LEGAL EXCELENCIA: Allied for Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Disclaimer />
      </body>
    </html>
  );
}
