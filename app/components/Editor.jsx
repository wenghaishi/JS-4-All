"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Editor({ code, description, language, onChange, test }) {
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");
  const [correct, setCorrect] = useState();

  // highlight certain words
  const parts = description.split(/:(\w+)/);
  const styledParts = parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span className="text-green-400 italic" key={index}>
          {part}
        </span>
      );
    }
    return part;
  });

  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: 14,
    automaticLayout: true,
  };

  const handleEditorChange = (value) => {
    setUserCode(value);
  };

  // run user code
  const runCode = () => {
    try {
      let evaluatedCode = eval(userCode); // Evaluate the user's code
      if (Array.isArray(evaluatedCode)) {
        evaluatedCode = "[" + evaluatedCode.join(", ") + "]";
        evaluatedCode = evaluatedCode.replace(" ", "");
        if (JSON.stringify(evaluatedCode) === JSON.stringify(test[0])) {
          setCorrect(true);
        } else {
          setCorrect(false);
        }
      }

      if (JSON.stringify(evaluatedCode) === JSON.stringify(test[0])) {
        setCorrect(true);
      } else {
        setCorrect(false);
      }

      setOutput(evaluatedCode);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-11/12 flex flex-row text-white">
        <h1 className="w-1/3 tracking-wide p-6 mr-2 border border-neutral-50/20 text-md">
          {styledParts}
        </h1>
        <CodeEditor
          height="70vh"
          width="83.33%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={`${code}`}
          options={editorOptions}
          value={userCode}
          onChange={handleEditorChange}
        />
      </div>

      <div className="flex flex-row items-center justify-between mt-2 w-11/12">
        <h3 className="border flex flex-row justify-between border-neutral-50/20 w-full mr-3 tracking-widest px-6 py-4 text-slate-100">
          Output: {output && output}
          {correct !== undefined && (
            <div className="flex flex-row">
              <p className={`${correct ? "text-green-500" : "text-red-500"} mr-6`}>
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
    </>
  );
}

export default Editor;
