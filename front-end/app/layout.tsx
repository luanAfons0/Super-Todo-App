import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Todo App",
  description: "The best way to organize yourself!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
