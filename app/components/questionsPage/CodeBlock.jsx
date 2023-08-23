"use client";

import styled from "styled-components";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("javascript", js);

const Code = styled(SyntaxHighlighter)`
  font-size: 14px;
`;

export default function CodeBlock({answer}) {
  return (
    <div className="flex h-full w-full overflow-x-hidden overflow-y-hidden justify-center">
      <Code
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
          width: "100%",
          display: "flex",
        }}
      >
        {answer}
      </Code>
    </div>
  );
}
