"use client";

import { useState } from "react";
import EditorDemo from "./EditorDemo";
import IndexMarquee from "./IndexMarquee";

function Demo() {
  const [code, setCode] = useState(
    "\nconst arr = [2, 7, 11, 15]\nconst target = 9\nconst twoSum = function(arr, target) {\n // write your code here\n}\ntwoSum(arr, target)",
  );

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  return (
    <div className="pt-10 pb-20 px-16 flex flex-col items-center justify-center w-full bg-black">
      <h1 className="text-white text-5xl mb-12">Try it out!</h1>
      <h2 className="text-white mb-12 tracking-wider text-xl w-10/12 text-center"><span className="text-2xl tracking-wider text-indigo-400">Two sum:</span> Given an array of integers <span className="text-red-400">arr</span> and an integer <span className="text-red-400">target</span>, return indices of the two numbers such that they add up to target.</h2>
      <EditorDemo code={code} language="javascript" onChange={handleCodeChange} />
      <IndexMarquee />
    </div>
  );
}
export default Demo;
