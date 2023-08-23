"use client";
import Link from "next/link";
import { useState } from "react";
import "./styles.css"; // Import your CSS file for custom styles
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Page() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/lessons`,
    fetcher
  );

  const [select, setSelect] = useState();

  const handleSelect = (num) => {
    setSelect(num);
  };

  return (
    <div className="bg-black pt-28 h-screen w-full flex flex-col items-center text-white">

      {/* new card */}
      <h1 className="text-3xl mb-10">Javascript lessons</h1>
      <section
        className={`item  bg-slate-800 ${select === 0 ? "selected" : ""}`}
        onClick={() => handleSelect(0)}
      >
        <h1 className="text-2xl mb-4">Javascript foundation</h1>
        <section className="flex flex-col">
          {select === 0 && (
            <div className="flex flex-col">
              {data &&
                data.map((lesson, index) => (
                  <Link href={`/lessons/${lesson._id}`} key={index} className="mt-6">
                    {lesson.name}
                  </Link>
                ))}
            </div>
          )}
        </section>
      </section>
      <div
        className={`item bg-slate-800 ${select === 1 ? "selected" : ""}`}
        onClick={() => handleSelect(1)}
      >
        <h1 className="text-2xl">Javascript functions</h1>
        {select === 1 && (
          <section>
            <h1 className="mt-6">Lesson 1</h1>
            <h1 className="mt-6">Lesson 2</h1>
            <h1 className="mt-6">Lesson 3</h1>
          </section>
        )}
      </div>
      <div
        className={`item bg-slate-800 ${select === 2 ? "selected" : ""}`}
        onClick={() => handleSelect(2)}
      >
        <h1 className="text-2xl">Javascript methods</h1>
        {select === 2 && (
          <div>
            <h1 className="mt-6">Lesson 1</h1>
            <h1 className="mt-6">Lesson 2</h1>
            <h1 className="mt-6">Lesson 3</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
