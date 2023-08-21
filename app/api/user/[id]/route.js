import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PATCH(req, {params}) {
  const {id} = params
  await connectDB();
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { $inc: { flashcardCompletions: amountToAdd } },
    { new: true } // This option returns the updated document
  );
  return NextResponse.json(updatedUser);
}

// export async function PUT(req, {params}) {
//   const {id} = params

//   await connectDB();
  
//   return NextResponse.json(user);
// }
