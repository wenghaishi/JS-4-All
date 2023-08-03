import Marquee from "react-fast-marquee";
import Link from "next/link";
import getAllQuestions from "../../lib/getAllQuestions";

async function IndexMarquee() {

  const questions = await getAllQuestions()
  return (
    <Marquee className="my-16">
      {questions.map((q)=> <Link href={`/code/${q._id}`} key={q._id} className="text-white text-center flex items-center justify-center border w-80 h-32 border-neutral-50/30 rounded-lg mx-10 px-10">{q.name}</Link>)}
    </Marquee>
  )
}
export default IndexMarquee