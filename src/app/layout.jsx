import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

export const poppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppinsFont.variable}`}>
      <body className="font-poppins">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
