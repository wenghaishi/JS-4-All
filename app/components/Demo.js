"use client";

import { useState } from "react";
import Editor from "./Editor";

function Demo() {
  const [code, setCode] = useState(
    'function hello() {\n  console.log("Hello, Monaco!");\n}'
  );

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  return (
    <div className="pt-10 pb-20 px-16 flex flex-col items-center justify-center w-full bg-black">
      <h1 className="text-white text-5xl mb-16">Try it out!</h1>
      <Editor code={code} language="javascript" onChange={handleCodeChange} />
    </div>
  );
}
export default Demo;
