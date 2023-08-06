import Editor from "@/app/components/Editor"

async function page( { params: { id } }) {
  const question = await (await fetch(`https://js-4-all.vercel.app/api/questions/${id}`, { cache: 'no-store' })).json()
  console.log(question.name)
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center pt-16">
      <h1 className="text-white my-6 text-3xl font-black">{question.name}</h1>
      <Editor code={question.code} />
    </div>
  )
}
export default page