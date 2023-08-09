"use client";
import { useState } from "react";

export default function UserSignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-black fixed w-screen text-white h-screen py-16 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-10 text-3xl px-9">Create a new account</h1>
        <form
          action=""
          onSubmit={handleSignUp}
          className="flex flex-col w-full"
        >
          <label htmlFor="" className="flex flex-col">
            Email:
            <input
              type="text"
              className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            Password:
            <input
              className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            Confirm password:
            <input
              className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            Avatar image:
            <input
              className="mt-3 focus:outline-none file:bg-gray-800 file:text-white file:rounded-lg file:cursor-pointer cursor-pointer file:py-2 file:px-6 file:mr-4 file:outline-none file:border-0"
              type="file"
            />
          </label>
          <button
            type="submit"
            className="px-32 py-2 bg-indigo-950 hover:bg-indigo-900 rounded-md border border-neutral-50/20 mt-8"
          >
            Create account
          </button>
        </form>
      </div>
      <div className="w-full fixed bottom-0 z-10 h-16 flex flex-row items-center justify-center bg-black border-t border-neutral-100/20">
        <h2 className="text-slate-400 italic">
          Building patiently... JS-4-all
        </h2>
      </div>
    </div>
  );
}
