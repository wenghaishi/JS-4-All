import getAllQuestions from "../../lib/getAllQuestions";
import QuestionsCategory from "../components/QuestionsCategory";
import Link from "next/link";

async function Code() {

  const questions = await getAllQuestions();
  return (
    <div className="bg-black pt-16 h-screen w-full flex flex-col items-center">
      <QuestionsCategory />
      {questions.map((q) => (
        <Link
          href={`/code/${q._id}`}
          key={q._id}
          className="text-white bg-slate-800 mb-6 rounded-xl flex flex-row justify-between w-2/3 px-4 py-4 text-2xl"
        >
          {q.name}
          <p className={`text-xl ${q.difficulty === 'easy' ? 'text-green-500' : q.difficulty === 'medium' ? 'text-orange-500' : 'text-red-500'}`}>{q.difficulty}</p>
        </Link>
      ))}
    </div>
  );
}
export default Code;
