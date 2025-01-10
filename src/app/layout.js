import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import StarsCanvas from "@/components/star/Star";

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

export const metadata = {
  title: "Vivek Kushwaha",
  description: "Vivek Kushwaha  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <StarsCanvas/>
        {children}
        {/* <Header/> */}
      </body>
    </html>
  );
}
