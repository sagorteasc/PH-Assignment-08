import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import Footer from "@/components/Home/Footer";
import { ToastContainer } from "react-toastify";

const interFont = Inter({
  variable: "--inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "ReadHub",
  description: "A modern web app for browsing, discovering, and borrowing books online.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-[#f3f3f3] ${interFont.className}`}>
        <Navbar />
        <main className="bg-[#f3f3f3] mt-16">
          <ToastContainer />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
