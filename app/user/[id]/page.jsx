"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function UserPage() {
  const { status, data: session } = useSession();

  return (
    <div className="bg-black pt-24 pb-10 h-screen flex flex-col sm:flex-row gap-10  px-10 text-white">
      <div className="flex flex-row items-start bg-gray-800 p-14 rounded-xl w-2/6">
        <Image
          src={session.user.image}
          width={70}
          height={70}
          alt="user profile picture"
        />
        <div className="flex flex-col ml-6">
          <h1 className="text-white md:text-lg font-bold text-sm">{session.user.email}</h1>
          <h1 className="text-white md:text-lg font-bold text-sm">{session.user.name}</h1>
        </div>
      </div>

      <div className="w-4/6 bg-gray-800 p-14 rounded-xl">
        <h1 className="text-white text-lg">Flashcard completions:</h1>
        <h1 className="text-white text-lg">Algo-question completions:</h1>
      </div>
    </div>
  );
}
export default UserPage;
