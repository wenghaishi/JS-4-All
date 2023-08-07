import Editor from "@/app/components/Editor"

async function page( { params: { id } }) {
  const response = await fetch(`${process.env.NEXT_API}/api/questions/${id}`, { cache: 'no-store' })

  if (!response.ok) throw new Error("failed to fetched data");
  const question = await response.json()

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center pt-16">
      <h1 className="text-white my-6 text-3xl font-black">{question.name}</h1>
      <Editor code={question.code} />
    </div>
  )
}
export default page