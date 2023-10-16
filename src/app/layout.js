import Providers from "@/components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToyWarriors",
  description: "Develop by Rofikul Islam Resan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1400px] mx-auto`}>
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
