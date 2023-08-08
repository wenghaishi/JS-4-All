import Image from "next/image";
import Link from "next/link";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

async function Navbar() {
  const session = await getServerSession(options);

  return (
    <div className="h-16 z-40 border-neutral-50/20 w-screen text-white fixed top-0 backdrop-blur-md bg-transparent drop-shadow-md border-b flex flex-row items-center justify-between px-6 md:px-10">
      <div className="flex flex-row gap-10">
        <Link href="/">JS-4-all</Link>
        <Link href="/code">algo-questions</Link>
        <Link href="/flashcards">Flashcards</Link>
      </div>

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
      {session ? (
        <Image
          src={session.user.image}
          width={40}
          height={40}
          alt="Picture of the user"
          className="rounded-full"
        />
      ) : (
        <div>
          <Link href="/api/auth/signin" className="mr-4">
            Login
          </Link>
          <button className="px-4 bg-red-500 py-2 rounded-lg">
            Get Started!
          </button>
        </div>
      )}
    </div>
  );
}
export default Navbar;
