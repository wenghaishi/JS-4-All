"use client";
import { useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";

function UserSignin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, settIsLoading] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    settIsLoading(true);
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });

    settIsLoading(false)
  };

  const signUpMsg = "Don't have an account? Sign up";
  const googleSignin = () => {
    signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}` });
  };

  const githubSignin = () => {
    signIn("github", { callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}` });
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
          <h1 className="mb-14 text-3xl">Sign in to your account</h1>
          <button
            onClick={googleSignin}
            className="px-32 mb-6 rounded-lg bg-gray-900 py-2 border border-neutral-50/30"
          >
            Sign in with Google
          </button>
          <button
            onClick={githubSignin}
            className="px-32 mb-7 rounded-lg bg-gray-900 py-2 border border-neutral-50/30"
          >
            Sign in with Github
          </button>
          <div className="line border-neutral-50/30">
            <span className="line-text">Or continue with</span>
          </div>

          <form
            action=""
            onSubmit={handleLogIn}
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
                type="password"
                className="bg-gray-800 my-3 p-2 rounded-md h-10 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button className="text-sm mt-2 text-gray-400">
              Forgot your password?
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-32 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md border border-neutral-50/20 mt-4`}
            >
              Sign in
            </button>
            <Link
              href="/auth/signUp"
              className="text-sm mt-4 text-center text-gray-400"
            >
              {signUpMsg}
            </Link>
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
export default UserSignin;
