import connectDB from "@/lib/mongodb";
import Flashcard from "@/models/Flashcard";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const questions = await Flashcard.find({ category: "css" });
  return NextResponse.json(questions);
}
