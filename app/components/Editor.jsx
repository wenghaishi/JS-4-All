"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Editor({ code, description, language, onChange }) {
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");

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

  const runCode = () => {
    try {
      let evaluatedCode = eval(userCode); // Evaluate the user's code
      if (Array.isArray(evaluatedCode)) {
        evaluatedCode = "[" + evaluatedCode.join(", ") + "]";
        evaluatedCode = evaluatedCode.replace(" ", "");
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
        <h3 className="border border-neutral-50/20 w-full mr-3 tracking-widest px-6 py-4 text-slate-100">
          Output: {output && output}
        </h3>
        <button onClick={runCode} className="bg-white px-16 py-4 rounded-lg">
          Run
        </button>
      </div>
    </>
  );
}

export default Editor;
