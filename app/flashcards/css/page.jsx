import Link from "next/link";
function Page() {
  const difficulty = ["easy", "medium", "hard"];
  return (
    <div className="h-screen pt-16 w-full text-white bg-black flex flex-col items-center gap-8">
      <h1 className="text-4xl mt-16">Choose your diffiulty</h1>
      {difficulty.map((difficulty, index) => (
        <Link
          key={index}
          href={`/flashcards/css/${difficulty}`}
          className="w-11/12 py-10 border border-neutral-50/30 text-center text-3xl rounded-xl feature-card4"
        >
          {difficulty}
        </Link>
      ))}
    </div>
  );
}

export default Page;
