import getAllQuestions from "@/lib/getAllQuestions";
import QuestionsCategory from "../components/QuestionsCategory";
import Link from "next/link";

async function Code() {
  const questions = await getAllQuestions();
  return (
    <div className="bg-black pt-16 h-screen w-full flex flex-col items-center">
      <QuestionsCategory />
      {questions.map((q) => (
        <Link
          href='/'
          key={q._id}
          className="text-white bg-slate-800 rounded-xl w-2/3 px-6 py-4 text-4xl"
        >
          {q.name}
        </Link>
      ))}
    </div>
  );
}
export default Code;
