

import getAllFlashcards from "@/lib/getAllFlashcards";
async function page() {

  const handleSelect = () => {
    console.log("clicked")
  }
  const jsFlashcards = await getAllFlashcards()



  return (
    <div className="bg-black pt-16 h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-white text-xl tracking-wider my-10">
        {jsFlashcards[0].description}
      </h1>
      {jsFlashcards[0].options.map((option) => (
        <div
          // onClick={handleSelect}
          key={option}
          className="text-white border text-xl border-neutral-50/30 w-8/12 text-center rounded-xl mb-10 py-10"
        >
          {option}
        </div>
      ))}
    </div>
  );
}
export default page;
