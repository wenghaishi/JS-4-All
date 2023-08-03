import connectDB from "../../../../lib/mongodb";
import Question from "../../../../models/Question";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const {id} = params
  await connectDB();
  const question = await Question.findById(id).lean();
  return NextResponse.json(question);
}
