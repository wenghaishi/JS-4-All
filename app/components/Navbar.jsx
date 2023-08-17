"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { status, data: session } = useSession();
  const [toggleModal, setToggleModal] = useState(false);
  if (session) {
    console.log(session)
  }
  const handleToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <div className="h-16 z-30 border-neutral-50/20 w-screen text-white fixed top-0 backdrop-blur-md bg-transparent drop-shadow-md border-b flex flex-row items-center justify-between px-6 md:px-10">
      <div className="flex flex-row gap-8">
        <Link href="/" className="text-xs sm:text-lg flex items-center">JS-4-all</Link>
        <Link href="/code" className="text-xs sm:text-lg items-center hidden sm:flex">Algo-questions</Link>
        <Link href="/flashcards" className="text-xs sm:text-lg items-center hidden sm:flex">Flashcards</Link>
        <Link href="/lessons" className="text-xs sm:text-lg items-center hidden sm:flex">Lessons</Link>

      </div>

      <div className="flex-row lg:flex hidden">
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
        <>
          <Image
            onClick={handleToggleModal}
            src={session.user.image}
            width={40}
            height={40}
            alt="Picture of the user"
            className="rounded-full cursor-pointer"
          />
          {toggleModal && (
            <>
              <div className="fixed bg-gray-700 right-14 top-16 z-10 rounded-lg p-6 flex flex-col" onClick={handleToggleModal}>
                <h1 className="border-b border-neutral-50/50 pb-2">
                  <Link href={`/user/${session.user.email}`}>{session.user.email}</Link>
                </h1>
                <button className="text-left mt-2" onClick={() => signOut({callbackUrl:"/"})}>
                  Logout
                </button>
              </div>
              <div
                className="fixed w-screen h-screen top-0 right-0 bg-transparent"
                onClick={handleToggleModal}
              ></div>
            </>
          )}
        </>
      ) : (
        <div>
          <Link href="/auth/signIn" className="mr-4 text-xs sm:text-lg">
            Sign in
          </Link>

          <Link href="/auth/signUp" className="px-4 bg-red-500 py-2 rounded-lg text-xs sm:text-lg">
            Get Started!
          </Link>
        </div>
      )}
    </div>
  );
}
export default Navbar;
