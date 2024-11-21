import localFont from "next/font/local";
import "./globals.css";
import { UserInfoProvider } from "@/context/userinfoContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Get me a tea",
  description: "Get Me a Tea – A creative platform for supporting creators, inspired by Buy Me a Coffee. Connect with your audience, receive support, and offer exclusive content in a personalized and user-friendly way.",
};

export default function RootLayout({ children }) {
  return (
    <UserInfoProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </UserInfoProvider>
  );
}
