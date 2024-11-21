import { NextResponse } from "next/server";
import { Profile } from "@/models/Profiles.js";
import { connectDB } from "@/connections/dbConnect";
connectDB();

export async function POST(request) {
    try {
        const data = await request.json();
        const user = await Profile.findOne({ email: data.email });

        if (user) {
           if(data.password === user.password) {
            console.log("password matched", user)
            return new Response(JSON.stringify({ exists: true, validPassword: true, userInfo: user }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
           }
           console.log("password is incorrect");
           return new Response(JSON.stringify({ exists: true, validePassword: false }), {
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
