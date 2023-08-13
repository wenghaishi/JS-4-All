import getAllQuestions from "@/lib/getAllQuestions";
import QuestionsCategory from "../components/QuestionsCategory";
import Link from "next/link";

export default async function Code() {
  const questions = await getAllQuestions();

  return (
    <div className="bg-black pt-16 h-screen w-full flex flex-col items-center">
      <QuestionsCategory />
      {questions.map((q) => (
        <Link
          href={`/code/${q._id}`}
          key={q._id}
          className="text-white bg-slate-800 rounded-xl w-2/3 px-6 py-4 mb-4 text-2xl flex flex-row justify-between hover:bg-gray-700"
        >
          <h1>{q.name}</h1>
          <h1
            className={
              q.difficulty === "easy"
                ? "text-green-600"
                : q.difficulty === "medium"
                ? "text-orange-600"
                : q.difficulty === "hard"
                ? "text-red-600"
                : ""
            }
          >
            {q.difficulty}
          </h1>
        </Link>
      ))}
    </div>
  );
}
