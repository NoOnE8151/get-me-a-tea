import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateOtp } from "@/app/utility/Otp";
import { Profile } from "@/models/Profiles";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);

    // checks if an account with provided email already exists in database, if exists it will terminate api call right here
    const user = await Profile.findOne({ email: data.email });
    if(user) {
      return new Response(JSON.stringify({ exists: true }), {
        status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    const otp = generateOtp();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    
    const info = await transporter.sendMail({
        from: "lomash265@gmail.com",
        to: data.email,
        subject: "Get me a tea varification",
        text: `your otp for signing up to get me a tea is \n \t ${otp} \n this otp is will be expired in 5 minutes.`,
      });
    
      console.log("Message sent: %s", info.messageId);  
      return new Response(JSON.stringify({ message: "Hello, World!", otp: otp }), {
        status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
}