import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, image } = await request.json();
  await connectDB();
  await User.create({ name, email, image });
  return NextResponse.json({ message: "user registered" }, { status: 201 });
}
