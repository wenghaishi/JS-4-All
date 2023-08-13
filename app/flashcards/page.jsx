import Link from "next/link"

function page() {
  return (
    <div className="h-screen bg-black text-white pt-16 flex flex-col items-center">
      <h1 className="tex-white sm:text-4xl mt-16">Test your knowledge in the following</h1>
      <div className="grid grid-cols-2 w-full px-10 gap-10 mt-10">
        <Link href="/flashcards/react" className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 sm:text-3xl feature-card1">React</Link>
        <Link href="flashcards/javascript" className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 sm:text-3xl feature-card2">Javascript</Link>
        <Link href="flashcards/html" className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 sm:text-3xl feature-card3">HTML</Link>
        <Link href="flashcards/css" className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 sm:text-3xl feature-card4">Css</Link>

      </div>
    </div>
  )
}
export default page