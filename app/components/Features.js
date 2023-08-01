function Features() {
  return (
    <div className="flex flex-col py-20 md:px-20 px-10 bg-black text-white items-center">
      <h1 className="text-5xl font-extrabold">Features</h1>
      <div className="grid grid-cols-3 gap-8 justify-evenly w-full mt-10">
        <div className="p-12 border rounded-xl border-neutral-100/30 flex flex-col items-center justify-evenly">
          <h2 className="text-2xl mb-2">Algorithm questions</h2>
          <p>Practice data structures and algorithm questions.</p>
        </div>
        <div className="p-12 border rounded-xl border-neutral-100/30 flex flex-col items-center justify-evenly">
          <h2 className="text-2xl mb-2">Flashcards MCQ</h2>
          <p>Test your theory knowledge.</p>
        </div>
        <div className="p-12 border rounded-xl border-neutral-100/30 flex flex-col items-center justify-evenly">
          <h2 className="text-2xl mb-2">Lessons</h2>
          <p>Quick lessons on javascript</p>
        </div>
      </div>
    </div>
  )
}
export default Features