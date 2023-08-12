"use client";

import { useState } from "react";
import Editor from "./Editor";

function Demo() {
  const [code, setCode] = useState(
    "\nconst arr = [2, 7, 11, 15]\nconst target = 9\nconst twoSum = function(arr, target) {\n // write your code here\n}\ntwoSum(arr, target)",
  );

  const description = "Given an array of integers :nums and an integer :target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice."
  
  const test = ["[0,1]"]
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  return (
    <div className="pt-10 pb-20 px-16 flex flex-col items-center  bg-black">
      <h1 className="text-white text-5xl mb-12">Try it out!</h1>
      <h2 className="mb-10 tracking-wider text-3xl w-10/12 text-center text-green-600">Two sum</h2>
      <Editor code={code} description={description} test={test} language="javascript" onChange={handleCodeChange} />
    </div>
  );
}
export default Demo;
