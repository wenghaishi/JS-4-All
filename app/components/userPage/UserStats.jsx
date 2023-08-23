export default function UserStats({data}) {
  return (
    <div className="w-4/6 bg-gray-800 p-14 rounded-xl">
      <h1 className="text-white text-lg tracking-wide">
        Flashcard completions:{" "}
        <span className="text-green-500">
          {data && data.flashcardCompletions}
        </span>
      </h1>
      <h1 className="text-white text-lg tracking-wide">
        Algo-question completions:
      </h1>
    </div>
  );
}
