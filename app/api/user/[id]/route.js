import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  const { id } = params;
  const { amountToAdd, name, email } = await req.json();
  console.log(amountToAdd)
  console.log(name)
  console.log(email)
  await connectDB();

  let updateObject = {};

  if (amountToAdd !== undefined) {
    updateObject = { $inc: { flashcardCompletions: amountToAdd } }
  }

  if (name !== undefined) {
    updateObject.$set = { name }; // Set the name only if it's provided
  }

  if (email !== undefined) {
    updateObject.$set = { ...updateObject.$set, email }; // Set the email only if it's provided
  }

  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    updateObject,
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
