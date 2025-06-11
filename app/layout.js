import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dutch Your Way",
  description: "Dutch lessons for everyone",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body>{children}</body>
      </html>
      <Footer />
    </>
  );
}
