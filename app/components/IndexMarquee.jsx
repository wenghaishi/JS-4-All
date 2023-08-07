import getAllQuestions from "@/lib/getAllQuestions";
import Marquee from "react-fast-marquee";
import Link from "next/link";

async function IndexMarquee() {
  const questions = await getAllQuestions();
  console.log(questions)
  return (
    <Marquee className="text-white bg-black pb-36 pt-16">
      {questions.map((q) => (
        <Link href={`/code/${q._id}`} key={q._id} className="text-white border border-neutral-50/30 px-20 py-16 mx-10 rounded-2xl">{q.name}</Link>
      ))}
    </Marquee>
  );
}
export default IndexMarquee;