async function page({ params: { id } }) {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${apiUrl}/api/lessons/${id}`, { cache: 'no-store' })

  if (!response.ok) throw new Error("failed to fetched data");
  const lesson = await response.json()

  return (
    <div className="h-screen pt-16 bg-black text-white">{lesson.name}</div>
  )
}
export default page