"use client";
import { useEffect, useState, useRef } from "react";
import getAllFlashcards from "@/lib/getAllFlashcards";

function Page() {
  const [flashcards, setFlashcards] = useState([]);
  const [counter, setCounter] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const key = [0, 1, 2, 3];

  // fetch all flashcard questions
  useEffect(() => {
    const fetchData = async () => {
      const reactFlashcards = await getAllFlashcards("react");
      console.log(reactFlashcards.answer);
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
      }, 250);
    } else {
      selectedElement.style.backgroundColor = "#D70040";
      setTimeout(() => {
        selectedElement.style.backgroundColor = originalBackgroundColor;
      }, 250);
    }
  };

  return (
    <div className="bg-black pt-16 fixed h-screen w-full text-white flex flex-col items-center">
      {flashcards.length > 0 ? (
        <>
          <h1 className="text-white text-2xl tracking-wider my-10">
            {flashcards[currentQuestion].description}
          </h1>
          {flashcards[currentQuestion].options.map((option, index) => (
            <div
              onClick={handleSelect}
              key={index}
              className={`text-white bg-slate-800 border text-xl border-neutral-50/30 w-8/12 text-center rounded-xl mb-6 py-8`}
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
