import Link from "next/link"
function Features() {
  return (
    <div className="flex flex-col py-20 md:px-20 px-10 bg-black text-white items-center">
      <h1 className="text-5xl font-extrabold">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-evenly w-full mt-10">
        <Link href="/code" className="p-12 border rounded-xl border-neutral-100/30 flex flex-col items-center justify-evenly text-center feature-card1">
          <h2 className="text-3xl mb-2">Algorithm questions</h2>
          <p>Practice data structures and algorithm questions.</p>
        </Link>
        <div className="p-12 border rounded-xl border-neutral-100/30 flex flex-col items-center justify-evenly text-center feature-card2">
          <h2 className="text-3xl mb-2">Flashcards MCQ</h2>
          <p>Test your theory knowledge.</p>
        </div>
        <div className="p-12 border rounded-xl border-neutral-100/30 flex flex-col items-center justify-evenly text-center feature-card3">
          <h2 className="text-3xl mb-2">Lessons</h2>
          <p>Quick lessons on javascript</p>
        </div>
      </div>
    </div>
  )
}
export default Features