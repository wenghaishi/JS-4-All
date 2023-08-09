import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

const roboto = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Js-4-all",
  description: "Javascript for everyone!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
