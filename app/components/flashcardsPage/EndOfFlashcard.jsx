"use client";
import Image from "next/image";
import logo from "../../logo.svg";
import Link from "next/link";
import { useEffect } from "react";

function EndOfFlashcard({ correctNumber, wrongNumber, userId }) {
  useEffect(() => {
    const updateData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amountToAdd: correctNumber }),
        }
      );
      const response = await res.json();
      console.log(response);
    };
    updateData();
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={logo} alt="js-4-all logo" width={300} height={300} />
      <h1 className="mt-6 text-2xl sm:text-4xl">You have reached the end</h1>
      <h1 className="mt-6 text-2xl sm:text-4xl">
        Wrong attempts: <span className="text-red-500">{wrongNumber}</span>
      </h1>
      <h1 className="mt-6 text-2xl sm:text-4xl">
        Correct attempts:{" "}
        <span className="text-green-500">{correctNumber}</span>
      </h1>
      <Link href="/flashcards" className="mt-4 underline italic">
        Back to flashcards
      </Link>
    </div>
  );
}
export default EndOfFlashcard;
