import Image from "next/image";

export default function SingleFlashcard({flashcards, currentQuestion, handleSelect}) {
  return (
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
  );
}
