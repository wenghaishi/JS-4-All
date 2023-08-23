"use client";

function QuestionsCategory(props) {
  return (
    <div className="h-20 flex flex-row justify-center items-center text-white w-screen">
      <h1
        className="px-4 py-2 border rounded-xl border-neutral-50/30 mr-4 hover:cursor-pointer"
        onClick={() => props.setAllQuestions()}
      >
        All Questions
      </h1>
      <h1
        className="px-4 py-2 border rounded-xl border-neutral-50/30 mr-4 hover:cursor-pointer"
        onClick={() => props.handleSort("array")}
      >
        Array
      </h1>
      <h1
        className="px-4 py-2 border rounded-xl border-neutral-50/30 mr-4 hover:cursor-pointer"
        onClick={() => props.handleSort("string")}
      >
        String
      </h1>
      <h1
        className="px-4 py-2 border rounded-xl border-neutral-50/30 mr-4 hover:cursor-pointer"
        onClick={() => props.handleSort("tree")}
      >
        Tree
      </h1>
      <h1
        className="px-4 py-2 border rounded-xl border-neutral-50/30 mr-4 hover:cursor-pointer"
        onClick={() => props.handleSort("dynamic")}
      >
        Dynamic programming
      </h1>
      <h1
        className="px-4 py-2 border rounded-xl border-neutral-50/30 hover:cursor-pointer"
        onClick={() => props.handleSort("hash")}
      >
        Hash Table
      </h1>
    </div>
  );
}
export default QuestionsCategory;
