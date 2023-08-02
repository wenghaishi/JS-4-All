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
    <CodeEditor
      height="60vh"
      width="80%"
      defaultLanguage="javascript"
      theme="vs-dark"
      defaultValue={`${code}`}
      options={editorOptions}
      // value={value}
      // onChange={handleEditorChange}
      // theme={theme}
    />
  );
}
export default Editor;
