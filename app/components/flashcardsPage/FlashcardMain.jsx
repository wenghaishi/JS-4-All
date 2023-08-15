"use client";
import { useEffect, useState, useRef } from "react";
import getAllFlashcards from "@/lib/getAllFlashcards";
import Image from "next/image";
import shuffleArray from "@/lib/shuffleArray";
import EndOfFlashcard from "./EndOfFlashcard";

function FlashcardMain({ category }) {
  const [flashcards, setFlashcards] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  // fetch all flashcard questions
  useEffect(() => {
    const fetchData = async () => {
      const jsFlashcards = await getAllFlashcards(category);
      shuffleArray(jsFlashcards);
      setFlashcards(jsFlashcards);
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
        if (currentQuestion < flashcards.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          setIsEnd(true);
        }
      }, 300);
    } else {
      selectedElement.style.backgroundColor = "#D70040";
      setTimeout(() => {
        selectedElement.style.backgroundColor = originalBackgroundColor;
      }, 300);
    }
  };

  return (
    <div className="bg-black pt-16 fixed h-screen overflow-y-scroll w-full text-white flex flex-col items-center">
      {isEnd ? (
        <EndOfFlashcard />
      ) : flashcards.length > 0 ? (
        <>
          <h1 className="text-white text-lg sm:text-2xl tracking-wider mx-4 my-10">
            {flashcards[currentQuestion].description}
          </h1>
          {flashcards[currentQuestion].image && (
            <Image
              src={`${flashcards[currentQuestion].image}`}
              width={300}
              height={300}
              className="mb-10 rounded-lg"
              alt="flashcard question"
            />
          )}

          {flashcards[currentQuestion].options.map((option, index) => (
            <div
              onClick={handleSelect}
              key={index}
              className={`text-white border text-sm sm:text-lg px-4 hover:cursor-pointer bg-slate-900 border-neutral-50/30 w-8/12 text-center rounded-xl mb-6 py-4 sm:py-8`}
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

export default FlashcardMain;
