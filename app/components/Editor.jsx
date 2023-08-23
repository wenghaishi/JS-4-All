"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import "../../app/globals.css";
import CodeBlock from "./questionsPage/CodeBlock";
import DescriptionNav from "./questionsPage/DescriptionNav";
import EditorOutput from "./questionsPage/EditorOutput";

const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Editor({ code, description, language, onChange, test, answer }) {
  const [userCode, setUserCode] = useState();
  const [output, setOutput] = useState("");
  const [correct, setCorrect] = useState();
  const [currentTab, setCurrentTab] = useState(0);

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
    fontSize: 15,
    automaticLayout: true,
  };

  const handleEditorChange = (value) => {
    setUserCode(value);
  };

  // run user code
  const runCode = () => {
    try {
      let evaluatedCode = eval(userCode); // Evaluate the user's code
      console.log(evaluatedCode);
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

  const ELEMENT_MAP = {
    a: (
      <div className="tracking-wide bg-black text-white  border border-neutral-50/20 text-md flex flex-col">
        <DescriptionNav currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        {currentTab === 0 ? (
          <h1 className="p-6 bg-black h-full tracking-widest">{styledParts}</h1>
        ) : (
          <CodeBlock answer={answer} />
        )}
      </div>
    ),
    b: (
      <CodeEditor
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={`${code}`}
        options={editorOptions}
        value={userCode}
        onChange={handleEditorChange}
      />
    ),
    c: (
      <EditorOutput correct={correct} output={output} runCode={runCode} test={test}/>
    ),
  };

  return (
    <Mosaic
      className="bg-black text-black"
      renderTile={(id) => ELEMENT_MAP[id]}
      initialValue={{
        direction: "column",
        first: {
          direction: "row",
          first: "a",
          second: "b",
          splitPercentage: 30,
        },
        second: "c",
        splitPercentage: 90,
      }}
    />
  );
}

export default Editor;
