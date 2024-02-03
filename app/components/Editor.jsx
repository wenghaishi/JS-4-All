"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "../../app/globals.css";
import CodeBlock from "./questionsPage/CodeBlock";
import DescriptionNav from "./questionsPage/DescriptionNav";
import EditorOutput from "./questionsPage/EditorOutput";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";

const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Editor({ code, description, language, onChange, test, answer }) {
  const [userCode, setUserCode] = useState();
  const [output, setOutput] = useState("");
  const [correct, setCorrect] = useState();
  const [currentTab, setCurrentTab] = useState(0);
  const [split, setSplit] = useState(30);

  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(400); // Initial width of the resizable component

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging == true) {
      const mousePostionX = e.pageX;
      setWidth(mousePostionX);
    }
  };

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
  return (
    <div
      className="flex flex-col w-screen h-5/6 ml-2 mr-2"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="flex flex-row h-5/6 " id="container">
        <div
          className="tracking-wide bg-black text-white border resizable-div border-neutral-50/20 text-md flex flex-col border-r"
          style={{ width: `${width}px` }}
        >
          <DescriptionNav
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          {currentTab === 0 ? (
            <h1 className="p-6 bg-black h-full tracking-widest">
              {styledParts}
            </h1>
          ) : (
            <CodeBlock answer={answer} />
          )}
        </div>
        <div
          className="w-2 hover:bg-blue-700 cursor-col-resize"
          onMouseDown={handleMouseDown}
        ></div>
        <div style={{ width: `calc(100% - ${width}px)` }}>
          <CodeEditor
            defaultLanguage="javascript"
            theme="vs-dark"
            defaultValue={`${code}`}
            options={editorOptions}
            value={userCode}
            onChange={handleEditorChange}
          />
        </div>
      </div>

      <EditorOutput
        correct={correct}
        output={output}
        runCode={runCode}
        test={test}
      />
    </div>
  );
}

export default Editor;
