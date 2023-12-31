import React from "react";

async function page({ params: { id } }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/lessons/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("failed to fetched data");
  const lesson = await response.json();

  const addLineBreaks = (text) => {
    // Split the text by points followed by a space
    const pointsArray = text.split(/\d+\.\s/g);

    // Join the array with <br> elements to add line breaks
    return pointsArray.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />}
        {item}
        {<br />}
      </React.Fragment>
    ));
  };

  return (
    <div className=" text-center min-h-screen pt-16 pb-24 bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl mt-16">{lesson.name}</h1>
      {lesson.sections.map((section) => (
        <section key={section.id}>
          <h2 className="text-2xl mt-10">{section.title}</h2>
          <p className="text-base tracking-wider mt-6 px-4 sm:px-10 mx-6 md:mx-12 md:px-14 bg-slate-800 py-6 md:py-10 rounded-xl">
            {addLineBreaks(section.body)}
          </p>
        </section>
      ))}
    </div>
  );
}
export default page;
