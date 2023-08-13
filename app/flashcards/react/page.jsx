"use client";
import { useEffect, useState, useRef } from "react";
import getAllFlashcards from "@/lib/getAllFlashcards";
import Image from "next/image";
import shuffleArray from "@/lib/shuffleArray";

function Page() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // fetch all flashcard questions
  useEffect(() => {
    const fetchData = async () => {
      const reactFlashcards = await getAllFlashcards("react");
      shuffleArray(reactFlashcards);
      setFlashcards(reactFlashcards);
    };
    fetchData();
  }, []);

  // handle user choice, flash red if wrong, green if correct
  const handleSelect = (event) => {
    const originalBackgroundColor = event.currentTarget.style.backgroundColor;
    const selectedElement = event.currentTarget;

    if (
      selectedElement.innerHTML ===
      flashcards[currentQuestion].options[flashcards[currentQuestion].answer]
    ) {
      selectedElement.style.backgroundColor = "#009E60";
      setTimeout(() => {
        selectedElement.style.backgroundColor = originalBackgroundColor;
        setCurrentQuestion((prev) => prev + 1);
      }, 300);
    } else {
      selectedElement.style.backgroundColor = "#D70040";
      setTimeout(() => {
        selectedElement.style.backgroundColor = originalBackgroundColor;
      }, 300);
    }
  };

  return (
    <div className="bg-black pt-16 fixed h-screen w-full text-white flex flex-col items-center">
      {flashcards.length > 0 ? (
        <>
          <h1 className="text-white text-2xl tracking-wide my-10 lg:mx-16 mx-10">
            {flashcards[currentQuestion].description}
          </h1>
          {flashcards[currentQuestion].image && (
            <Image
              src="https://i.imgur.com/ydm0eD8.png"
              width={300}
              height={300}
              className="mb-10"
              alt="hi"
            ></Image>
          )}

          {flashcards[currentQuestion].options.map((option, index) => (
            <div
              onClick={handleSelect}
              key={index}
              className={`text-white hover:cursor-pointer bg-slate-900 border text-xl border-neutral-50/30 w-8/12 text-center rounded-xl mb-6 py-8`}
            >
              {option}
            </div>
          ))}
        </>
      ) : (
        <p className="text-2xl mt-60">Loading flashcards...</p>
      )}
    </div>
  );
}

export default Page;
