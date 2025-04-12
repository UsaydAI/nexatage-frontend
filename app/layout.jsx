import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import SocialMedia from "../components/ui/SocialMedia";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="px-[64px] py-[32px] bg-[black] text-white">
        <Navbar />
        <div className="lg:px-[128px] sm:p-[36px] md:px-[36px] lg:pt-7">
          <SocialMedia />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
