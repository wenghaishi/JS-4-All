"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import "../../app/globals.css";
import styled from "styled-components";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("javascript", js);

const CodeBlock = styled(SyntaxHighlighter)`
  font-size: 14px;
`;

const CodeEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

function Editor({ code, description, language, onChange, test, answer }) {
  const [userCode, setUserCode] = useState("");
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
      console.log(evaluatedCode)
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
        <div className="flex flex-row">
          <button
            className={`text-white border-r border-neutral-50/20 w-1/2 p-3 ${
              currentTab === 0 ? "bg-black " : "border-b bg-[#1e1e1e]"
            }`}
            onClick={() => setCurrentTab(0)}
          >
            Description
          </button>
          <button
            className={`text-white border-neutral-50/20 w-1/2 p-3 ${
              currentTab === 1 ? "bg-black " : "border-b bg-[#1e1e1e]"
            }`}
            onClick={() => setCurrentTab(1)}
          >
            Solution
          </button>
        </div>
        {currentTab === 0 ? (
          <h1 className="p-6 bg-black h-full tracking-widest">{styledParts}</h1>
        ) : (
          <div className="flex items-center h-full w-full overflow-x-hidden justify-center">
            <CodeBlock
              language="javascript"
              style={atomDark}
              customStyle={{
                backgroundColor: "transparent",
                opacity: "1",
                paddingLeft: "25px",
                paddingRight: "15px",
                marginTop: "10px",
                width: "100%",
                overflow: "hidden",
                height: "100%",
                width: "100%",
                display: "flex",
              }}
            >
              {answer}
            </CodeBlock>
          </div>
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
      <div className="flex bg-black flex-row items-start justify-between">
        <h3 className="border flex flex-row justify-between border-neutral-50/20 w-full mr-3 tracking-widest px-6 py-4 text-slate-100">
          Output: {output && output}
          {correct !== undefined && (
            <div className="flex flex-row">
              <p
                className={`${
                  correct ? "text-green-500" : "text-red-500"
                } mr-6`}
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
