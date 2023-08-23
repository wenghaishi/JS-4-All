"use client";

import LoadingSpinner from "@/lib/LoadingSpinner";
import Image from "next/image";
import { useState } from "react";

export default function UserEditModal({ session, setShowModal }) {
  const [email, setEmail] = useState(session.user.email);
  const [name, setName] = useState(session.user.name);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/${session.user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      }
    );
    const response = await res.json();
    console.log(response);
    setIsLoading(false);
    setShowModal(false);
  };

  return (
    <>
      <div
        className="fixed h-screen w-screen z-40 top-0 left-0 bg-slate-800/60"
        onClick={() => setShowModal(false)}
      />
      <div className="bg-slate-900 -translate-x-1/2 p-8 left-1/2 top-1/2 -translate-y-1/2 fixed rounded-xl w-3/6 h-4/6 text-white shadow-lg z-50 flex flex-col items-center justify-evenly">
        {isLoading ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>
            <Image
              src={session.user.image}
              width={70}
              height={70}
              alt="user profile picture"
            />
            <div className="flex flex-col gap-10 w-full items-center">
              <input
                type="text"
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none w-4/6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none w-4/6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex flex-row items-center justify-center gap-16">
                <button
                  className="bg-indigo-900 hover:bg-indigo-800 rounded-md border border-neutral-50/20 px-10 md:px-16 py-2"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="bg-slate-800 hover:bg-slate-700 rounded-md border border-neutral-50/20 px-10 md:px-16 py-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
