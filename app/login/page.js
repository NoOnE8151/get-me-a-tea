"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUserInfoContext } from "@/context/userinfoContext";

const Login = () => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useUserInfoContext(); 
  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm();

  //state to toggle show password icon
  const [showPassword, setShowPassword] = useState(false);
  //state to toggle the error message if an account with provide gmail exists or doesnt
  const [isEmailExists, setIsEmailExists] = useState(true);
  //state to toggle the error is eneterd password is valid or invalid
  const [isValidPassword, setIsValidPassword] = useState(true);

  //post request
  const checkEmail = async (data) => {
    try {
      let url = "/api/login";
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify(data),
      });
    let r = await res.json();
    return r;
  } catch(error) {
    console.log(error);
  }
  }

  //login function
  const login = async (data) => {
    const credentials = await checkEmail(data);
    console.log(credentials);
    setUserInfo(credentials.userInfo);
    if(!credentials.exists) {
      setIsEmailExists(false);
      return;
    } else if(credentials.exists === true && credentials.validePassword === false) {
      isEmailExists ? '' : setIsEmailExists(true);
      setIsValidPassword(false);
      return;
    }
    router.push('/dashboard');
  }

  return (
    <main>
      <nav className="flex justify-between mx-7 my-3 items-center">
        <a href="/">
          <img src="/assets/tea logo.png" alt="logo" width={35} />
        </a>
        <div className="flex items-center text-sm md:text-lg">
          <span className="hidden md:block">Dont have an account?</span> &nbsp;{" "}
          <a href="/signup" className="underline text-lg md:text-xl">
            Sign up
          </a>
        </div>
      </nav>

      <div className="w-[100vw] flex justify-center pt-20">
        <form
        onSubmit={handleSubmit(login)}
        className="flex flex-col items-center gap-6 md:gap-8 md:w-[450px] w-full px-5 md:px-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Welcome back</h2>
          <input
            type="email"
            placeholder="Email"
            className={`w-full px-5 py-3 rounded-xl placeholder:text-secondaryTextColor bg-gray-300 ${
              errors.email &&
              "focus:border-red-500 border-red-500 focus:border-2 border-2 focus:outline-none"
            }`}
            {...register("email", { required: {
              value: true, 
              message: "email is required"
            } })}
          />
          {errors.email && <div className="text-red-500 w-full mt-[-1.7rem] ml-3">Email is required</div>}
          <div className={`mt-[-25px] w-full ml-3 text-red-500 ${isEmailExists ? 'hidden' : ''}`}>Account with this email doesn't exist, <a className="text-red-700 underline italic" href="/signup">signup?</a></div>
          <div className="w-full flex items-center justify-end">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className={`w-full px-5 py-3 rounded-xl placeholder:text-secondaryTextColor bg-gray-300 ${
              errors.email &&
              "focus:border-red-500 border-red-500 focus:border-2 border-2 focus:outline-none"
            }`}
            {...register("password", {required: true})}
            />
            <div
                  onClick={() => {
                    showPassword
                      ? setShowPassword(false)
                      : setShowPassword(true);
                  }}
                className="absolute mr-5">
                  {showPassword ? <Eye /> : <EyeClosed />}
                </div>
            </div>
            {errors.password && <div className="text-red-500 w-full mt-[-1.7rem] ml-3">Password is required</div>}
            <div className={`mt-[-25px] w-full ml-3 text-red-500 ${isValidPassword ? 'hidden' : ''}`}>Entered password is incorrect please check your password</div>

          <input
          type="submit"
            value={isSubmitting ? 'Logging' : 'Login'}
            disabled={isSubmitting}
            className="text-lg font-semibold text-center bg-elementColor rounded-full w-full text-white py-3 px-5 cursor-pointer"
          />
        </form>
      </div>
    </main>
  );
};

export default Login;
