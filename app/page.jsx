import Image from "next/image";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IndexMarquee from "./components/IndexMarquee";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <main className="w-screen flex bg-black flex-col overflow-x-hidden">
      <Hero />
      <Features />
      <Demo />
      <IndexMarquee />
      <Contact />
    </main>
  );
}
