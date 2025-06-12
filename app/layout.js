import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dutch Your Way",
    template: "%s | Dutch Your Way",
  },
  description: "Dutch lessons for everyone",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      <Footer />
    </>
  );
}
