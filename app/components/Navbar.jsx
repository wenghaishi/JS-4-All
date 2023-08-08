import Image from "next/image";
import Link from 'next/link';

function Navbar() {
  return (
    <div className="h-16 z-40 border-neutral-50/20 w-screen text-white fixed top-0 backdrop-blur-md bg-transparent drop-shadow-md border-b flex flex-row items-center justify-between px-6 md:px-20">
      <Link href="/">JS-4-all</Link>
      <Link href="/code">algo-questions</Link>
      <Link href="/flashcards">Flashcards</Link>

      <div className="flex-row md:flex hidden">
        <input
          type="text"
          className="bg-transparent  border-gray-300 border rounded-lg mr-2 focus:outline-none p-2 text-sm h-8"
        />
        <Image
          src="/search.svg"
          width={20}
          height={20}
          alt="Picture of the author"
        />
      </div>
      <div>
        <Link href="/api/auth/signin" className="mr-4">Login</Link>
        <button className="px-4 bg-red-500 py-2 rounded-lg">Get Started!</button>
      </div>
    </div>
  );
}
export default Navbar;
