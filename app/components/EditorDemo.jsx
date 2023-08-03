"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function EditorDemo({ code, language, onChange }) {
  const [userCode, setUserCode] = useState("");
  const [output, setOutput] = useState("");

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
      <CodeEditor
        height="60vh"
        width="83.33%"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={code}
        options={editorOptions}
        value={userCode}
        onChange={handleEditorChange}
      />
      <div className="flex flex-row items-center justify-between mt-3 w-10/12">
        <h3 className="border border-neutral-50/30 w-full mr-3 tracking-widest px-6 py-4 text-slate-100">
          Output: {output && output}
        </h3>
        <button onClick={runCode} className="bg-white px-16 py-4 rounded-lg">
          Run
        </button>
      </div>
    </>
  );
}

export default EditorDemo;
