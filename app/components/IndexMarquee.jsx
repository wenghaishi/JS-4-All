import getAllQuestions from "@/lib/getAllQuestions";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default async function IndexMarquee() {
  const questions = await getAllQuestions();
  return (
    <Marquee className="text-white bg-black pb-36 pt-36">
      {questions.map((q) => (
        <Link
          href={`/code/${q._id}`}
          key={q._id}
          className="text-white border feature-card1 border-neutral-50/30 px-20 py-16 mx-10 rounded-2xl"
        >
          {q.name}
        </Link>
      ))}
    </Marquee>
  );
}
