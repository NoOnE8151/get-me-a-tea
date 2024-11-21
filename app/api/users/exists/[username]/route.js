import { NextResponse } from "next/server";
import { connectDB } from "@/connections/dbConnect";
import { Profile } from "@/models/Profiles";
connectDB();

export async function GET(request, { params }) {
    const {username} = params;
  try {
    const user = await Profile.findOne({ username: username });
    return new Response(
      JSON.stringify({
        exists: user ? true : false,
      })
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "something went wrong, check for server side error",
    });
  }
}