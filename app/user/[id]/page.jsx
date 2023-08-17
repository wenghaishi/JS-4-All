"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

function UserPage() {
  const { status, data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-black pt-24 pb-10  h-screen flex flex-col sm:flex-row gap-10 px-10 text-white" >
      {showModal && (
        <div className="fixed z-50 h-screen w-screen top-0 left-0 bg-slate-800/60 flex items-center justify-center" onClick={()=>setShowModal(false)}>
          <div className="bg-slate-900 rounded-xl w-3/6 h-3/6 text-white shadow-lg flex flex-col items-center justify-evenly">
            
            <Image
              src={session.user.image}
              width={70}
              height={70}
              alt="user profile picture"
            />
            <div className="flex flex-col ml-6">
              <h1 className="text-white md:text-lg font-bold text-sm">
                {session.user.email}
              </h1>
              <h1 className="text-white md:text-lg font-bold text-sm">
                {session.user.name}
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col bg-gray-800 rounded-xl w-2/6 p-14 ">
        <div className="flex flex-row items-start bg-gray-800 ">
          <Image
            src={session.user.image}
            width={70}
            height={70}
            alt="user profile picture"
          />
          <div className="flex flex-col ml-6">
            <h1 className="text-white md:text-lg font-bold text-sm">
              {session.user.email}
            </h1>
            <h1 className="text-white md:text-lg font-bold text-sm">
              {session.user.name}
            </h1>
          </div>
        </div>
        <button
          className="bg-gray-700 mt-6 p-3 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          Edit Profile
        </button>
      </div>

      <div className="w-4/6 bg-gray-800 p-14 rounded-xl">
        <h1 className="text-white text-lg">Flashcard completions:</h1>
        <h1 className="text-white text-lg">Algo-question completions:</h1>
      </div>
    </div>
  );
}
export default UserPage;
