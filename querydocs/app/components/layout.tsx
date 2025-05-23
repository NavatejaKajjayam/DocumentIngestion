import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  "title": "Explore Docs",
  "description": "To explore docs with Q&A",
    icons: {   // /public/favicon.ico
        // OR
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16' },
            { url: '/favicon-32x32.png', sizes: '32x32' },
        ],
        // You can also specify apple-touch-icon for iOS devices
        //apple: '/apple-touch-icon.png',
    },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
