import connectDB from "@/lib/mongodb";
import Question from "@/models/Question";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const questions = await Question.find().lean();
  const questionData = questions.map((question) => ({
    _id: question._id,
    title: question.title,
    // Add other relevant properties you want to include in the response
  }));
  return NextResponse.json({ questions: questionData });
}