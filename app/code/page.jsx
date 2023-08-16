"use client";
import getAllQuestions from "@/lib/getAllQuestions";
import QuestionsCategory from "../components/flashcardsPage/QuestionsCategory";
import Link from "next/link";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Code() {
  const [questions, setQuestions] = useState();
  const [sortedQuestions, setSortedQuestions] = useState()
  // const questions = await getAllQuestions();
  const { data, error, isLoading } = useSWR(`${apiUrl}/api/questions`, fetcher);
  useEffect(() => {
    if (data) {
      setQuestions(data);
      setSortedQuestions(data)
    }
  }, [data]);


  const handleSort = (category) => {
    if (questions) {
      const sorted = questions.filter((q) => q.category.includes(category));
      setSortedQuestions(sorted);
    }
  };

  const setAllQuestions = () => {
    if (questions) {
      setSortedQuestions(questions);
    }
  }

  return (
    <div className="bg-black pt-16 h-screen w-full flex flex-col items-center">
      <QuestionsCategory handleSort={handleSort} setAllQuestions={setAllQuestions}/>
      {sortedQuestions &&
        sortedQuestions.map((q) => (
          <Link
            href={`/code/${q._id}`}
            key={q._id}
            className="text-white bg-slate-800 rounded-xl w-2/3 px-6 py-4 mb-4 text-2xl flex flex-row justify-between hover:bg-gray-700"
          >
            <h1>{q.name}</h1>
            <h1
              className={
                q.difficulty === "easy"
                  ? "text-green-500"
                  : q.difficulty === "medium"
                  ? "text-orange-400"
                  : q.difficulty === "hard"
                  ? "text-red-500"
                  : ""
              }
            >
              {q.difficulty}
            </h1>
          </Link>
        ))}
    </div>
  );
}
