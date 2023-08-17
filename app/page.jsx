import Image from "next/image";
import Navbar from "./components/Navbar";
import Features from "./components/indexPage/Features";
import Demo from "./components/indexPage/Demo";
import Footer from "./components/Footer";
import Hero from "./components/indexPage/Hero";
import IndexMarquee from "./components/indexPage/IndexMarquee";
import Contact from "./components/indexPage/Contact";

export default function Home() {
  return (
    <main className="w-screen flex bg-black flex-col overflow-x-hidden overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      <Hero />
      <Features />
      <Demo />
      <IndexMarquee />
      <Contact />
    </main>
  );
}
