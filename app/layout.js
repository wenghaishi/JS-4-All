import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
