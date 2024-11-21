import { NextResponse } from "next/server";
import { Profile } from "@/models/Profiles";
import { connectDB } from "@/connections/dbConnect";
connectDB();

export async function POST(request) {
    try {
        const data = await request.json();
        const user = await Profile.findOne({ username: data.username });

        if (user) {
            return new Response(JSON.stringify({ exists: true }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } else {
            return new Response(JSON.stringify({ exists: false }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }
}
