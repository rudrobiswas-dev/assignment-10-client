import dns from "node:dns"
dns.setServers(['1.1.1.1', '1.0.0.1']);

// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Bruno_Ace_SC } from "next/font/google";

const Bruno = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Blacksmith Athletics",
  description: "Forge Strength. Build Discipline.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Bruno.className} h-full antialiased`}>
      <body>
        <Navbar />
        <main >
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
