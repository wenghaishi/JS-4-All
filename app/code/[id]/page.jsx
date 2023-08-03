import Editor from "../../../app/components/Editor";

async function page({ params: { id } }) {
  const question = await (
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questions/${id}`, {
      cache: "no-store",
    })
  ).json();

  function replaceWordsWithSpan(description) {
    const regex = /:(\w+)/g;
    return description.replace(
      regex,
      '<span class="text-indigo-400">$1</span>'
    );
  }

  const modifiedDescription = replaceWordsWithSpan(question.description);

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center py-16">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-red-500 pt-10 pb-6 text-4xl font-black">
        {question.name}
      </h1>
      <h2
        className="text-white mb-6 tracking-wide text-lg w-10/12 text-justify"
        dangerouslySetInnerHTML={{ __html: modifiedDescription }}
      />
      <Editor code={question.code} />
    </div>
  );
}

export default page;
