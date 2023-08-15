"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { hash } from "bcryptjs";

export default function UserSignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password != confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      setIsLoading(false);
    }
    if (password === undefined || password.length < 6) {
      setPasswordError("Minimum 6 characters");
      setIsLoading(false);
    }
    if (emailRegex.test(email) === false) {
      setEmailError("Invalid email");
      setIsLoading(false);
    }
    if (isLoading === false) return;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const user = await res.json();
    console.log(user);

    setIsLoading(false);

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };
  return (
    <>
      {/* loading spinner */}
      {isLoading && (
        <div className="spinner-container z-40 fixed bg-slate-900/50 h-screen w-screen top-0 left-0">
          <div className="loading-spinner"></div>
        </div>
      )}

      <div className="bg-black fixed w-screen text-white h-screen py-16 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-10 text-3xl px-9">Create a new account</h1>
          <form
            action=""
            onSubmit={handleSignUp}
            className="flex flex-col w-full"
          >
            {/* email */}
            <label htmlFor="" className="flex flex-col">
              Email:
              <input
                type="text"
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && <p className="text-red-500 mb-2">{emailError}</p>}
            </label>

            {/* name */}
            <label htmlFor="" className="flex flex-col">
              Name:
              <input
                type="text"
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {emailError && <p className="text-red-500 mb-2">{emailError}</p>}
            </label>

            {/* password */}
            <label htmlFor="" className="flex flex-col">
              Password:
              <input
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <p className="text-red-500 mb-2">{passwordError}</p>
              )}
            </label>

            {/* confirm password */}
            <label htmlFor="" className="flex flex-col">
              Confirm password:
              <input
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError("");
                }}
              />
              {confirmPasswordError && (
                <p className="text-red-500 mb-2">{confirmPasswordError}</p>
              )}
            </label>

            {/* avatar image */}
            {/* <label htmlFor="" className="flex flex-col">
            Avatar image:
            <input
              className="mt-3 focus:outline-none file:bg-gray-800 file:text-white file:rounded-lg file:cursor-pointer cursor-pointer file:py-2 file:px-6 file:mr-4 file:outline-none file:border-0"
              type="file"
            />
          </label> */}

            <button
              type="submit"
              className="px-32 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md border border-neutral-50/20 mt-8"
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
    </>
  );
}
