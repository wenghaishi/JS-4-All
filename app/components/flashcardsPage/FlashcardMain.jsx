"use client";
import { useEffect, useState, useRef } from "react";
import getAllFlashcards from "@/lib/getAllFlashcards";
import Image from "next/image";
import shuffleArray from "@/lib/shuffleArray";
import EndOfFlashcard from "./EndOfFlashcard";
import { useSession } from "next-auth/react";
import SingleFlashcard from "./SingleFlashcard";


function FlashcardMain({ category, difficulty }) {
  const { data: session } = useSession();
  const [flashcards, setFlashcards] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [wrongNumber, setWrongNumber] = useState(0);
  const [correctNumber, setCorrectNumber] = useState(0);

  // fetch all flashcard questions
  useEffect(() => {
    const fetchData = async () => {
      const rawFlashcards = await getAllFlashcards(category);
      const jsFlashcards = rawFlashcards.filter(question => question.difficulty === difficulty)
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
      setCorrectNumber((prev) => prev + 1);
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
      setWrongNumber((prev) => prev + 1);
      setTimeout(() => {
        selectedElement.style.backgroundColor = originalBackgroundColor;
      }, 300);
    }
  };

  return (
    <div className="bg-black pt-16 pb-20 sm:pb-1 fixed h-screen overflow-y-scroll w-full text-white flex flex-col items-center">
      {isEnd ? (
        <EndOfFlashcard
          correctNumber={correctNumber}
          wrongNumber={wrongNumber}
          userId={session.user._id}
        />
      ) : flashcards.length > 0 ? (
        <SingleFlashcard  flashcards={flashcards} currentQuestion={currentQuestion} handleSelect={handleSelect}/>
      ) : (
        <p className="text-2xl mt-60">Loading flashcards...</p>
      )}
    </div>
  );
}

export default FlashcardMain;
