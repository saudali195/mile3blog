import './globals.css';
import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import { Header } from "@/components/header";
import SiteFooter from "@/components/footer";

// Google font
const inter = Inter({ subsets: ['latin'] });

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
export const metadata = {
  title: 'Foodie Delight',
  description: 'Discover delicious recipes and restaurant reviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} bg-[#FAF3E3] antialiased`}
      >
        <Header />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
