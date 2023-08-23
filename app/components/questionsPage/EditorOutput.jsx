export default function EditorOutput({output, correct, runCode, test}) {
  return (
    <div className="flex bg-black flex-row items-start justify-between">
      <h3 className="border flex flex-row justify-between border-neutral-50/20 w-full mr-3 tracking-widest px-6 py-4 text-slate-100">
        Output: {output && output}
        {correct !== undefined && (
          <div className="flex flex-row">
            <p
              className={`${correct ? "text-green-500" : "text-red-500"} mr-6`}
            >
              {correct ? "Test passed" : "Test failed"}
            </p>
            <p>Answer: {test[0]}</p>
          </div>
        )}
      </h3>
      <button onClick={runCode} className="bg-white px-16 py-4 rounded-lg">
        Run
      </button>
    </div>
  );
}
