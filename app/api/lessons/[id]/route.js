import connectDB from "@/lib/mongodb";
import Lesson from "@/models/Lesson";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const {id} = params
  await connectDB();
  const lesson = await Lesson.findById(id);
  return NextResponse.json(lesson);
}
