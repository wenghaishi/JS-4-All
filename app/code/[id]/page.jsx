
import Editor from "@/app/components/Editor"

export default async function page( { params: { id } }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${apiUrl}/api/questions/${id}`, { cache: 'no-store' })

  if (!response.ok) throw new Error("failed to fetched data");
  const question = await response.json()

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center pt-16">
      {/* <h1 className="text-white my-6 text-3xl font-black">{question.name}</h1>
      <Editor code={question.code} /> */}
    </div>
  )
}
