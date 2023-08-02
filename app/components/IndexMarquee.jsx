import Marquee from "react-fast-marquee";
import Link from "next/link";

function IndexMarquee() {

  const questions = [
    {name: "Longest sub-string", _id: "1"},
    {name: "Two Sum", _id: "2"},
    {name: "Counting Bits", _id: "3"},
    {name: "Buddy Strings", _id: "4"},
    {name: "Best Time to Buy and Sell Stock", _id: "5"},

  ]
  return (
    <Marquee className="my-16">
      {questions.map((q)=> <Link href={`/code/${q._id}`} key={q._id} className="text-white text-center flex items-center justify-center border w-80 h-32 border-neutral-50/20 rounded-lg mx-10 px-10">{q.name}</Link>)}
    </Marquee>
  )
}
export default IndexMarquee