import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  const { id } = params;
  const { amountToAdd } = await req.json();
  console.log(amountToAdd);
  await connectDB();
  const updatedUser = await User.updateOne(
    {_id: id},
    { $inc: { flashcardCompletions: amountToAdd } },
    { new: true } // This option returns the updated document
  );
  return NextResponse.json(updatedUser);
}

export async function GET(req) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  await connectDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json(user);
}
