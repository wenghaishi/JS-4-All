import Link from "next/link"

function page() {
  return (
    <div className="h-screen bg-black text-white pt-16 flex flex-col items-center">
      <h1 className="tex-white text-4xl mt-16">Test your knowledge in the following</h1>
      <div className="grid grid-cols-2 w-full px-10 gap-10 mt-10">
        <Link href="/flashcards/react" className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 text-3xl">React</Link>
        <Link href="flashcards/javascript" className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 text-3xl">Javascript</Link>
        <div className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 text-3xl">HTML</div>
        <div className="border border-neutral-50/30 rounded-xl flex items-center justify-center h-44 text-3xl">Css</div>

      </div>
    </div>
  )
}
export default page