"use client";
import React, { useState, useRef, useEffect } from "react";
import SignUpCarouselCard from "@/components/SignUpCarouselCard";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { useUserInfoContext } from "@/context/userinfoContext";

const SignUp = () => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useUserInfoContext(); 

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const usernameFormRef = useRef(null);
  const signupFormRef = useRef(null);

  // Conditional state to check if username is picked or not
  const [pickedUsername, setPickeUsername] = useState(false);
  // State to store username temporarily
  const [username, setUsername] = useState("");
  // state to toggle show and hide password
  const [showPassword, setShowpassword] = useState(false);
  //conditional state to toggle otp input visibility
  const [showOtpInput, setShowOtpInput] = useState(false);
  // state to store otp temporarily
  const [otp, setOtp] = useState();
  // state to store err message for invalid otp
  const [otpError, setOtpError] = useState(
    "The OTP you entered is Invalid or Expired."
  );
  // state to toggle show and hide otp error
  const [throwOtpError, setThrowOtpError] = useState(false);
  // state to store user crendentials temorarily
  const [credentials, setCredentials] = useState({});
  //state to show message that otp is sent to gmail
  const [showOtpMsg, setShowOtpMsg] = useState(false);
  // state to store time for 5min otp countdown
  const [timeLeft, setTimeLeft] = useState(300);
  // state to check if timer is active or not
  const [isActive, setIsActive] = useState(false);
  // state to show resend otp button
  const [showResendOtpBtn, setShowResendOtpBtn] = useState(false);
  // state to check if otp is in resending state
  const [isResending, setIsResending] = useState(false);
  //state to show account already exists message
  const [isExist, setIsExist] = useState(false);
  //state to show if username is already taken
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  // use effect to rerender the component when otp state is set
  useEffect(() => {
    if (otp || credentials) {
      console.log("OTP updated:" || credentials);
    }
  }, [otp, credentials]);

  //otp timer
  useEffect(() => {
    let intervalId;

    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Decrement the time every second
    }

    if (timeLeft === 0) {
      setIsActive(false);
      setShowResendOtpBtn(true);
      setOtp("");
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setTimeLeft(300);
    setIsActive(false);
  };

  //check if username already taken
const verifyUsername = async (data) => {
  try {
    let url = "/api/signup/isUsernameTaken";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  let r = await res.json();
  if (r.exists) {
    setIsUsernameTaken(true);
  } else {
    setUsername(data.username);
    setPickeUsername(true);
    console.log("Username picked: ", data.username);
  }
} catch(error) {
  console.log(error);
}
}

  // username submission
  const pickUsername = async (data) => {
    await verifyUsername(data);
  };

 // programmatically trigger form submission
 const triggerFormSubmit = () => {
  if (!pickedUsername) {
    usernameFormRef.current?.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  } else {
    handleSubmit(signup)();
  }
};

  // request otp function
  const requestOtp = async (data) => {
    let url = "/api/signup/reqOtp";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let r = await res.json();
    if (r.exists) {
      setIsExist(true);
    } else {
      setOtp(r.otp);
      setIsExist(false);
      setShowOtpMsg(true);
      startTimer();
      setShowOtpInput(true);
    }
  };

  // signup form submission
  const signup = async (data) => {
    if (!showOtpInput) {
      await requestOtp(data);
      setCredentials(data);
    } else if (showOtpInput && pickedUsername && data.otp != otp) {
      setThrowOtpError(true);
    } else if (pickedUsername && data.otp == otp) {
      await registerUser();
      router.push('/dashboard');
    }
  };

  //this function sends post request to server to register user if correct otp is entered
  const registerUser = async () => {
    let url = "/api/signup/register";
    try {
      console.log(credentials);
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      let r = await res.json();
      console.log("response: ", r.message);
      setUserInfo(r.userInfo);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  
  //resend otp button click
  const resendOtp = async () => {
    if(!showResendOtpBtn) {
      
    } else {
      setIsResending(true);
      await requestOtp(credentials);
      setIsResending(false);
      setShowResendOtpBtn(false);
      resetTimer();
      startTimer();
    }
  };

  return (
    <div className="flex">
      <aside className="bg-elementColor w-[30vw] h-[100vh] overflow-x-hidden md:flex flex-col items-start justify-center gap-10 py-5 hidden pl-10">
        <a href="/">
          <div className="flex gap-4 items-center absolute top-8 w-full justify-start">
            <img
              src="/assets/tea logo with outline.png"
              alt="logo"
              width={40}
            />
            <h1 className="text-2xl text-white font-kaushanScript relative top-3 ">
              Get me a tea
            </h1>
          </div>
        </a>
        <div className="flex items-center w-[260%] gap-10 ml-3">
          <SignUpCarouselCard />
        </div>
      </aside>

      <main className="md:w-[70vw] w-[100vw] h-[100vh] bg-[#f2f2f2] ">
        <div className="flex w-full justify-between md:justify-end items-center px-5 md:py-7">
          <a href="/">
            <img
              src="/assets/tea logo.png"
              alt="logo"
              width={30}
              className="md:hidden m-3"
            />
          </a>
          <div className="md:block hidden">Already have an account?</div> &nbsp;
          <a href="/login" className="underline mt-5 md:mt-auto">
            Login
          </a>
        </div>

        {/* Username pick form */}
        <form
          ref={usernameFormRef}
          onSubmit={handleSubmit(pickUsername)}
          className={`flex flex-col justify-center w-[100%] h-[30%] md:h-[75%] md:pl-[15rem] pl-[1rem] ${
            pickedUsername ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col gap-1 w-[95%] md:w-[60%]">
            <h2 className="text-2xl md:text-4xl font-semibold">
              Create your account
            </h2>
            <p className="text-secondaryTextColor text-sm">
              Choose a username for your page.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="your username"
                className={`md:p-3 py-4 my-2 rounded-xl text-sm md:text-lg bg-gray-300 w-full placeholder:text-secondaryTextColor text-black md:pl-[155px] pl-[125px] focus:bg-white ${
                  errors.username &&
                  "focus:border-red-500 border-red-500 focus:border-2 border-2 focus:outline-none"
                }`}
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is required",
                  },
                  minLength: {
                    value: 4,
                    message: "username must be of 4 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "username cannot be more than 12 character",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "Username can only contain letters and numbers.",
                  },
                })}
              />
              <span className="absolute ml-4 font-semibold text-sm md:text-lg ">
                getmeatea.com/
              </span>
            </div>
            <div className={`text-red-500 text-xs md:text-sm ${isUsernameTaken ? '' : 'hidden'}`}>This username is already taken</div>
            {errors.username && (
              <p className="text-red-500 capitalize">
                {errors.username.message}
              </p>
            )}
          </div>
        </form>

        {/* signup form */}
        <form
          ref={signupFormRef}
          onSubmit={handleSubmit(signup)}
          className={`flex flex-col justify-center md:items-center gap-5 w-[100%] h-[45%] md:h-[75%] md:pl-[1rem] ${
            pickedUsername ? "" : "hidden"
          }`}
        >
          <div className="w-[100%] md:w-[80%] flex flex-col items-center py-6">
            <h2 className="text-3xl font-semibold mb-4">Welcome, {username}</h2>

            <div className="w-[80%] md:w-[45%]">
              <input
                type="email"
                placeholder="Email"
                className={`md:p-2 py-4 my-2 px-4 rounded-xl text-xs md:text-lg bg-gray-300 placeholder:text-secondaryTextColor w-full text-black focus:bg-white ${
                  errors.email &&
                  "focus:border-red-500 border-red-500 focus:border-2 border-2 focus:outline-none"
                }`}
                {...register("email", {
                  required: pickedUsername ? true : false,
                })}
              />
              <div className={`text-red-500 mb-2 text-xs md:text-sm ${isExist ? '' : 'hidden'}`}>An account with this email already exist &nbsp;<a href="/login" className="underline font-semibold text-black">login?</a></div>
              <div className="flex flex-col items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`md:p-2 py-4 my-2 px-4 rounded-xl text-xs md:text-lg bg-gray-300 placeholder:text-secondaryTextColor w-full text-black focus:bg-white ${
                    errors.password &&
                    "focus:border-red-500 border-red-500 focus:border-2 border-2 focus:outline-none"
                  }`}
                  {...register("password", {
                    required: {
                      value: pickedUsername ? true : false,
                      message: "password is required",
                    },
                    maxLength: {
                      value: 12,
                      message:
                        "password cannot contain more than 12 characters",
                    },
                    minLength: {
                      value: 6,
                      message: "password must contain atleast 6 characters",
                    },
                    validate: {
                      noSpaces: (value) =>
                        !/\s/.test(value) || "Password cannot contain spaces",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 capitalize w-full">
                    {errors.password.message}
                  </p>
                )}
                <div
                  onClick={() => {
                    showPassword
                      ? setShowpassword(false)
                      : setShowpassword(true);
                  }}
                  className="absolute md:ml-[21.5rem] ml-[15rem] mt-5"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </div>
                <input
                  type="number"
                  placeholder="Enter OTP"
                  className={`md:p-2 py-4 my-2 px-4 rounded-xl text-xs md:text-lg bg-gray-300 placeholder:text-secondaryTextColor w-full text-black focus:bg-white ${
                    showOtpInput ? "" : "hidden"
                  }`}
                  {...register("otp", {
                    required: showOtpInput ? true : false,
                  })}
                />
                <p className={`${showOtpMsg ? "" : "hidden"}`}>
                  OTP sent to your gmail{" "}
                  <span className={`${isResending ? "hidden" : ""}`}>
                    <b>
                      expires in {minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </b>
                  </span>{" "}
                  <button
                    onClick={resendOtp}
                    className={`font-bold italic underline ${
                      showResendOtpBtn ? "" : "hidden"
                    } ${isResending ? "hidden" : ""}`}
                  >
                    Resend OTP
                  </button>{" "}
                  <span
                    className={`italic font-bold ${
                      isResending ? "" : "hidden"
                    }`}
                  >
                    Resending OTP...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>

        <div
          className={`bg-[#F2F0EF] border-2 border-black md:w-[35vw] w-[80vw] fixed flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[20px] py-6 gap-5 ${
            throwOtpError ? "" : "hidden"
          }`}
        >
          <h2 className="font-bold text-2xl md:text-3xl">Invalid OTP!!!</h2>
          <p className="text-xl font-semibold mx-3 text-center">{otpError}</p>
          <button
            onClick={() => {
              setThrowOtpError(false);
            }}
            className="bg-elementColor px-10 py-3 rounded-full text-white font-semibold text-sm md:text-lg"
          >
            Re-Enter OTP
          </button>
        </div>

        <hr className="h-[0.5px] border-0 bg-gray-300" />

        {/* Footer with submit button */}
        <footer className="flex md:flex-row flex-col items-center justify-between h-24 px-10 mt-5 md:mt-auto">
          <p className="hidden md:block">
            By continuing, you agree to the terms of service and privacy policy.
          </p>
          <button
            type="button"
            onClick={triggerFormSubmit}
            disabled={isSubmitting}
            className={`bg-elementColor py-4 text-center w-full md:w-auto md:px-16 text-white rounded-full font-semibold hover:bg-[#3256d5] active:bg-[#184aff] flex justify-center items-center gap-1 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Signup"}
          </button>
          <p className="text-xs block md:hidden">
            By continuing, you agree to the terms of service and privacy policy.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default SignUp;