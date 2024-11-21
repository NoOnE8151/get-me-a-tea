import { NextResponse } from "next/server";
import { Profile } from "@/models/Profiles.js";
import { connectDB } from "@/connections/dbConnect";
connectDB();

export async function POST(request) {
  try {
    const data = await request.json();
    const user = new Profile({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    await user.save();

    const userInfoObj = await Profile.findOne({email: data.email});
    console.log("saved data successfully");
    return new Response(JSON.stringify({ message: "User registered", userInfo: userInfoObj }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
}
