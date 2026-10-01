import { Geist, Geist_Mono, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplaySC = Playfair_Display_SC({
  variable: "--font-playfair-display-sc",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "The Crypt",
  description: "AND THERE WAS NOTHING BEYOND",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplaySC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Background texture */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.5) 1px,
              transparent 1px
            )
          `,
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative z-10 flex min-h-full flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
