import Image from "next/image";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-screen flex flex-col overflow-x-hidden">
      <Hero />
      <Features />
      <Demo />
      <Footer />
    </main>
  );
}
