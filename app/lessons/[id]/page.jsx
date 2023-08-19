async function page({ params: { id } }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/lessons/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("failed to fetched data");
  const lesson = await response.json();

  return (
    <div className="h-screen text-center pt-16 bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl mt-16">{lesson.name}</h1>
      {lesson.sections.map((section) => (
        <div key={section.id}>
          <h2 className="text-2xl mt-10">{section.title}</h2>
          <p className="text-base mt-6 sm:px-10 md:px-14">{section.body}</p>
        </div>
      ))}
    </div>
  );
}
export default page;
