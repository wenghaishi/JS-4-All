import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(request) {
  const { name, email, password, image } = await request.json();
  // const hashedPassword = await hash(password, 12);
  await connectDB();
  const userExists = await User.findOne({ email });
  if (userExists) {
    return NextResponse.json(
      { message: "user already exist" },
      { status: 400 }
    );
  }
  const user = await User.create({
    name,
    email,
    password,
    image:
      image ||
      "https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg",
  });

  console.log(user)
  return NextResponse.json(user);
}
