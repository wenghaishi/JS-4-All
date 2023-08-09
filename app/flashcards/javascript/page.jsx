"use client";
import { useEffect, useState, useRef } from "react";
import getAllFlashcards from "@/lib/getAllFlashcards";

function Page() {
  const [flashcards, setFlashcards] = useState([]);
  const key = [0, 1, 2, 3];

  useEffect(() => {
    const fetchData = async () => {
      const jsFlashcards = await getAllFlashcards();
      console.log(jsFlashcards.answer);
      setFlashcards(jsFlashcards);
    };
    fetchData();
  }, []);

  const handleSelect = (event) => {
    if (
      event.currentTarget.innerHTML ==
      flashcards[0].options[flashcards[0].answer]
    ) {
      event.currentTarget.style.backgroundColor = "#009E60";
    } else {
      event.currentTarget.style.backgroundColor = "#D70040	";
    }
  };

  return (
    <div className="bg-black pt-16 fixed h-screen w-full text-white flex flex-col items-center">
      {flashcards.length > 0 ? (
        <>
          <h1 className="text-white text-xl tracking-wider my-10">
            {flashcards[0].description}
          </h1>
          {flashcards[0].options.map((option, index) => (
            <div
              onClick={handleSelect}
              key={index}
              className={`text-white border text-xl border-neutral-50/30 w-8/12 text-center rounded-xl mb-10 py-10`}
            >
              {option}
            </div>
          ))}
        </>
      ) : (
        <p className="text-2xl">Loading flashcards...</p>
      )}
    </div>
  );
}

export default Page;
