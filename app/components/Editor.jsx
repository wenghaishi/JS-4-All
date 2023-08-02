"use client";
import dynamic from "next/dynamic";

function Editor({ code, language, onChange }) {
  const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
    ssr: false,
  });

  const editorOptions = {
    selectOnLineNumbers: true,
    fontSize: 14,
    automaticLayout: true,
  };

  return (
    <>
      <CodeEditor
        height="60vh"
        width="83.33%"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={`${code}`}
        options={editorOptions}
        // value={value}
        // onChange={handleEditorChange}
        // theme={theme}
      />
      <div className="flex flex-row items-center justify-between mt-3 w-10/12">
        <h3 className="border border-neutral-50/20 w-full mr-3 px-6 py-4 text-slate-100">Output:</h3>
        <button className="bg-white px-16 py-4 rounded-lg">Run</button>
      </div>
    </>
  );
}
export default Editor;
