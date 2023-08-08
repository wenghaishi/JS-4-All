async function page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${apiUrl}/api/flashcards/javascript`, {cache: 'no-store'})

  if (!response.ok) throw new Error("failed to fetched data");
  const jsFlashcards = await response.json()
  console.log(jsFlashcards[0].description)
  return (
    <div className="bg-black pt-16 h-screen text-white">
      <h1 className="text-white">{jsFlashcards[0].description}</h1>
      </div>
  )
}
export default page