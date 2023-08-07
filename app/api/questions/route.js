

import connectDB from "@/lib/mongodb";
import Question from "@/models/Question";
import { NextResponse } from "next/server";


export async function GET() {
  await connectDB();
  const questions = await Question.find().lean();
  return NextResponse.json(questions);
}
