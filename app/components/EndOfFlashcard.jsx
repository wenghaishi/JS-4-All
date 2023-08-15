import Image from "next/image"
import logo from "../logo.svg"
import Link from "next/link"

function EndOfFlashcard() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={logo} alt="js-4-all logo" width={300} height={300}/>
      <h1 className="mt-6 text-2xl sm:text-4xl">You have reached the end</h1>
      <Link href="/flashcards" className="mt-4 underline italic">Back to flashcards</Link>

    </div>
  )
}
export default EndOfFlashcard