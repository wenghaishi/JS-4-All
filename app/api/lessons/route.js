import connectDB from "@/lib/mongodb";
import Lesson from "@/models/Lesson";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const lessons = await Lesson.find();
  return NextResponse.json(lessons);
}
