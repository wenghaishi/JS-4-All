"use client";
import { useState } from "react";
import "./styles.css"; // Import your CSS file for custom styles

function Page() {
  const [select, setSelect] = useState();

  const handleSelect = (num) => {
    setSelect(num);
  };

  return (
    <div className="bg-black pt-28 h-screen w-full flex flex-col items-center text-white">
      <h1 className="text-3xl mb-10">Javascript lessons</h1>
      <div
        className={`item  bg-slate-800 ${select === 0 ? "selected" : ""}`}
        onClick={() => handleSelect(0)}
      >
        <h1 className="text-2xl">Javascript foundation</h1>
        {select === 0 && (
          <div>
            <h1 className="mt-6">Lesson 1</h1>
            <h1 className="mt-6">Lesson 2</h1>
            <h1 className="mt-6">Lesson 3</h1>
          </div>
        )}
      </div>
      <div
        className={`item bg-slate-800 ${select === 1 ? "selected" : ""}`}
        onClick={() => handleSelect(1)}
      >
        <h1 className="text-2xl">Javascript functions</h1>
        {select === 1 && (
          <div>
            <h1 className="mt-6">Lesson 1</h1>
            <h1 className="mt-6">Lesson 2</h1>
            <h1 className="mt-6">Lesson 3</h1>
          </div>
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
